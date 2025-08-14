"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Clock, Users, Building2 } from "lucide-react";

export default function ProjectsSolutionPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-6">
          Project Management Solutions
        </h1>
        <p className="text-lg text-muted-foreground">
          Streamline your project operations with our comprehensive project management solution designed for modern businesses.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card className="p-6">
          <div className="mb-4">
            <Briefcase className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Project Planning</h3>
          <p className="text-muted-foreground mb-4">
            Comprehensive tools for project planning, scheduling, and resource allocation.
          </p>
          <Button variant="link" className="group">
            Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Card>

        <Card className="p-6">
          <div className="mb-4">
            <Clock className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Time Tracking</h3>
          <p className="text-muted-foreground mb-4">
            Monitor project timelines and team productivity with advanced time tracking features.
          </p>
          <Button variant="link" className="group">
            Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Card>

        <Card className="p-6">
          <div className="mb-4">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
          <p className="text-muted-foreground mb-4">
            Enhanced tools for team communication and collaboration across projects.
          </p>
          <Button variant="link" className="group">
            Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Card>
      </div>

      <div className="bg-muted rounded-lg p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <Building2 className="h-12 w-12 text-primary flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Enterprise-Grade Project Management
              </h2>
              <p className="text-muted-foreground mb-6">
                Our project management solution is built to handle complex enterprise projects while maintaining simplicity and ease of use. From resource planning to budget tracking, we provide all the tools you need to deliver successful projects.
              </p>
              <Button>
                Schedule a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}