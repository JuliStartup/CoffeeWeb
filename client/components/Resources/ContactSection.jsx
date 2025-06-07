import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <div className="flex justify-center pt-24 pb-24  font-twk bg-gradient-to-b from-[#fefbf6] to-[#fffbf5]  ">
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sales Column */}
          <div className="bg-neutral-50/50 shadow-lg border rounded-lg p-6">
            <div className=" font-semibold font-twk border-b p-4 mb-6">
              <h2 className="text-lg font-medium text-neutral-900">
                Speak with Sales
              </h2>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-neutral-600 flex-shrink-0" />
                <span className="text-sm text-neutral-700">
                  Schedule a live demo or{" "}
                  <a href="#" className="underline hover:text-neutral-900">
                    watch a 5-minute self-guided demo
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-neutral-600 flex-shrink-0" />
                <span className="text-sm text-neutral-700">
                  Speak with a Small Business Consultant
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-neutral-600 flex-shrink-0" />
                <span className="text-sm text-neutral-700">
                  See how Keep has served businesses like yours
                </span>
              </li>
            </ul>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-neutral-900 mb-1">
                  Call sales
                </h3>
                <p className="text-sm text-neutral-600">+1 866-800-0004 x1</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-neutral-900 mb-1">
                  Chat with sales
                </h3>
                <p className="text-sm text-neutral-600">
                  Click on the icon in the lower right corner of your screen
                </p>
              </div>
              <Button className="w-full bg-[#01193d]">Contact us</Button>
            </div>
          </div>

          {/* Support Column */}
          <div className="bg-neutral-50/50 shadow-lg border rounded-lg p-6">
            <div className=" border-b p-4 mb-6">
              <h2 className="text-lg font-semibold font-twk text-neutral-900">
                Talk with Customer Support
              </h2>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-neutral-600 flex-shrink-0" />
                <span className="text-sm text-neutral-700">
                  Get answers to any Keep questions
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-neutral-600 flex-shrink-0" />
                <span className="text-sm text-neutral-700">
                  Receive technical help
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-neutral-600 flex-shrink-0" />
                <span className="text-sm text-neutral-700">
                  Ask about any product or service issues
                </span>
              </li>
            </ul>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-neutral-900 mb-1">
                  Call support
                </h3>
                <p className="text-sm text-neutral-600">+1 866-800-0004 x2</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-neutral-900 mb-1">
                  Chat with support
                </h3>
                <p className="text-sm text-neutral-600">
                  Available 24/7 inside your Keep app.{" "}
                  <a href="#" className="text-[#01193d]">
                    Log into app
                  </a>
                </p>
              </div>

              <Button className="w-full bg-[#01193d]">Open New Ticket</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
