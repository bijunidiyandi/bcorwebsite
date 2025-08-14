"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, ShoppingCart, CreditCard, BarChart } from "lucide-react";

export default function POSSolutionPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Point of Sale Solutions
        </h1>
        
        <p className="text-lg text-gray-600 mb-12">
          Transform your retail operations with our comprehensive POS system designed for modern businesses.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Monitor className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Intuitive Interface</h3>
            <p className="text-gray-600">
              User-friendly touchscreen interface that minimizes training time and maximizes efficiency.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <ShoppingCart className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Inventory Management</h3>
            <p className="text-gray-600">
              Real-time tracking and automated reordering to keep your stock levels optimized.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CreditCard className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Payment Processing</h3>
            <p className="text-gray-600">
              Secure, fast payment processing supporting multiple payment methods and currencies.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <BarChart className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Analytics & Reporting</h3>
            <p className="text-gray-600">
              Detailed insights into sales, inventory, and customer behavior to drive better decisions.
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
            Request a Demo
          </Button>
        </div>
      </div>
    </div>
  );
}