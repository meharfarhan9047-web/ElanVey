/**
 * Elan Vey waitlist → Google Sheets webhook.
 *
 * Sheet setup:
 * 1. Create a sheet named "Waitlist" (or change SHEET_NAME below).
 * 2. Put these headers in row 1: Email | Source | Submitted At
 * 3. Deploy this script as a Web app:
 *    Execute as: Me
 *    Who has access: Anyone
 * 4. Copy the /exec URL into GOOGLE_SHEETS_WEBHOOK_URL in your production
 *    hosting environment. Never expose that URL in client-side code.
 */
const SHEET_NAME = "Waitlist";

function doPost(e) {
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    const email = String(body.email || "").trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse({ ok: false, error: "Valid email required" });
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) return jsonResponse({ ok: false, error: "Waitlist sheet not found" });

    const rows = sheet.getDataRange().getValues();
    const duplicate = rows.slice(1).some((row) => String(row[0] || "").trim().toLowerCase() === email);
    if (!duplicate) {
      sheet.appendRow([
        email,
        String(body.source || "elanvey-waitlist"),
        String(body.submittedAt || new Date().toISOString()),
      ]);
    }
    return jsonResponse({ ok: true, duplicate });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error) });
  }
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
