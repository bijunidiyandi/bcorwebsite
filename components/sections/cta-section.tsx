'use client';

import { useLanguage } from '@/lib/language-context';
import { t } from '@/lib/translations';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from '@/lib/motion';

export function CtaSection() {
  const { language, isRTL } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white",
            isRTL && "font-cairo"
          )}>
            {t('cta.title', language)}
          </h2>
          <p className={cn(
            "text-xl mb-8 text-gray-600 dark:text-gray-300",
            isRTL && "font-cairo"
          )}>
            {t('cta.description', language)}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#1F3541] hover:bg-[#1a2c37] text-white gap-2"
            >
              {t('cta.button', language)}
              <ArrowRight className={cn("h-4 w-4", isRTL && "rotate-180")} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}