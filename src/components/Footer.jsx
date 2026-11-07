import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D2116] dark:bg-[#070E0A] text-[#E8F0E9] border-t border-[#1E3B2B] pt-14 pb-24 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={SITE_CONFIG.logo.darkSrc || SITE_CONFIG.logo.src}
                alt={SITE_CONFIG.logo.alt}
                onError={(e) => {
                  e.currentTarget.src = SITE_CONFIG.logo.src;
                }}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-[#A7BDB0] leading-relaxed max-w-sm">
              {SITE_CONFIG.description}
            </p>
            <div className="space-y-2 pt-1 text-xs sm:text-sm">
              <a
                href={SITE_CONFIG.contact.phoneHref}
                className="flex items-center gap-2 text-[#F59E0B] font-semibold hover:underline"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>{SITE_CONFIG.contact.phoneDisplay}</span>
              </a>
              <a
                href={SITE_CONFIG.contact.emailHref}
                className="flex items-center gap-2 text-[#D5E2D7] hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>{SITE_CONFIG.contact.email}</span>
              </a>
              <div className="flex items-center gap-2 text-[#9CA3AF] text-xs pt-1">
                <MapPin className="w-4 h-4 shrink-0 text-[#22C55E]" aria-hidden="true" />
                <span>{SITE_CONFIG.contact.serviceCoverage}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white">
              Services &amp; Solutions
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#A7BDB0]">
              <li>
                <Link to="/services?category=rescue" className="hover:text-white transition-colors">
                  Kratky-to-Active DWC Rescue
                </Link>
              </li>
              <li>
                <Link to="/services?category=rescue" className="hover:text-white transition-colors">
                  Root Rot &amp; Algae Treatment
                </Link>
              </li>
              <li>
                <Link to="/services?category=rescue" className="hover:text-white transition-colors">
                  Indian Tap Water TDS Calibration
                </Link>
              </li>
              <li>
                <Link to="/services?category=builds" className="hover:text-white transition-colors">
                  Kitchen Counter Herbs (Under ₹1,200)
                </Link>
              </li>
              <li>
                <Link to="/services?category=builds" className="hover:text-white transition-colors">
                  25-Plant Single-Shelf System
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-[#22C55E] font-semibold hover:underline pt-1"
                >
                  <span>Explore All 8 Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Personal Builds Blog */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white">
              Personal Build Stories
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#A7BDB0]">
              <li>
                <Link
                  to="/blog?category=My+Personal+Builds"
                  className="hover:text-white transition-colors"
                >
                  Category: My Personal Builds
                </Link>
              </li>
              <li>
                <Link
                  to="/blog?category=Space+Optimized+Builds"
                  className="hover:text-white transition-colors"
                >
                  Category: Space Optimized Builds
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/i-stopped-recommending-kratky-to-beginners-heres-what-changed-my-mind"
                  className="hover:text-white transition-colors"
                >
                  Why I Stopped Recommending Kratky
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/i-grew-fresh-herbs-on-my-kitchen-counter-for-90-days-my-honest-hydroponic-setup-under-1200"
                  className="hover:text-white transition-colors"
                >
                  90-Day Kitchen Herb Setup (Under ₹1,200)
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/i-built-a-hydroponic-system-for-under-inr-2000-full-breakdown"
                  className="hover:text-white transition-colors"
                >
                  Full System Breakdown Under ₹2,000
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Legal */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#A7BDB0]">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/disclaimer" className="hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/legal/terms" className="hover:text-white transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#1E3B2B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8AA395]">
          <p>
            © {currentYear} {SITE_CONFIG.brandName} ({SITE_CONFIG.domain}). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/legal/privacy-policy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/legal/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
            <Link to="/legal/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
