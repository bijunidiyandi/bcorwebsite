'use client';

import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';
import { motion } from '@/lib/motion';
import Link from 'next/link';
import { 
  BarChart3, ShoppingCart, Package, Users, 
  ClipboardList, Factory, Building2, Car,
  Hospital, HeartHandshake, Building, Truck
} from 'lucide-react';

export default function ModulesPage() {
  const { language, isRTL } = useLanguage();

  const modules = [
    {
      icon: <BarChart3 className="h-8 w-8 text-[#D5A849]" />,
      title: 'Finance',
      description: 'Take full control of your organization\'s financial health with comprehensive accounting tools.',
      href: '/modules/finance'
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-[#D5A849]" />,
      title: 'Trading',
      description: 'Manage procurement, sales, and vendor-customer relationships efficiently.',
      href: '/modules/trading'
    },
    {
      icon: <Package className="h-8 w-8 text-[#D5A849]" />,
      title: 'Inventory',
      description: 'Optimize inventory control and warehouse management with real-time analytics.',
      href: '/modules/inventory'
    },
    {
      icon: <Users className="h-8 w-8 text-[#D5A849]" />,
      title: 'HCM',
      description: 'Streamline HR operations from recruitment to payroll and performance management.',
      href: '/modules/hcm'
    },
    {
      icon: <ClipboardList className="h-8 w-8 text-[#D5A849]" />,
      title: 'Projects',
      description: 'Deliver projects on time and within scope with comprehensive project management.',
      href: '/modules/projects'
    },
    {
      icon: <Factory className="h-8 w-8 text-[#D5A849]" />,
      title: 'Production',
      description: 'Support manufacturing operations with intelligent workflows and shop floor control.',
      href: '/modules/production'
    },
    {
      icon: <Building2 className="h-8 w-8 text-[#D5A849]" />,
      title: 'Fixed Assets',
      description: 'Manage asset lifecycle from acquisition to disposal with automated compliance.',
      href: '/modules/fixed-assets'
    },
    {
      icon: <Car className="h-8 w-8 text-[#D5A849]" />,
      title: 'Automotive',
      description: 'Streamline service bookings, spare parts, and customer engagement for automotive businesses.',
      href: '/modules/automotive'
    },
    {
      icon: <Hospital className="h-8 w-8 text-[#D5A849]" />,
      title: 'Healthcare',
      description: 'Manage patient care, medical records, and appointments with utmost efficiency.',
      href: '/modules/healthcare'
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-[#D5A849]" />,
      title: 'CRM',
      description: 'Build lasting relationships with prospects and customers through every interaction.',
      href: '/modules/crm'
    },
    {
      icon: <Building className="h-8 w-8 text-[#D5A849]" />,
      title: 'Property',
      description: 'Simplify lease management, rent tracking, and maintenance for real estate operations.',
      href: '/modules/property'
    },
    {
      icon: <Truck className="h-8 w-8 text-[#D5A849]" />,
      title: 'Ready Mix',
      description: 'Manage concrete batching, delivery, and quality control with precision.',
      href: '/modules/ready-mix'
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
            {isRTL ? 'وحدات بي كور' : 'BCOR Modules'}
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
              ? 'حلول شاملة لجميع احتياجات عملك' 
              : 'Comprehensive solutions for all your business needs'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, i) => (
            <motion.div 
              key={i}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={module.href} className="block">
                <div className={cn("mb-4", isRTL && "flex justify-end")}>
                  {module.icon}
                </div>
                <h2 className={cn(
                  "text-xl font-semibold mb-2 text-gray-900 dark:text-white",
                  isRTL && "font-cairo text-right"
                )}>
                  {module.title}
                </h2>
                <p className={cn(
                  "text-gray-600 dark:text-gray-300",
                  isRTL && "font-cairo text-right"
                )}>
                  {module.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}