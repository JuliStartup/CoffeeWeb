"use client";

import React from "react";
import {
  Briefcase,
  Users,
  Clock,
  Calculator,
  MessageSquare,
  LineChart,
  Globe,
  ChevronDown
} from "lucide-react";

const PlatformDropdown = ({ isOpen, toggleDropdown }) => (
  <div className="relative">
    <button
      className="font-twk font-thin px-4 py-2 rounded-md transition-colors duration-300 text-neutral-600 hover:bg-gray-200 flex items-center gap-1"
      onClick={toggleDropdown}
    >
      Platform
      <ChevronDown
        className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
    {isOpen && (
      <div className="absolute top-full left-0 bg-white rounded-md shadow-lg p-4 grid grid-cols-3 gap-6 w-[800px] z-50">
        <div>
          <h4 className="font-twk font-medium text-neutral-500 mb-3 flex items-center gap-2">
            <div className="bg-gray-200 p-2 rounded-md flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-gray-700" />
            </div>
            Payroll
          </h4>
          <ul className="space-y-2 px-8">
            <li>
              <a
                href="/payroll"
                className="font-twk font-normal text-neutral-600 hover:text-neutral-900"
              >
                Employee Payroll
              </a>
            </li>
            <li>
              <a
                href="/contractor-payroll"
                className="font-twk font-normal text-neutral-600 hover:text-neutral-900"
              >
                Contractor Payroll
              </a>
            </li>
            <li>
              <a
                href="/expense-reimbursement"
                className="font-twk font-normal text-neutral-600 hover:text-neutral-900"
              >
                Expense Reimbursement
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-twk font-medium text-neutral-500 mb-3 flex items-center gap-2">
            <div className="bg-gray-200 p-2 rounded-md flex items-center justify-center">
              <Users className="h-5 w-5 text-gray-700" />
            </div>
            HR
          </h4>
          <ul className="space-y-2 px-8">
            <li>
              <a
                href="/employee-self-serve"
                className="font-twk font-normal text-neutral-600 hover:text-neutral-900"
              >
                Employee Self Serve
              </a>
            </li>
            <li>
              <a
                href="/employee-management"
                className="font-twk font-normal text-neutral-600 hover:text-neutral-900"
              >
                Employee Management
              </a>
            </li>
            <li>
              <a
                href="/onboarding-offboarding"
                className="font-twk font-normal text-neutral-600 hover:text-neutral-900"
              >
                Onboarding & Offboarding
              </a>
            </li>
            <li>
              <a
                href="/training"
                className="font-twk font-normal text-neutral-600 hover:text-neutral-900"
              >
                Training
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-twk font-medium text-neutral-500 mb-3 flex items-center gap-2">
            <div className="bg-gray-200 p-2 rounded-md flex items-center justify-center">
              <MessageSquare className="h-5 w-5 text-gray-700" />
            </div>
            Projects
          </h4>
          <ul className="space-y-2 px-8">
            <li>
              <a
                href="/internal-communication"
                className="font-twk font-normal text-neutral-600 hover:text-neutral-900"
              >
                Internal Communication
              </a>
            </li>
            <li>
              <a
                href="/task-list"
                className="font-twk font-normal text-neutral-600 hover:text-neutral-900"
              >
                Task List
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-twk font-medium text-neutral-500 mb-3 flex items-center gap-2">
            <div className="bg-gray-200 p-2 rounded-md flex items-center justify-center">
              <Clock className="h-5 w-5 text-gray-700" />
            </div>
            Time and Labour
          </h4>
          <ul className="space-y-2 px-8">
            <li>
              <a
                href="/time-management"
                className="font-twk font-normal text-neutral-600 hover:text-neutral-900"
              >
                Time Management
              </a>
            </li>
            <li>
              <a
                href="/timesheets"
                className="font-twk font-normal text-neutral-600 hover:text-neutral-900"
              >
                Timesheets
              </a>
            </li>
            <li>
              <a
                href="/scheduling"
                className="font-twk font-normal text-neutral-600 hover:text-neutral-900"
              >
                Scheduling
              </a>
            </li>
            <li>
              <a
                href="/ai-scheduler"
                className="font-twk font-normal text-neutral-600 hover:text-neutral-900"
              >
                AI Scheduler
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-twk font-medium text-neutral-500 mb-3 flex items-center gap-2">
            <div className="bg-gray-200 p-2 rounded-md flex items-center justify-center">
              <Calculator className="h-5 w-5 text-gray-700" />
            </div>
            Accounting
          </h4>
          <ul className="space-y-2 px-8">
            <li>
              <a
                href="/bookkeeping"
                className="font-twk font-normal text-neutral-600 hover:text-neutral-900"
              >
                Bookkeeping
              </a>
            </li>
            <li>
              <a
                href="/accounting"
                className="font-twk font-normal text-neutral-600 hover:text-neutral-900"
              >
                Accounting
              </a>
            </li>
            <li>
              <a
                href="/ap-automation"
                className="font-twk font-normal text-neutral-600 hover:text-neutral-900"
              >
                AP Automation
              </a>
            </li>
            <li>
              <a
                href="/ai-inventory-planner"
                className="font-twk font-normal text-neutral-600 hover:text-neutral-900"
              >
                AI Inventory Planner
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-twk font-medium text-neutral-500 mb-3 flex items-center gap-2">
            <div className="bg-gray-200 p-2 rounded-md flex items-center justify-center">
              <LineChart className="h-5 w-5 text-gray-700" />
            </div>
            CRM
          </h4>
          <ul className="space-y-2 px-8">
            <li>
              <a
                href="/client-relationship-manager"
                className="font-twk font-normal text-neutral-600 hover:text-neutral-900"
              >
                Client Relationship Manager
              </a>
            </li>
            <li>
              <a
                href="/marketing"
                className="font-twk font-normal text-neutral-600 hover:text-neutral-900"
              >
                Marketing
              </a>
            </li>
          </ul>
        </div>
      </div>
    )}
  </div>
);

const GlobalDropdown = ({ isOpen, toggleDropdown }) => (
  <div className="relative">
    <button
      className="font-twk font-medium px-3 py-1 rounded-md transition-colors duration-300 text-neutral-600 hover:bg-gray-200 flex items-center gap-1"
      onClick={toggleDropdown}
    >
      <Globe className="h-4 w-4" />
      Global (EN)
      <ChevronDown
        className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
    {isOpen && (
      <div className="absolute top-full left-0 bg-white rounded-md shadow-lg p-4 w-40 z-50">
        <ul className="space-y-1">
          <li>
            <button className="font-twk font-normal text-neutral-600 hover:text-neutral-900 flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Global (EN)
            </button>
          </li>
          <li>
            <button className="font-twk font-normal text-neutral-600 hover:text-neutral-900 flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Global (CA)
            </button>
          </li>
        </ul>
      </div>
    )}
  </div>
);

export { PlatformDropdown, GlobalDropdown };
