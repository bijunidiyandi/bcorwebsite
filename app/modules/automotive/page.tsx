"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Settings, PenTool as Tool, Users } from "lucide-react";

export default function AutomotivePage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tight">Automotive Management</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive solution for automotive service centers, dealerships, and repair shops
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="space-y-1">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
              <Car className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Vehicle Management</CardTitle>
            <CardDescription>Track and manage vehicle inventory and service history</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>Vehicle registration and details</li>
              <li>Service history tracking</li>
              <li>Maintenance schedules</li>
              <li>Parts inventory management</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
              <Tool className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Service Operations</CardTitle>
            <CardDescription>Streamline workshop operations and service delivery</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>Work order management</li>
              <li>Service scheduling</li>
              <li>Labor tracking</li>
              <li>Quality control</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Customer Relations</CardTitle>
            <CardDescription>Enhance customer experience and communication</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>Customer database</li>
              <li>Service reminders</li>
              <li>Feedback management</li>
              <li>Communication history</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
              <Settings className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Business Analytics</CardTitle>
            <CardDescription>Data-driven insights for better decision making</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>Performance metrics</li>
              <li>Revenue analysis</li>
              <li>Service efficiency</li>
              <li>Resource utilization</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}