"use client";
import { Info, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingTable({ selectedTier, setSelectedTier }) {
  const tiers = [
    {
      name: "Simple",
      description: "For small businesses needing basic payroll",
      price: 40,
      perPersonPrice: 6,
      ctaText: "start for free",
      isFree: true,
      features: [
        {
          name: "Full-service single-state payroll including W-2s and 1099s",
          hasInfo: true
        },
        { name: "Basic support", hasInfo: true },
        { name: "Employee profiles and self service" },
        { name: "Basic hiring and onboarding tools", hasInfo: true },
        {
          name: "Goals-tracked health insurance administration",
          hasInfo: true
        },
        { name: "Employee financial benefits" },
        { name: "Payroll and time-off reports" },
        { name: "Custom admin permissions" },
        { name: "Basic PTO policies and holiday pay" },
        {
          name: "Integrations for accounting, time tracking, expense management, and more",
          hasInfo: true
        }
      ],
      addons: [
        { name: "Time & Attendance Plus", hasInfo: true },
        { name: "Next Day Direct Deposit" }
      ]
    },
    {
      name: "Plus",
      description:
        "For growing teams needing advanced payroll, HR, and time tracking",
      price: 60,
      originalPrice: 80,
      perPersonPrice: 9,
      isPopular: true,
      ctaText: "start for free",
      features: [
        { name: "Everything in the Simple plan, plus:" },
        {
          name: "Full-service multi-state payroll including W-2s and 1099s",
          hasInfo: true
        },
        { name: "Next-day direct deposit" },
        { name: "Advanced hiring and onboarding tools" },
        { name: "Advanced HR tools" },
        { name: "PTO manager" },
        { name: "Time Kiosk" },
        { name: "Scheduling" },
        { name: "Expenses and reimbursements" },
        { name: "Workforce costing" },
        { name: "Team management tools" }
      ],
      addons: [{ name: "Priority Support and HR Resources", hasInfo: true }]
    },
    {
      name: "Premium",
      description:
        "For businesses needing a comprehensive payroll and HR solution with dedicated support",
      price: 135,
      originalPrice: 150,
      perPersonPrice: 16.5,
      ctaText: "Talk to sales",
      ctaVariant: "secondary",
      features: [
        { name: "Everything in the Plus plan, plus:" },
        { name: "Dedicated Customer Success Manager" },
        { name: "HR resource center" },
        { name: "Compliance alerts" },
        { name: "Access to certified HR experts", hasInfo: true },
        { name: "Advanced payroll reporting and customization" },
        { name: "Health Insurance Broker Integration" },
        { name: "R&D tax credit discount" },
        { name: "Priority support" },
        { name: "Special pricing for eligible companies" }
      ],
      addons: []
    }
  ];

  const gradients = [
    "bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500",
    "bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500",
    "bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500"
  ];

  return (
    <div className="flex justify-center pb-12 md:pb-22 xl:pt-30 xl:pb-30  bg-gradient-to-b from-[#faf9fa] to-[#fbf9f9] px-4 py-8">
      <div className="max-w-6xl w-full">
        <div className="grid gap-6  md:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`rounded-lg border cursor-pointer bg-white shadow-lg ${
                tier.name === selectedTier ? "ring-2  ring-primary" : ""
              }`}
              onClick={() => setSelectedTier(tier.name)}
            >
              {/* Header */}
              <div
                className={`h-16 cursor-pointer rounded-t-lg ${
                  gradients[index % gradients.length]
                } flex items-center justify-center text-white font-bold`}
              ></div>
              <div className="p-6">
                {tier.isPopular && (
                  <div className="mb-4 inline-block rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                    TOP SELLER
                  </div>
                )}
                {tier.isFree && (
                  <div className="mb-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
                    6 MONTHS FREE
                  </div>
                )}
                <h2 className="text-xl font-semibold">{tier.name}</h2>
                <p className="mt-1 text-sm text-gray-600">{tier.description}</p>
                <div className="mt-4 flex items-baseline">
                  {tier.originalPrice && (
                    <span className="text-lg line-through text-gray-500">
                      ${tier.originalPrice}
                    </span>
                  )}
                  <span className="ml-1 text-4xl font-bold text-gray-900">
                    ${tier.price}
                  </span>
                  <span className="text-gray-600">/mo</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  plus ${tier.perPersonPrice}/mo per person
                </p>
              </div>

              {/* CTA Button */}
              <div className="p-6">
                <Button
                  variant={tier.ctaVariant || "default"}
                  className="w-full"
                >
                  {tier.ctaText}
                </Button>
              </div>

              {/* Features */}
              <div className="p-6 pt-0">
                <div className="mb-4">
                  <h3 className="text-sm font-medium">Plan details:</h3>
                  <ul className="mt-4 space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                        <span className="text-sm text-gray-700">
                          {feature.name}
                        </span>
                        {feature.hasInfo && (
                          <Info className="h-4 w-4 flex-shrink-0 text-gray-400" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add-ons */}
                {tier.addons.length > 0 && (
                  <div className="border-t pt-4">
                    <h3 className="text-sm font-medium">Featured add-ons:</h3>
                    <ul className="mt-4 space-y-3">
                      {tier.addons.map((addon, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">
                            {addon.name}
                          </span>
                          {addon.hasInfo && (
                            <Info className="h-4 w-4 flex-shrink-0 text-gray-400" />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
