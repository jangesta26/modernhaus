import CategorySection from "@/components/Section/CategorySection";
import FeaturedProductSection from "@/components/Section/FeaturedProductSection";
import HeroSection from "@/components/Section/HeroSection";
import Newsletter from "@/components/Section/Newsletter";
import PromotionBanner from "@/components/Banner/PromotionBanner";
import SocialMedia from "@/components/Section/SocialMedia";
import ValuePropositions from "@/components/Section/ValuePropositions";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturedProductSection />
      <ValuePropositions />
      <PromotionBanner 
        title = "Summer Sale is On!"
        description = "Get up to 50% off on selected items. Limited time offer."
        label = "Shop the Sale"
      />
      <Newsletter />
      <SocialMedia />
    </>
  );
}
