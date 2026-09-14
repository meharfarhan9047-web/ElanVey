import { Button } from "@/components/ui/Button";
import { CTABlock } from "@/components/ui/CTABlock";

export function FinalCTA() {
  return (
    <CTABlock
      dark={false}
      className="!py-10 md:!py-16 lg:!py-20"
      title="Ready to get started?"
      description="Join Elan Vey and build the presence, strategy, and growth your ideas deserve."
    >
      <Button href="/contact" size="lg">
        Get Started Today
      </Button>
      <Button href="/subscription" variant="secondary" size="lg">
        View Subscription
      </Button>
    </CTABlock>
  );
}
