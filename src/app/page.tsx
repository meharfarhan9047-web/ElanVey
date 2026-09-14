import { SectionOne } from "@/components/home/SectionOne";
import { SectionThree } from "@/components/home/SectionThree";
import { SectionFour } from "@/components/home/SectionFour";
import { LaventSection } from "@/components/home/LaventSection";
import { SubscriptionPreview } from "@/components/home/SubscriptionPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <SectionOne />
      <SectionThree />
      <SectionFour />
      <SubscriptionPreview />
      <LaventSection />
      <FinalCTA />
    </>
  );
}
