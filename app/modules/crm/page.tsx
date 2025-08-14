'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building2, BarChart3, Mail } from "lucide-react";

export default function CRMPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tight">Customer Relationship Management</h1>
        <p className="text-lg text-muted-foreground">
          Manage your customer relationships effectively with our comprehensive CRM solution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="space-y-1">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Contacts</CardTitle>
            <CardDescription>Manage customer contacts</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Centralize your customer information and track all interactions in one place.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Organizations</CardTitle>
            <CardDescription>Track company accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Maintain detailed records of business accounts and organizational hierarchies.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>Customer insights</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Gain valuable insights through advanced analytics and reporting tools.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Campaigns</CardTitle>
            <CardDescription>Email marketing</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Create and manage targeted email marketing campaigns for your customers.</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Track your latest customer interactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Activity items would be dynamically populated here */}
            <p className="text-muted-foreground">No recent activities to display.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}