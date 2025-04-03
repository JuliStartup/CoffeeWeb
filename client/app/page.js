
import ContactForm from "@/components/home/Contact";
import FeatureCards from "@/components/home/Features";
import ImageGrid from "@/components/home/GridComp";
import Section3 from "@/components/home/Section3";
import Section5 from "@/components/home/Section5";
import CardComponent from "@/components/home/CardComponent";
import GsapSection from "@/components/home/GsapSection";
import BusinessSection from "@/components/home/BussinesSection";
import Hero from "@/components/home/Hero";
import TestimonialSectionGsapCentered from "@/components/home/TestimonialSectionGsapCentered";

export default function Home() {
  return (
    <>
      <Hero />
      <GsapSection />
      <Section3 />
      <TestimonialSectionGsapCentered />
      <FeatureCards />
      <Section5 />
      <BusinessSection />
      <ImageGrid />
      <CardComponent />
      <ContactForm />
    </>
  );
}
