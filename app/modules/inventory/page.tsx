'use client';

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import {
  BarChart3,
  Box,
  Boxes,
  ClipboardCheck,
  QrCode,
  RefreshCw,
  Truck,
} from 'lucide-react';

export default function InventoryPage() {
  const { language, isRTL } = useLanguage();

  const features = [
    {
      icon: <Boxes className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Real-Time Inventory Tracking',
        ar: 'تتبع المخزون في الوقت الفعلي'
      },
      description: {
        en: 'Monitor levels across warehouses and bins with instant updates and alerts.',
        ar: 'مراقبة المستويات عبر المستودعات والصناديق مع تحديثات وتنبيهات فورية.'
      }
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Stock Replenishment Automation',
        ar: 'أتمتة تجديد المخزون'
      },
      description: {
        en: 'Set reorder levels, safety stocks, and receive restock alerts automatically.',
        ar: 'تعيين مستويات إعادة الطلب والمخزون الاحتياطي وتلقي تنبيهات إعادة التخزين تلقائياً.'
      }
    },
    {
      icon: <Box className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Lot & Batch Management',
        ar: 'إدارة الدفعات والمجموعات'
      },
      description: {
        en: 'Track lots, serials, and batches for complete product traceability.',
        ar: 'تتبع المجموعات والأرقام التسلسلية والدفعات للتتبع الكامل للمنتج.'
      }
    },
    {
      icon: <QrCode className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Barcode & RFID Support',
        ar: 'دعم الباركود وRFID'
      },
      description: {
        en: 'Streamline warehouse operations with integrated scanning solutions.',
        ar: 'تبسيط عمليات المستودع مع حلول المسح المتكاملة.'
      }
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Stock Auditing & Adjustment',
        ar: 'تدقيق وتعديل المخزون'
      },
      description: {
        en: 'Maintain accurate inventory counts with built-in auditing tools.',
        ar: 'الحفاظ على عد دقيق للمخزون مع أدوات التدقيق المدمجة.'
      }
    },
    {
      icon: <Truck className="h-8 w-8 text-[#D5A849]" />,
      title: {
        en: 'Warehouse Transfer Management',
        ar: 'إدارة نقل المستودعات'
      },
      description: {
        en: 'Manage stock movements between locations with full traceability.',
        ar: 'إدارة حركات المخزون بين المواقع مع إمكانية التتبع الكامل.'
      }
    }
  ];

  const benefits = [
    {
      en: 'Lower inventory carrying costs',
      ar: 'خفض تكاليف حمل المخزون'
    },
    {
      en: 'Enhanced supply chain agility',
      ar: 'تعزيز مرونة سلسلة التوريد'
    },
    {
      en: 'Accurate, real-time inventory records',
      ar: 'سجلات مخزون دقيقة في الوقت الفعلي'
    },
    {
      en: 'Reduced losses due to expiry or theft',
      ar: 'تقليل الخسائر بسبب انتهاء الصلاحية أو السرقة'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={cn(
            "text-4xl font-bold mb-6 text-gray-900 dark:text-white",
            isRTL && "font-cairo"
          )}>
            {isRTL ? 'إدارة المخزون' : 'Inventory Management'}
          </h1>
          <p className={cn(
            "text-xl text-gray-600 dark:text-gray-300",
            isRTL && "font-cairo"
          )}>
            {isRTL 
              ? 'حل متكامل لإدارة المخزون مع تتبع في الوقت الفعلي وتحسين سلسلة التوريد'
              : 'A comprehensive inventory management solution with real-time tracking and supply chain optimization'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={cn("mb-4", isRTL && "flex justify-end")}>
                {feature.icon}
              </div>
              <h3 className={cn(
                "text-xl font-semibold mb-3 text-gray-900 dark:text-white",
                isRTL && "font-cairo text-right"
              )}>
                {feature.title[language]}
              </h3>
              <p className={cn(
                "text-gray-600 dark:text-gray-300",
                isRTL && "font-cairo text-right"
              )}>
                {feature.description[language]}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-[#1F3541] text-white rounded-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className={cn(
              "text-2xl md:text-3xl font-bold mb-6 text-center",
              isRTL && "font-cairo"
            )}>
              {isRTL ? 'فوائد حل إدارة المخزون' : 'Benefits of Our Inventory Solution'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div 
                  key={i}
                  className={cn(
                    "flex items-center gap-3",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  <BarChart3 className="h-5 w-5 text-[#D5A849] flex-shrink-0" />
                  <span className={cn(
                    "text-gray-100",
                    isRTL && "font-cairo text-right"
                  )}>
                    {benefit[language]}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button 
                size="lg"
                className="bg-[#D5A849] hover:bg-[#c49842] text-white"
              >
                {isRTL ? 'اكتشف المزيد' : 'Learn More'}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}