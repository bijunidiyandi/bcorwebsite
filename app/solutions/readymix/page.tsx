'use client';

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Ruler, ChartBar, ClipboardCheck, MapPin, Calculator } from 'lucide-react';

export default function ReadymixPage() {
  const { language, isRTL } = useLanguage();

  const features = [
    {
      icon: <Truck className="h-8 w-8 text-[#D5A849]" />,
      title: "Concrete Batching and Mix Design",
      description: "Manage mix designs, track raw materials, and ensure consistent quality with automated batching controls."
    },
    {
      icon: <MapPin className="h-8 w-8 text-[#D5A849]" />,
      title: "Delivery Logistics with GPS",
      description: "Real-time tracking of delivery trucks, optimized route planning, and automated delivery scheduling."
    },
    {
      icon: <Ruler className="h-8 w-8 text-[#D5A849]" />,
      title: "Weighbridge Integration",
      description: "Seamless integration with weighbridge systems for accurate material measurement and quality control."
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-[#D5A849]" />,
      title: "Quality and Moisture Checks",
      description: "Comprehensive quality control system with moisture monitoring and automated testing procedures."
    },
    {
      icon: <Calculator className="h-8 w-8 text-[#D5A849]" />,
      title: "Order-to-Invoice Flow",
      description: "Streamlined process from order placement to delivery confirmation and automated invoicing."
    },
    {
      icon: <ChartBar className="h-8 w-8 text-[#D5A849]" />,
      title: "Production Analytics",
      description: "Advanced reporting and analytics for production efficiency, resource utilization, and cost analysis."
    }
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
            BCor Readymix: Precision in Every Pour
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
            BCor Readymix is purpose-built for concrete suppliers and construction companies. 
            It supports batching, quality control, delivery tracking, and billing, ensuring 
            consistency, compliance, and customer satisfaction across your operations.
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {features.map((feature, i) => (
              <Card key={i} className="bg-white dark:bg-gray-900">
                <CardHeader>
                  <div className="mb-2">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}