import React from "react";
import {
  X,
  ChevronDown,
  Briefcase,
  Users,
  Clock,
  Calculator,
  MessageSquare,
  LineChart
} from "lucide-react";

const MobileMenu = ({
  isMenuOpen,
  toggleMenu,
  isPlatformDropdownOpen,
  togglePlatformDropdown
}) => {
  return (
    <div
      className={`fixed xl:hidden top-0 right-0 min-h-screen h-auto w-[80%] max-w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isMenuOpen ? "translate-x-0 " : "translate-x-full"
      }`}
    >
      <div className="flex flex-col pt-20 px-6 gap-6">
        <button
          className="absolute top-6 right-6 text-neutral-700"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <X className="h-6 w-6" />
        </button>

        <a
          className="font-medium text-neutral-800 hover:text-primary transition-colors"
          href="/"
          onClick={toggleMenu}
        >
          Home
        </a>

        {/* Mobile Platform Dropdown */}
        <div className="flex flex-col gap-2">
          <button
            className="font-medium text-neutral-800 flex items-center justify-between hover:text-primary transition-colors"
            onClick={togglePlatformDropdown}
            aria-expanded={isPlatformDropdownOpen}
          >
            Platform
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isPlatformDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isPlatformDropdownOpen && (
            <div className="pl-4 flex flex-col gap-4">
              {[
                {
                  title: "Payroll",
                  icon: Briefcase,
                  links: [
                    { name: "Employee Payroll", href: "/payroll" },
                    { name: "Contractor Payroll", href: "/contractor-payroll" },
                    {
                      name: "Expense Reimbursement",
                      href: "/expense-reimbursement"
                    }
                  ]
                },
                {
                  title: "HR",
                  icon: Users,
                  links: [
                    {
                      name: "Employee Self Serve",
                      href: "/employee-self-serve"
                    },
                    {
                      name: "Employee Management",
                      href: "/employee-management"
                    },
                    {
                      name: "Onboarding & Offboarding",
                      href: "/onboarding-offboarding"
                    },
                    { name: "Training", href: "/training" }
                  ]
                },
                {
                  title: "Time and Labour",
                  icon: Clock,
                  links: [
                    { name: "Time Management", href: "/time-management" },
                    { name: "Timesheets", href: "/timesheets" },
                    { name: "Scheduling", href: "/scheduling" },
                    { name: "AI Scheduler", href: "/ai-scheduler" }
                  ]
                },
                {
                  title: "Accounting",
                  icon: Calculator,
                  links: [
                    { name: "Bookkeeping", href: "/bookkeeping" },
                    { name: "Accounting", href: "/accounting" },
                    { name: "AP Automation", href: "/ap-automation" },
                    {
                      name: "AI Inventory Planner",
                      href: "/ai-inventory-planner"
                    }
                  ]
                },
                {
                  title: "Projects",
                  icon: MessageSquare,
                  links: [
                    {
                      name: "Internal Communication",
                      href: "/internal-communication"
                    },
                    { name: "Task List", href: "/task-list" }
                  ]
                },
                {
                  title: "CRM",
                  icon: LineChart,
                  links: [
                    {
                      name: "Client Relationship Manager",
                      href: "/client-relationship-manager"
                    },
                    { name: "Marketing", href: "/marketing" }
                  ]
                }
              ].map((section, index) => (
                <div key={index} className="pl-2 border-l border-gray-200">
                  <h4 className="font-medium text-sm text-neutral-600 mb-2 flex items-center gap-2">
                    <div className="bg-gray-200 p-1 rounded">
                      <section.icon className="h-4 w-4 text-gray-700" />
                    </div>
                    {section.title}
                  </h4>
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="block font-medium text-neutral-700 text-sm my-1 hover:text-primary transition-colors"
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        <a
          className="font-medium text-neutral-800 hover:text-primary transition-colors"
          href="/pricing"
          onClick={toggleMenu}
        >
          Plans and Pricing
        </a>
        <a
          className="font-medium text-neutral-800 hover:text-primary transition-colors"
          href="/resources"
          onClick={toggleMenu}
        >
          Resources
        </a>
        <a
          className="font-medium text-neutral-800 hover:text-primary transition-colors"
          href="/contact"
          onClick={toggleMenu}
        >
          Contact
        </a>
        <div className="mt-auto mb-8 flex flex-col gap-4">
          <a
            className="font-medium text-neutral-800 text-center hover:text-primary transition-colors"
            href="https://businessn-erp.com/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </a>
          <a
            className="w-full py-3 bg-primary rounded-lg text-white font-semibold text-center hover:bg-primary-dark transition-colors"
            href="https://businessn-erp.com/demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Request A Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
