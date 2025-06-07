import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";

export default function FeatureCards() {
  const features = [
    {
      title: "Task Management",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nulla nunc and velit Lorem ipsum dolor sit amet consectetur.",
      color: "bg-gradient-to-r from-purple-800 via-indigo-500 to-blue-200"
    },
    {
      title: "Cord Management",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nulla nunc and velit Lorem ipsum dolor sit amet consectetur.",
      color: "bg-gradient-to-r from-yellow-800 via-orange-500 to-red-200"
    },
    {
      title: "Customer Management",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nulla nunc and velit Lorem ipsum dolor sit amet consectetur.",
      color: "bg-gradient-to-l from-orange-200 via-red-400 to-pink-600"
    },
    {
      title: "Project Management",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nulla nunc and velit Lorem ipsum dolor sit amet consectetur.",
      color: "bg-gradient-to-r from-cyan-800 via-blue-500 to-indigo-200"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#fbf9f8] to-[#fcfaf8] pt-24 pb-24 font-twk w-full">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[0.6rem] opacity-700 md:text-sm font-thin tracking-tight mb-2 text-center md:text-left">
          FLEXIBLE AND SCALABLE ENTERPRISE RESOURCE SOLUTION
        </h2>
        <h2 className="text-3xl md:text-3xl xl:text-4xl font-semibold tracking-tight mb-8 text-center md:text-left">
          Learn More About Our Essential Features
        </h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader className={`${feature.color} h-10 rounded-t-lg`} />
              <CardContent className="pt-6">
                <h3 className="text-lg md:text-xl font-semibold text-neutral-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-normal text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Get Started
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
