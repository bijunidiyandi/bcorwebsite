"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Package, BarChart3, Clock } from "lucide-react";

export default function LogisticsSolutionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Logistics Management Solution
        </h1>
        
        <p className="text-lg text-gray-600 mb-12">
          Streamline your logistics operations with our comprehensive management solution. 
          From fleet management to warehouse optimization, we help you deliver excellence at every step.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6">
            <Truck className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fleet Management</h3>
            <p className="text-gray-600">
              Track and optimize your vehicle fleet with real-time monitoring and maintenance scheduling.
            </p>
          </Card>

          <Card className="p-6">
            <Package className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Warehouse Operations</h3>
            <p className="text-gray-600">
              Manage inventory, optimize storage, and streamline picking and packing processes.
            </p>
          </Card>

          <Card className="p-6">
            <BarChart3 className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Analytics & Reporting</h3>
            <p className="text-gray-600">
              Make data-driven decisions with comprehensive analytics and customizable reports.
            </p>
          </Card>

          <Card className="p-6">
            <Clock className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Route Optimization</h3>
            <p className="text-gray-600">
              Reduce delivery times and costs with intelligent route planning and optimization.
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="px-8">
            Request Demo
          </Button>
        </div>
      </div>
    </div>
  );
}