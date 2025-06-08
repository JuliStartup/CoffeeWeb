import BusinessSection from "@/components/home/BussinesSection";
import CardComponent from "@/components/home/CardComponent";
import ContactForm from "@/components/home/Contact";
import FeatureCards from "@/components/home/Features";
import ImageGrid from "@/components/home/GridComp";
import GsapSection from "@/components/home/GsapSection";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import Section3 from "@/components/home/Section3";
import Section5 from "@/components/home/Section5";
import TestimonialSectionGsapCentered from "@/components/home/TestimonialSectionGsapCentered";

export default function Home() {
	return (
		<>
			<Products />
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
