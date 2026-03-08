import HeroSection from "@/components/home/HeroSection";
import FeaturedPets from "@/components/home/FeaturedPets";
import NaazKoolPromise from "@/components/home/NaazKoolPromise";
import ProductShop from "@/components/home/ProductShop";
import GroomingTeaser from "@/components/home/GroomingTeaser";
import BreedsCarousel from "@/components/home/BreedsCarousel";
import Testimonials from "@/components/home/Testimonials";
import CommunityBanner from "@/components/home/CommunityBanner";
import BlogPreview from "@/components/home/BlogPreview";
import { getSiteContent } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const siteData = await getSiteContent();

  return (
    <>
      {/* Section 1 + 2: Hero + Marquee Ticker */}
      <HeroSection siteData={siteData} />

      {/* Section 3: Featured Pets — Magazine Grid */}
      <FeaturedPets />

      {/* Section 4: Naaz Kool Promise — Dark Cards */}
      <NaazKoolPromise />

      {/* Section 5: Product Shop — Light Contrast Section */}
      <ProductShop />

      {/* Section 6: Grooming — Diagonal Split */}
      <GroomingTeaser />

      {/* Section 7: Breeds Carousel */}
      <BreedsCarousel />

      {/* Section 8: Testimonials */}
      <Testimonials />

      {/* Section 9: Community Banner */}
      <CommunityBanner />

      {/* Section 10: Blog Preview */}
      <BlogPreview />
    </>
  );
}
