'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "@/lib/motion";
import { Wallet, ChartBar, Globe, FileText, BarChart } from "lucide-react";

export default function FinancePage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <motion.div 
        className="max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">BCor Finance</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Empower Your Financial Backbone
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          BCor Finance is a comprehensive financial management suite designed to bring accuracy, 
          visibility, and control to your organization's financial operations. From core accounting 
          to advanced reporting, BCor Finance helps streamline financial processes, enforce compliance, 
          and support strategic decision-making.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <Wallet className="h-8 w-8 text-blue-600 mb-2" />
            <CardTitle>General Ledger & Accounts</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive management of accounts payable and receivable with integrated ledger system.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <ChartBar className="h-8 w-8 text-green-600 mb-2" />
            <CardTitle>Budgeting and Forecasting</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              Advanced tools for financial planning, budgeting, and future projections.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Globe className="h-8 w-8 text-purple-600 mb-2" />
            <CardTitle>Multi-Currency Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              Handle transactions in multiple currencies with automated exchange rate management.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <FileText className="h-8 w-8 text-orange-600 mb-2" />
            <CardTitle>Compliance Reporting</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              Generate compliant financial reports and statements with ease.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <BarChart className="h-8 w-8 text-red-600 mb-2" />
            <CardTitle>Real-Time Dashboards</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              Monitor key financial KPIs and metrics in real-time with interactive dashboards.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}