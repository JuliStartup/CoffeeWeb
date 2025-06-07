import {
  Shield,
  Phone,
  CloudIcon as CloudSync,
  Heart,
  Users,
  Store
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="group hover:shadow-md transition-shadow">
      <CardContent className="p-6 text-center space-y-4">
        <div className="mx-auto w-12 h-12 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function FeatureGrid() {
  const features = [
    {
      icon: <Phone className="w-8 h-8 text-emerald-400" />,
      title: "Get Started",
      description: "Learn how to get started with using WhatsApp"
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      title: "Safety and Security",
      description:
        "Your privacy and security are important. Learn how to stay safe on WhatsApp."
    },
    {
      icon: <CloudSync className="w-8 h-8 text-emerald-400" />,
      title: "Back Up or Restore Chats",
      description: "Learn how to back up and restore your chat history"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      title: "Information for Teens",
      description: "Learn more about information for teens on WhatsApp"
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: "Communities",
      description: "Learn how to create and participate in communities"
    },
    {
      icon: <Store className="w-8 h-8 text-emerald-400" />,
      title: "Business Features",
      description:
        "Learn about WhatsApp's business solutions and how to get started"
    }
  ];

  return (
    <div className=" pt-24 pb-24 bg-grey-800">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}
