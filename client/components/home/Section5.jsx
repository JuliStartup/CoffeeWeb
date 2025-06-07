"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import BlurText from "./BlurText";

export function Section5() {
  return (
    <div className="mx-auto bg-gradient-to-b from-[#fbfaf8] to-[#fcfaf7] pt-24 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid xl:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl xl:text-5xl text-neutral-800 leading-tight font-medium font-twk">
              <BlurText
                text="Streamline, payroll, scheduling, budgeting,"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-[--purple] text-3xl md:text-4xl xl:text-5xl leading-tight font-medium font-twk"
              />
              <span className="block mt-2">
                and accounting for your team in one unified platform.
              </span>
            </h1>
            <p className="mt-6 text-gray-600 text-lg text-twk max-w-lg font-medium leading-relaxed">
              Accelerate operations with integrated payroll, scheduling,
              budgeting, and accounting for your team in a single platform.
            </p>
            <button className="mt-8 bg-[--primaryColor] text-white px-6 py-3 rounded-lg transition duration-300 font-twk font-semibold text-lg hover:bg-black/90">
              Get Started Now
            </button>
          </div>

          <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 shadow-lg w-full">
                <div className="flex h-full flex-col items-center justify-center">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="mt-4 text-center">
                    <div className="text-sm text-gray-500 text-twk font-normal">
                      Starting Today
                    </div>
                    <div className="text-twk font-semibold text-neutral-800">
                      Jonila Johon
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-lg">
                <div className="h-28">
                  <div className="flex h-full items-end gap-2 justify-center">
                    {[0.6, 0.4, 0.8, 0.5, 0.7, 0.9, 0.6, 0.8].map(
                      (height, i) => (
                        <div
                          key={i}
                          className="w-4 bg-[--purple] rounded-t"
                          style={{ height: `${height * 100}%` }}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="mt-4 w-[80%] text-center font-medium text-twk mx-auto">
                  Centralize your workforce data
                </div>
              </Card>
            </div>

            <Card className="p-6 shadow-lg">
              <table className="w-full">
                <tbody>
                  {[
                    { name: "Natali Craig", country: "USA", amount: "$890.00" },
                    { name: "Angel", country: "Canada", amount: "$650.00" },
                    {
                      name: "Gladys",
                      country: "South Africa",
                      amount: "$790.00"
                    },
                    { name: "Darrell", country: "Dubai", amount: "$990.00" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-3 mx-4">
                        <div className="flex items-center gap-2">
                          <img
                            src="/profile.jpg"
                            alt="Profile"
                            width={26}
                            height={26}
                            className="rounded-full"
                          />
                          <span className="text-twk font-normal">
                            {row.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 text-gray-500 text-twk font-normal">
                        {row.country}
                      </td>
                      <td className="py-3 text-right font-medium text-twk">
                        {row.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
