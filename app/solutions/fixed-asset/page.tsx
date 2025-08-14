"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDollarSign, Building2, BarChart3, FileSpreadsheet } from "lucide-react";

export default function FixedAssetSolution() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Fixed Asset Management Solution</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Comprehensive fixed asset lifecycle management for optimal resource utilization and compliance
        </p>

        <div className="grid gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CircleDollarSign className="h-6 w-6" />
                Asset Tracking & Valuation
              </CardTitle>
              <CardDescription>
                Maintain detailed records of all fixed assets with accurate valuation and depreciation calculations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Automated depreciation calculations using multiple methods</li>
                <li>Real-time asset valuation and reporting</li>
                <li>Barcode/RFID integration for asset tracking</li>
                <li>Historical cost and maintenance records</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-6 w-6" />
                Maintenance Management
              </CardTitle>
              <CardDescription>
                Schedule and track maintenance activities to extend asset life and prevent downtime
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Preventive maintenance scheduling</li>
                <li>Work order management</li>
                <li>Maintenance cost tracking</li>
                <li>Service history documentation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-6 w-6" />
                Analytics & Reporting
              </CardTitle>
              <CardDescription>
                Gain insights into asset performance and make data-driven decisions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Customizable dashboards and reports</li>
                <li>Asset utilization metrics</li>
                <li>Maintenance cost analysis</li>
                <li>Compliance and audit reporting</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center gap-4">
          <Button size="lg">
            Request Demo
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </main>
  );
}