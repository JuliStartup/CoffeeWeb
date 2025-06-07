"use client";
import ImageGrid from "@/components/home/GridComp";
import ArticleHeader from "@/components/pricing/ArticleHeader";
import ContractorPricing from "@/components/pricing/ContractorPricing";
import GsapSection from "@/components/pricing/GsapSectionP";
import PricingTable from "@/components/pricing/PricingTable";
import PurpleCards from "@/components/pricing/Purple-cardP";
import ContactSection from "@/components/Resources/ContactSection";
import { useState } from "react";

export default function Page() {
  const [selectedTier, setSelectedTier] = useState("Plus");
  return (
    <>
      {/* <GsapSection /> */}
      <ArticleHeader />
      <PurpleCards selectedTier={selectedTier} />
      <PricingTable
        selectedTier={selectedTier}
        setSelectedTier={setSelectedTier}
      />

      <ContractorPricing />
      <ContactSection />
      <ImageGrid />
    </>
  );
}
