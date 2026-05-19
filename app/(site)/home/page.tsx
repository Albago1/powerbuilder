import Hero from "@/components/Hero";
import PersonalizedSection from "@/components/PersonalizedSection";
import StaticPrograms from "@/components/StaticPrograms";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PersonalizedSection />
      <StaticPrograms />
      <Benefits />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}
