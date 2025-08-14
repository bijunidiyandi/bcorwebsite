'use client';

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';
import { CheckCircle2 } from 'lucide-react';

export default function FinancePage() {
  const { language, isRTL } = useLanguage();

  const features = [
    {
      title: 'Comprehensive General Ledger',
      description: 'Manage your chart of accounts with customizable structures, multi-currency support, and dynamic posting rules.'
    },
    {
      title: 'Accounts Payable & Receivable Automation',
      description: 'Ensure timely payments, accurate invoicing, and efficient collections.'
    },
    {
      title: 'Dynamic Budgeting & Forecasting',
      description: 'Build detailed financial forecasts and compare them to actuals in real-time.'
    },
    {
      title: 'Multi-Entity & Global Compliance',
      description: 'Consolidate reports across multiple branches or legal entities effortlessly.'
    },
    {
      title: 'Tax Management & Regulatory Reporting',
      description: 'Stay compliant with VAT, GST, and other tax frameworks, with built-in tools for audit readiness.'
    },
    {
      title: 'Real-Time Dashboards',
      description: 'Get a 360-degree view of cash flow, P&L, and balance sheets.'
    }
  ];

  const benefits = [
    'Reduce manual entries and errors',
    'Gain instant financial insights',
    'Meet statutory compliance easily',
    'Improve financial planning and control',
    'Centralize accounting across departments and subsidiaries',
    'Increase audit readiness and reduce risk'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <motion.h1 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white",
              isRTL && "font-cairo text-right"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Finance Module
          </motion.h1>
          
          <motion.p 
            className={cn(
              "text-lg text-gray-600 dark:text-gray-300 mb-8",
              isRTL && "font-cairo text-right"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Take full control of your organization's financial health with BCOR's powerful Finance module. 
            Designed to deliver complete visibility, accuracy, and compliance, our finance solution enables 
            smarter decisions, ensures regulatory adherence, and accelerates your growth.
          </motion.p>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <h2 className={cn(
                "text-2xl font-semibold mb-6 text-gray-900 dark:text-white",
                isRTL && "font-cairo text-right"
              )}>
                Key Features
              </h2>
              <div className="grid gap-6">
                {features.map((feature, i) => (
                  <div 
                    key={i}
                    className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm"
                  >
                    <h3 className={cn(
                      "text-xl font-semibold mb-2 text-gray-900 dark:text-white",
                      isRTL && "font-cairo text-right"
                    )}>
                      {feature.title}
                    </h3>
                    <p className={cn(
                      "text-gray-600 dark:text-gray-300",
                      isRTL && "font-cairo text-right"
                    )}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className={cn(
                "text-2xl font-semibold mb-6 text-gray-900 dark:text-white",
                isRTL && "font-cairo text-right"
              )}>
                Benefits
              </h2>
              <div className="grid gap-4">
                {benefits.map((benefit, i) => (
                  <div 
                    key={i}
                    className={cn(
                      "flex items-center gap-3",
                      isRTL && "flex-row-reverse"
                    )}
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#D5A849] flex-shrink-0" />
                    <span className={cn(
                      "text-gray-700 dark:text-gray-300",
                      isRTL && "font-cairo text-right"
                    )}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className={cn(
                "text-2xl font-semibold mb-4 text-gray-900 dark:text-white",
                isRTL && "font-cairo text-right"
              )}>
                Integration & Scalability
              </h2>
              <p className={cn(
                "text-gray-600 dark:text-gray-300",
                isRTL && "font-cairo text-right"
              )}>
                The Finance module connects seamlessly with Trading, Inventory, HRM, and all operational 
                modules. It serves as the core financial engine of the ERP system, enabling real-time 
                data synchronization across business units. Whether managing finances in a single company 
                or across multiple geographies, BCOR's Finance module is built to scale as your enterprise grows.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}