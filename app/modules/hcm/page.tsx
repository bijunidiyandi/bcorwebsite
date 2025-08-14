'use client';

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';
import { 
  Users, Bell, FileText, Calendar, 
  Ticket, Calculator, UserCog, Coins
} from 'lucide-react';

export default function HcmPage() {
  const { language, isRTL } = useLanguage();

  const features = [
    {
      icon: <Users className="h-8 w-8 text-[#D5A849]" />,
      title: isRTL ? 'الامتثال لدول مجلس التعاون الخليجي' : 'GCC Compliance',
      description: isRTL 
        ? 'ضمان الامتثال للوائح الخاصة بمنطقة دول مجلس التعاون الخليجي'
        : 'Ensures adherence to regulations specific to the GCC region'
    },
    {
      icon: <Calendar className="h-8 w-8 text-[#D5A849]" />,
      title: isRTL ? 'تقرير الحضور' : 'Attendance Report',
      description: isRTL
        ? 'مراقبة وتتبع حضور الموظفين بسهولة مع تقارير مفصلة توفر رؤى حول ساعات العمل والغياب والتأخير'
        : 'Monitor and track employee attendance effortlessly with detailed reports that provide insights into working hours, absences, and tardiness'
    },
    {
      icon: <FileText className="h-8 w-8 text-[#D5A849]" />,
      title: isRTL ? 'إدارة الإجازات' : 'Leave Management',
      description: isRTL
        ? 'تبسيط طلبات الإجازة والموافقات والتتبع مع نظام إدارة الإجازات البديهي'
        : 'Streamline leave requests, approvals, and tracking with our intuitive leave management system'
    },
    {
      icon: <Bell className="h-8 w-8 text-[#D5A849]" />,
      title: isRTL ? 'تنبيه انتهاء صلاحية المستندات' : 'Document Expiry Alert',
      description: isRTL
        ? 'البقاء ممتثلاً ومنظماً - احصل على تنبيهات في الوقت المناسب لانتهاء صلاحية المستندات'
        : 'Stay compliant and organized — get timely alerts for document expiry'
    },
    {
      icon: <Ticket className="h-8 w-8 text-[#D5A849]" />,
      title: isRTL ? 'إدارة التذاكر' : 'Ticket Management',
      description: isRTL
        ? 'معالجة استفسارات الموظفين وطلباتهم وشكاواهم بكفاءة'
        : 'Efficiently handle employee queries, requests, and grievances'
    },
    {
      icon: <Calculator className="h-8 w-8 text-[#D5A849]" />,
      title: isRTL ? 'إدارة المخصصات والحسابات' : 'Provisions & Accounts Management',
      description: isRTL
        ? 'إدارة مخصصات وحسابات الموظفين بسلاسة'
        : 'Seamlessly handle employee provisions and accounts'
    },
    {
      icon: <UserCog className="h-8 w-8 text-[#D5A849]" />,
      title: isRTL ? 'خدمة الموظف الذاتية' : 'Employee Self-Service (ESS)',
      description: isRTL
        ? 'تمكين الموظفين من إدارة معلوماتهم الخاصة من خلال بوابة الخدمة الذاتية سهلة الاستخدام'
        : 'Empower employees to manage their own information through our user-friendly self-service portal'
    },
    {
      icon: <Coins className="h-8 w-8 text-[#D5A849]" />,
      title: isRTL ? 'إدارة القروض' : 'Loan Management',
      description: isRTL
        ? 'إدارة قروض الموظفين بكفاءة، من التقديم والموافقة إلى السداد'
        : 'Manage employee loans efficiently, from application and approval to repayment'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white",
              isRTL && "font-cairo"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {isRTL ? 'بي كور لإدارة رأس المال البشري' : 'BCorHCM - Human Capital Management'}
          </motion.h1>
          <motion.p 
            className={cn(
              "text-lg text-gray-600 dark:text-gray-300",
              isRTL && "font-cairo"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {isRTL 
              ? 'حل شامل لإدارة رأس المال البشري، مصمم لتمكين المؤسسات من إدارة القوى العاملة بكفاءة' 
              : 'Your comprehensive solution for managing human capital, designed to empower organizations with efficient workforce management capabilities'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={cn("mb-4", isRTL && "flex justify-end")}>
                {feature.icon}
              </div>
              <h2 className={cn(
                "text-xl font-semibold mb-2 text-gray-900 dark:text-white",
                isRTL && "font-cairo text-right"
              )}>
                {feature.title}
              </h2>
              <p className={cn(
                "text-gray-600 dark:text-gray-300",
                isRTL && "font-cairo text-right"
              )}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}