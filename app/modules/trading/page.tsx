'use client';

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  BarChart2,
  DollarSign,
  Truck,
  FileText,
  Settings,
  AlertCircle
} from 'lucide-react';

export default function TradingPage() {
  const { language, isRTL } = useLanguage();

  const features = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
      title: {
        en: 'Sales Management',
        ar: 'إدارة المبيعات'
      },
      description: {
        en: 'Streamline your sales process with comprehensive order management and tracking',
        ar: 'تبسيط عملية المبيعات مع إدارة وتتبع شامل للطلبات'
      }
    },
    {
      icon: <Package className="h-8 w-8 text-green-600" />,
      title: {
        en: 'Procurement',
        ar: 'المشتريات'
      },
      description: {
        en: 'Optimize purchasing with automated workflows and vendor management',
        ar: 'تحسين المشتريات مع سير العمل الآلي وإدارة الموردين'
      }
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: {
        en: 'Customer Relations',
        ar: 'علاقات العملاء'
      },
      description: {
        en: 'Maintain strong customer relationships with integrated CRM features',
        ar: 'الحفاظ على علاقات قوية مع العملاء مع ميزات إدارة علاقات العملاء المتكاملة'
      }
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      title: {
        en: 'Performance Analytics',
        ar: 'تحليلات الأداء'
      },
      description: {
        en: 'Track key metrics and generate insights for better decision making',
        ar: 'تتبع المقاييس الرئيسية وتوليد رؤى لاتخاذ قرارات أفضل'
      }
    },
    {
      icon: <Truck className="h-8 w-8 text-red-600" />,
      title: {
        en: 'Logistics Integration',
        ar: 'تكامل الخدمات اللوجستية'
      },
      description: {
        en: 'Seamlessly manage shipping and delivery operations',
        ar: 'إدارة عمليات الشحن والتسليم بسلاسة'
      }
    },
    {
      icon: <Settings className="h-8 w-8 text-teal-600" />,
      title: {
        en: 'Configuration',
        ar: 'التكوين'
      },
      description: {
        en: 'Customize trading parameters and business rules',
        ar: 'تخصيص معايير التداول وقواعد العمل'
      }
    }
  ];

  const metrics = [
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
      title: {
        en: 'Total Sales',
        ar: 'إجمالي المبيعات'
      },
      value: '$1.2M',
      trend: '+12%'
    },
    {
      icon: <DollarSign className="h-6 w-6 text-green-600" />,
      title: {
        en: 'Revenue',
        ar: 'الإيرادات'
      },
      value: '$850K',
      trend: '+8%'
    },
    {
      icon: <FileText className="h-6 w-6 text-purple-600" />,
      title: {
        en: 'Orders',
        ar: 'الطلبات'
      },
      value: '1,234',
      trend: '+15%'
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-orange-600" />,
      title: {
        en: 'Pending',
        ar: 'قيد الانتظار'
      },
      value: '45',
      trend: '-5%'
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
            {isRTL ? 'وحدة التجارة' : 'Trading Module'}
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
            {isRTL 
              ? 'إدارة عمليات البيع والشراء الخاصة بك بكفاءة مع حل التداول الشامل من بي كور'
              : 'Efficiently manage your buying and selling operations with BCor\'s comprehensive trading solution'
            }
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className={cn(
                      "text-sm font-medium",
                      isRTL && "font-cairo"
                    )}>
                      {metric.title[language]}
                    </CardTitle>
                    {metric.icon}
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <p className={cn(
                      "text-xs text-muted-foreground",
                      metric.trend.startsWith('+') ? "text-green-600" : "text-red-600"
                    )}>
                      {metric.trend} from last month
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, i) => (
                <Card key={i} className="bg-white dark:bg-gray-900">
                  <CardHeader>
                    <div className={cn("mb-4", isRTL && "flex justify-end")}>
                      {feature.icon}
                    </div>
                    <CardTitle className={cn(
                      "text-xl font-semibold mb-2",
                      isRTL && "font-cairo text-right"
                    )}>
                      {feature.title[language]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={cn(
                      "text-gray-600 dark:text-gray-300",
                      isRTL && "font-cairo text-right"
                    )}>
                      {feature.description[language]}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}