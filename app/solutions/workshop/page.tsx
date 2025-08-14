"use client";

import { Card } from "@/components/ui/card";
import { Wrench } from "lucide-react";

export default function WorkshopSolution() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center gap-3 mb-8">
        <Wrench className="h-8 w-8 text-primary" />
        <h1 className="text-4xl font-bold">Workshop Management Solution</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Work Order Management</h3>
          <p className="text-muted-foreground">
            Efficiently manage and track work orders, from creation to completion, with our comprehensive workflow system.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Inventory Control</h3>
          <p className="text-muted-foreground">
            Keep track of spare parts, tools, and equipment with real-time inventory management and automated reordering.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Labor Tracking</h3>
          <p className="text-muted-foreground">
            Monitor technician productivity, track labor hours, and optimize workforce scheduling for maximum efficiency.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Equipment Maintenance</h3>
          <p className="text-muted-foreground">
            Schedule and track preventive maintenance tasks, manage equipment lifecycle, and reduce downtime.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Cost Tracking</h3>
          <p className="text-muted-foreground">
            Monitor repair costs, labor expenses, and parts usage to optimize workshop operations and profitability.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Reporting & Analytics</h3>
          <p className="text-muted-foreground">
            Generate detailed reports on workshop performance, maintenance history, and key performance indicators.
          </p>
        </Card>
      </div>
    </div>
  );
}