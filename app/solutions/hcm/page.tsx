"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Brain, Clock, LineChart, Shield, Workflow } from "lucide-react";

export default function HCMSolutionPage() {
  const features = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Employee Management",
      description: "Comprehensive employee data management, from onboarding to offboarding."
    },
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "Talent Development",
      description: "Track and manage employee training, skills, and career development paths."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Time & Attendance",
      description: "Advanced time tracking with flexible scheduling and leave management."
    },
    {
      icon: <LineChart className="h-6 w-6 text-primary" />,
      title: "Performance Management",
      description: "Set and track KPIs, conduct reviews, and measure employee performance."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Compliance Management",
      description: "Stay compliant with labor laws and internal policies automatically."
    },
    {
      icon: <Workflow className="h-6 w-6 text-primary" />,
      title: "Workflow Automation",
      description: "Streamline HR processes with automated workflows and approvals."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Human Capital Management Solution
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Transform your HR operations with our comprehensive HCM solution. 
          Streamline workforce management and enhance employee experience.
        </p>
        <Button size="lg" className="mr-4">
          Schedule Demo
        </Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {features.map((feature, index) => (
          <Card key={index} className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <Card className="bg-primary/5 border-none">
        <CardContent className="flex flex-col md:flex-row items-center justify-between p-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">
              Ready to transform your HR operations?
            </h3>
            <p className="text-muted-foreground">
              Get started with our HCM solution today and see the difference.
            </p>
          </div>
          <Button size="lg" className="min-w-[200px]">
            Contact Sales
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}