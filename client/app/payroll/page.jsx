import PayrollHero from "@/components/payroll/PayrollHero";
import PayrollFeatures from "../../components/payroll/PayrollFeatures";
import FeaturesSection from "@/components/payroll/FeaturesSection";
import PayrollExpertise from "@/components/payroll/PayrollExpertise";
import ComplianceSection from "@/components/payroll/ComplianceSection";
import TimeManagementSection from "@/components/payroll/TimeManagementSection";
import PlatformSection from "@/components/payroll/PlatformSection";
import ExperienceSection from "@/components/payroll/ExperienceSection";
import PayrollEfficiencySection from "@/components/payroll/PayrollEfficiencySection";
import PayrollFeatureSection from "@/components/payroll/PayrollFeatures2";
import EmployeeManagement from "@/components/payroll/EmployeeManagement";
import ImageGrid from "@/components/home/GridComp";

export default function Page() {
  return (
    <>
      <PayrollHero />
      <EmployeeManagement />
      <PayrollFeatureSection />
      {/* <PayrollFeatures /> */}
      <FeaturesSection />
      <PayrollExpertise />
      <ComplianceSection />
      <PlatformSection />
      <TimeManagementSection />
      <PayrollEfficiencySection />
      <ExperienceSection />
      <ImageGrid />
    </>
  );
}
