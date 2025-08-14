'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Factory, BarChart2, ClipboardCheck, Settings, Clock } from "lucide-react";

export default function ReadyMixPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Ready Mix Concrete Management</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Comprehensive solution for concrete batching, delivery, and quality control</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Factory className="h-8 w-8 text-[#D5A849] mb-2" />
            <CardTitle>Batching Control</CardTitle>
            <CardDescription>Precise mixing and production management</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Automated mix design</li>
              <li>• Real-time batch monitoring</li>
              <li>• Quality control checks</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Truck className="h-8 w-8 text-[#D5A849] mb-2" />
            <CardTitle>Fleet Management</CardTitle>
            <CardDescription>Optimize delivery operations</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• GPS tracking</li>
              <li>• Route optimization</li>
              <li>• Delivery scheduling</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <ClipboardCheck className="h-8 w-8 text-[#D5A849] mb-2" />
            <CardTitle>Quality Assurance</CardTitle>
            <CardDescription>Maintain product standards</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Strength testing</li>
              <li>• Compliance monitoring</li>
              <li>• Quality reports</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <BarChart2 className="h-8 w-8 text-[#D5A849] mb-2" />
            <CardTitle>Analytics & Reporting</CardTitle>
            <CardDescription>Data-driven insights</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Production metrics</li>
              <li>• Cost analysis</li>
              <li>• Performance tracking</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Settings className="h-8 w-8 text-[#D5A849] mb-2" />
            <CardTitle>Plant Maintenance</CardTitle>
            <CardDescription>Equipment upkeep management</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Preventive maintenance</li>
              <li>• Equipment monitoring</li>
              <li>• Service scheduling</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Clock className="h-8 w-8 text-[#D5A849] mb-2" />
            <CardTitle>Resource Planning</CardTitle>
            <CardDescription>Optimize resource allocation</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Material inventory</li>
              <li>• Staff scheduling</li>
              <li>• Resource forecasting</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}