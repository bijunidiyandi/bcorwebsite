'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, FileText, Users, BarChart2, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Management</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Deliver projects on time and within scope with comprehensive project management tools</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Clock className="h-8 w-8 text-blue-600 mb-2" />
            <CardTitle>Project Planning</CardTitle>
            <CardDescription>Plan and track project timelines</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Timeline management</li>
              <li>• Milestone tracking</li>
              <li>• Resource allocation</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <FileText className="h-8 w-8 text-green-600 mb-2" />
            <CardTitle>Task Management</CardTitle>
            <CardDescription>Organize and assign project tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Task assignment</li>
              <li>• Progress tracking</li>
              <li>• Priority management</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Users className="h-8 w-8 text-purple-600 mb-2" />
            <CardTitle>Team Collaboration</CardTitle>
            <CardDescription>Enable team communication</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Team messaging</li>
              <li>• File sharing</li>
              <li>• Role management</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <BarChart2 className="h-8 w-8 text-orange-600 mb-2" />
            <CardTitle>Project Analytics</CardTitle>
            <CardDescription>Track project performance</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Progress reports</li>
              <li>• Resource utilization</li>
              <li>• Cost tracking</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
            <CardTitle>Risk Management</CardTitle>
            <CardDescription>Identify and mitigate risks</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Risk assessment</li>
              <li>• Issue tracking</li>
              <li>• Mitigation planning</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CheckCircle2 className="h-8 w-8 text-teal-600 mb-2" />
            <CardTitle>Quality Assurance</CardTitle>
            <CardDescription>Ensure project quality</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Quality metrics</li>
              <li>• Review processes</li>
              <li>• Compliance checks</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}