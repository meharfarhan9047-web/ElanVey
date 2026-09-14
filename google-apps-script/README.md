# Google Sheets waitlist connection

1. Open the destination Google Sheet and create a tab named `Waitlist`.
2. Add `Email`, `Source`, and `Submitted At` as the first-row headers.
3. Open **Extensions → Apps Script**, replace the editor contents with `Code.gs`, and save.
4. Select **Deploy → New deployment → Web app**. Set **Execute as** to your account and **Who has access** to **Anyone**, then deploy and authorize the script.
5. Copy the URL ending in `/exec`.
6. Add this variable to the production hosting environment (for example, Vercel project settings), then redeploy:

```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec
```

The website server sends signup emails to this URL. The webhook URL stays server-side, duplicate emails are ignored, and each new lead is appended to the `Waitlist` tab.
