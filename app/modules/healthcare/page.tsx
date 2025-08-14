"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Clipboard, Heart, Users } from "lucide-react";

export default function HealthcarePage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Healthcare Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Users className="h-6 w-6 text-blue-500" />
              Patient Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Efficiently manage patient records, appointments, and medical history.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Heart className="h-6 w-6 text-red-500" />
              Clinical Care
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Track treatments, medications, and patient progress in real-time.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Clipboard className="h-6 w-6 text-green-500" />
              Medical Records
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Secure electronic health records and documentation management.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Activity className="h-6 w-6 text-purple-500" />
              Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Comprehensive healthcare analytics and reporting tools.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                "Patient admission - John Doe",
                "Updated medical records - Sarah Smith",
                "New appointment scheduled - Mike Johnson",
                "Lab results uploaded - Emma Wilson",
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <p className="text-gray-700">{activity}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Key Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-3xl font-bold text-blue-600">127</p>
                <p className="text-sm text-gray-600">Active Patients</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-3xl font-bold text-green-600">45</p>
                <p className="text-sm text-gray-600">Appointments Today</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-3xl font-bold text-purple-600">92%</p>
                <p className="text-sm text-gray-600">Patient Satisfaction</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <p className="text-3xl font-bold text-red-600">24</p>
                <p className="text-sm text-gray-600">Staff Members</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}