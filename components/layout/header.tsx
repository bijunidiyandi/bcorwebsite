'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/lib/language-context';
import { t } from '@/lib/translations';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const moduleItems = [
    { key: 'finance', href: '/modules/finance', label: 'Finance' },
    { key: 'trading', href: '/modules/trading', label: 'Trading' },
    { key: 'inventory', href: '/modules/inventory', label: 'Inventory' },
    { key: 'hcm', href: '/modules/hcm', label: 'HCM' },
    { key: 'projects', href: '/modules/projects', label: 'Projects' },
    { key: 'production', href: '/modules/production', label: 'Production' },
    { key: 'fixed-assets', href: '/modules/fixed-assets', label: 'Fixed Assets' },
    { key: 'automotive', href: '/modules/automotive', label: 'Automotive' },
    { key: 'healthcare', href: '/modules/healthcare', label: 'Healthcare' },
    { key: 'crm', href: '/modules/crm', label: 'CRM' },
    { key: 'property', href: '/modules/property', label: 'Property' },
    { key: 'ready-mix', href: '/modules/ready-mix', label: 'Ready Mix' },
  ];

  const solutionItems = [
    { key: 'finance', href: '/solutions/finance', label: 'BCor Finance' },
    { key: 'hcm', href: '/solutions/hcm', label: 'BCor HCM' },
    { key: 'workshop', href: '/solutions/workshop', label: 'BCor Workshop' },
    { key: 'trading', href: '/solutions/trading', label: 'BCor Trading' },
    { key: 'readymix', href: '/solutions/readymix', label: 'BCor Readymix' },
    { key: 'production', href: '/solutions/production', label: 'BCor Production' },
    { key: 'projects', href: '/solutions/projects', label: 'BCor Projects' },
    { key: 'healthcare', href: '/solutions/healthcare', label: 'BCor Healthcare' },
    { key: 'fixed-asset', href: '/solutions/fixed-asset', label: 'BCor Fixed Asset' },
    { key: 'pos', href: '/solutions/pos', label: 'BCor POS' },
    { key: 'crm', href: '/solutions/crm', label: 'BCor CRM' },
    { key: 'logistics', href: '/solutions/logistics', label: 'BCor Logistics' },
  ];

  const navItems = [
    { key: 'nav.home', href: '/' },
    { 
      key: 'nav.features',
      href: '/modules',
      items: moduleItems
    },
    { 
      key: 'nav.solutions',
      href: '/solutions',
      items: solutionItems
    },
    { key: 'nav.about', href: '/about' },
    { key: 'nav.contact', href: '/contact' },
  ];

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img 
                src="/BCorLogo1a.png" 
                alt="BCor ERP" 
                className="h-18 w-auto object-contain transition-transform duration-300" 
              style={{ transform: isScrolled ? 'scale(1.5)' : 'scale(3)'}}
              />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.key}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className={cn(
                          "text-sm font-medium transition-colors hover:text-primary",
                          isRTL ? "font-cairo" : ""
                        )}>
                          {t(item.key, language)}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.items.map((subItem) => (
                              <li key={subItem.key}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">{subItem.label}</div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-primary",
                          isRTL ? "font-cairo" : ""
                        )}
                      >
                        {t(item.key, language)}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">
                  {language === 'en' ? 'English' : 'العربية'}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('ar')}>
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Demo Button */}
            <Button 
              className={cn(
                "bg-[#1F3541] hover:bg-[#1a2c37] text-white", 
                isRTL ? "font-cairo" : ""
              )}
            >
              {t('hero.cta.demo', language)}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-background border-b">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.key}>
                {item.items ? (
                  <div className="space-y-2">
                    <div className={cn(
                      "text-sm font-medium",
                      isRTL ? "font-cairo text-right" : ""
                    )}>
                      {t(item.key, language)}
                    </div>
                    <div className="pl-4 space-y-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.key}
                          href={subItem.href}
                          className={cn(
                            "block text-sm text-muted-foreground hover:text-primary",
                            isRTL ? "font-cairo text-right" : ""
                          )}
                          onClick={closeMenu}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      isRTL ? "font-cairo text-right" : ""
                    )}
                    onClick={closeMenu}
                  >
                    {t(item.key, language)}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="flex flex-col space-y-3 pt-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="justify-between">
                    {language === 'en' ? 'English' : 'العربية'}
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setLanguage('en')}>
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('ar')}>
                    العربية
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button 
                className={cn(
                  "bg-[#1F3541] hover:bg-[#1a2c37] text-white", 
                  isRTL ? "font-cairo" : ""
                )}
              >
                {t('hero.cta.demo', language)}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}