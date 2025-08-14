'use client';

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CircleUser, Building2, BarChart3, MessageSquare, Calendar, FileSpreadsheet, Settings2 } from "lucide-react";

export default function CRMSolution() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Badge className="mb-4" variant="secondary">Customer Relationship Management</Badge>
        <h1 className="text-4xl font-bold mb-6">Transform Your Customer Relationships</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Streamline customer interactions, boost engagement, and drive growth with our comprehensive CRM solution.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <CircleUser className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Contact Management</h3>
          <p className="text-muted-foreground">
            Centralize customer data and maintain detailed contact profiles with complete interaction history.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <Building2 className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Account Management</h3>
          <p className="text-muted-foreground">
            Track and manage business accounts, opportunities, and relationships effectively.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <BarChart3 className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Sales Analytics</h3>
          <p className="text-muted-foreground">
            Gain insights into sales performance with detailed analytics and reporting tools.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <MessageSquare className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Communication Tools</h3>
          <p className="text-muted-foreground">
            Integrated email, chat, and communication tracking to keep conversations organized.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <Calendar className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Task Management</h3>
          <p className="text-muted-foreground">
            Schedule meetings, set reminders, and manage follow-ups efficiently.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <FileSpreadsheet className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Document Management</h3>
          <p className="text-muted-foreground">
            Store and manage customer-related documents, contracts, and files securely.
          </p>
        </Card>
      </div>

      {/* Integration Section */}
      <div className="bg-secondary/10 rounded-2xl p-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Seamless Integration</h2>
          <p className="text-lg text-muted-foreground">
            Our CRM solution integrates perfectly with your existing business tools and workflows.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <Settings2 className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Easy Configuration</h3>
            <p className="text-muted-foreground">
              Customize fields, workflows, and processes to match your business needs without complex coding.
            </p>
          </Card>
          <Card className="p-6">
            <BarChart3 className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Advanced Reporting</h3>
            <p className="text-muted-foreground">
              Generate detailed reports and dashboards to track performance metrics and customer insights.
            </p>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Customer Relationships?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Start managing your customer relationships more effectively today.
        </p>
        <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          Request a Demo
        </button>
      </div>
    </div>
  );
}