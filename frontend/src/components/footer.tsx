import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme, setTheme } = useTheme();

  return (
    <footer className="bg-background text-foreground border-t py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand & Description with Logo */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-3">
              {/* Logo */}
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 rounded-lg" />
                <div className="absolute inset-1 bg-background rounded flex items-center justify-center">
                  <span className="text-lg font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    JP
                  </span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">JobPortal</h2>
                <p className="text-sm text-muted-foreground">
                  Modern microservices job platform
                </p>
              </div>
            </div>
            
            <p className="text-sm">
              A modern job platform built with microservices architecture, 
              connecting talent with opportunities worldwide.
            </p>
            
            {/* Theme Mode Toggle */}
            <div className="pt-2">
              <h4 className="text-sm font-medium mb-2">Theme</h4>
              <div className="flex items-center space-x-2">
                <Button
                  variant={theme === 'light' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTheme('light')}
                  className="h-8 w-8 p-0"
                >
                  <Sun className="h-4 w-4" />
                </Button>
                <Button
                  variant={theme === 'dark' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTheme('dark')}
                  className="h-8 w-8 p-0"
                >
                  <Moon className="h-4 w-4" />
                </Button>
                <Button
                  variant={theme === 'system' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTheme('system')}
                  className="h-8 w-8 p-0"
                >
                  <Monitor className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/jobs', label: 'Browse Jobs' },
                { href: '/career-guide', label: 'Career Guide' },
                { href: '/resume-analyzer', label: 'Resume Analyzer' },
                { href: '/recruiters', label: 'For Recruiters' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {[
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/help', label: 'Help Center' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t my-6" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} JobPortal. All rights reserved.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {[
              { href: 'https://github.com', label: 'GitHub' },
              { href: 'https://linkedin.com', label: 'LinkedIn' },
              { href: 'https://twitter.com', label: 'Twitter' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;