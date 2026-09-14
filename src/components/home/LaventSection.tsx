import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function LaventSection() {
  return (
    <Section tone="dark" noDividerTop>
      <div className="container-content max-w-5xl text-center">
        <p className="brutal-label-dark">Exclusive Benefit</p>
        <h2 className="brutal-text brutal-text-pink mt-5 text-3xl text-ev-neon-yellow sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Connected with{" "}
          <span className="brutal-text-yellow-bg text-ev-neon-pink">
            Lavent Marketing
          </span>
        </h2>
        <p className="mt-8 md:mt-10 text-lg font-bold leading-relaxed text-white/80 md:text-xl lg:text-2xl">
          When you onboard with Elan Vey, you gain real-world marketing exposure and learning opportunities connected with Lavent Marketing.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Button
            href="https://www.laventmarketing.com/"
            external
            variant="primary"
            size="lg"
          >
            Know More
          </Button>
          <Button href="/about" variant="secondary" size="lg">
            About Us
          </Button>
        </div>
      </div>
    </Section>
  );
}
