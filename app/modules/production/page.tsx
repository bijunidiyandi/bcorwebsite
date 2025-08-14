"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Settings, Truck, Package, BarChart2, Clock } from "lucide-react";

export default function ProductionPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Production Management</h1>
        <p className="text-lg text-gray-600">Streamline your manufacturing processes and optimize production efficiency</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Factory className="h-8 w-8 text-blue-600 mb-2" />
            <CardTitle>Production Planning</CardTitle>
            <CardDescription>Schedule and optimize production runs</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600">
              <li>• Resource allocation</li>
              <li>• Capacity planning</li>
              <li>• Production scheduling</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Settings className="h-8 w-8 text-green-600 mb-2" />
            <CardTitle>Quality Control</CardTitle>
            <CardDescription>Maintain high product standards</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600">
              <li>• Quality metrics</li>
              <li>• Inspection protocols</li>
              <li>• Defect tracking</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Truck className="h-8 w-8 text-purple-600 mb-2" />
            <CardTitle>Inventory Management</CardTitle>
            <CardDescription>Track materials and finished goods</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600">
              <li>• Stock levels</li>
              <li>• Warehouse management</li>
              <li>• Inventory optimization</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Package className="h-8 w-8 text-orange-600 mb-2" />
            <CardTitle>Material Requirements</CardTitle>
            <CardDescription>Manage raw materials and supplies</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600">
              <li>• Material planning</li>
              <li>• Supplier management</li>
              <li>• Order tracking</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <BarChart2 className="h-8 w-8 text-red-600 mb-2" />
            <CardTitle>Performance Analytics</CardTitle>
            <CardDescription>Monitor production metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600">
              <li>• Efficiency metrics</li>
              <li>• Production reports</li>
              <li>• Cost analysis</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Clock className="h-8 w-8 text-teal-600 mb-2" />
            <CardTitle>Maintenance Schedule</CardTitle>
            <CardDescription>Equipment upkeep and repairs</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600">
              <li>• Preventive maintenance</li>
              <li>• Equipment tracking</li>
              <li>• Service history</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}