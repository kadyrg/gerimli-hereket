import { AboutCarousel } from "@/components/shared/about-carousel";
import { AboutContent } from "@/components/shared/about-content";
import { AboutHero } from "@/components/shared/about-hero";
import { OurLocation } from "@/components/shared/our-locarion";

export default async function AboutPage() {
  return (
    <div className="bg-zinc-50">
      <AboutHero />
      <div className='px-4'>
        <AboutCarousel />
      </div>
      <AboutContent />
      <div className='px-4'>
        <OurLocation />
      </div>
    </div>
  );
}
