import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import { Section } from "@/components/ui/Section";

function StarRating({ rating, color }: { rating: number; color?: string }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-lg ${i < rating ? color || "text-ev-neon-pink" : "text-ev-black/20"}`}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function ReviewsPreview() {
  const preview = testimonials.slice(0, 3);

  return (
    <>
      <div className="checkerboard-divider" aria-hidden />
      <Section tone="dark">
        <div className="container-content">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="brutal-label-dark">Testimonials</p>
              <h2 className="brutal-text brutal-text-pink mt-4 text-3xl text-ev-neon-yellow md:text-5xl">
                What clients say
              </h2>
            </div>
            <Link
              href="/reviews"
              className="font-brutal text-sm uppercase text-ev-neon-cyan hover:text-ev-neon-yellow"
            >
              Read all →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {preview.map((testimonial, i) => (
              <blockquote
                key={testimonial.id}
                className={`flex flex-col border-[3px] border-white p-6 shadow-brutal md:p-8 ${
                  i === 0 ? "bg-ev-neon-pink" : "bg-ev-neon-cream text-ev-black"
                }`}
              >
                <StarRating rating={testimonial.rating} color={i === 0 ? "text-white" : undefined} />
                <p
                  className={`mt-6 flex-1 font-bold leading-relaxed ${
                    i === 0 ? "text-white" : "text-ev-black"
                  }`}
                >
                  &ldquo;{testimonial.review}&rdquo;
                </p>
                <footer
                  className={`mt-8 border-t-[3px] pt-6 ${
                    i === 0 ? "border-white/30" : "border-black"
                  }`}
                >
                  <cite className="not-italic">
                    <p className="font-brutal uppercase text-sm">
                      {testimonial.name}
                    </p>
                    <p
                      className={`mt-1 text-sm font-bold ${
                        i === 0 ? "text-white/70" : "text-ev-black/60"
                      }`}
                    >
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
