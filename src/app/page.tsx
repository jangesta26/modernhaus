import CategorySection from "@/components/Section/CategorySection";
import FeaturedProductSection from "@/components/Section/FeaturedProductSection";
import HeroSection from "@/components/Section/HeroSection";
import Newletter from "@/components/Section/Newletter";
import PromotionBanner from "@/components/Section/PromotionBanner";
import SocialMedia from "@/components/Section/SocialMedia";
import ValuePropositions from "@/components/Section/ValuePropositions";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturedProductSection />
      <ValuePropositions />
      <PromotionBanner />
      <Newletter />
      <SocialMedia />
    </>
  );
}
