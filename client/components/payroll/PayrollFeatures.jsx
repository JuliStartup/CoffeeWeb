"use client";

import { Button } from "@/components/ui/button";

export default function PayrollFeatures() {
  return (
    <section className="relative w-full h-auto pt-24 pb-24 py-[90px] flex flex-col items-center justify-center bg-gradient-to-b from-[#f9f9fb] to-[#faf9fa]">
      <div className="container max-w-7xl px-4">
        <div className="grid gap-8 xl:grid-cols-2">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h2 className="font-twk text-neutral-700 text-4xl md:text-5xl xl:text-6xl leading-tight tracking-tight font-semibold max-w-xl md:max-w-2xl">
                Run accurate, on-time payroll easily
              </h2>
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="font-semibold leading-tight text-lg font-twk">
                    Manage all payroll functions
                  </h3>
                  <p className="text-muted-foreground font-twk text-lg font-normal">
                    Process payroll, taxes, and other essential functions. Pay
                    out every type of payment within your organization with ease
                    while staying in total compliance.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold leading-tight text-lg font-twk">
                    Integrate with time management
                  </h3>
                  <p className="text-muted-foreground text-lg font-twk font-normal">
                    Save time and eliminate errors by connecting payroll with
                    time, cost, PTO, and overtime management to ensure that your
                    time management admin flows fit.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg leading-tight font-twk">
                    Connect with Scheduling
                  </h3>
                  <p className="text-muted-foreground text-lg font-twk font-normal">
                    Automatically sync schedules with time management to reduce
                    manual tasks and streamline workflows while using our
                    AI-powered schedule predictions.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Button
                size="lg"
                className="bg-[#1a2b6b] text-white hover:bg-[#1a2b6b]/90 font-twk font-medium"
              >
                Book a Demo
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mt-8 xl:mt-0">
            <div className="relative aspect-[5/3] overflow-hidden rounded-2xl p-2">
              <img
                src="./payroll/15.png"
                alt="Payroll dashboard interface with team collaboration"
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
