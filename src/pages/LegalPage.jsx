import React from 'react';
import { useParams, NavLink, Navigate } from 'react-router-dom';
import { Shield, FileText, AlertTriangle, Mail, Phone } from 'lucide-react';
import { LEGAL_PAGES_DATA } from '../data/legalData';
import { SITE_CONFIG } from '../config/siteConfig';
import SeoHead from '../components/SeoHead';

export default function LegalPage() {
  const { policySlug } = useParams();
  const pageData = LEGAL_PAGES_DATA[policySlug];

  if (!pageData) {
    return <Navigate to="/legal/privacy-policy" replace />;
  }

  const navItems = [
    { slug: 'privacy-policy', label: 'Privacy Policy', icon: Shield },
    { slug: 'disclaimer', label: 'Disclaimer', icon: AlertTriangle },
    { slug: 'terms', label: 'Terms & Conditions', icon: FileText },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SeoHead title={pageData.title} description={pageData.summary} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar Navigation for Legal Pages */}
        <aside className="lg:col-span-4 surface-card p-5 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#166534] dark:text-[#22C55E] px-2">
            Legal &amp; Compliance
          </div>
          <nav aria-label="Legal Pages" className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.slug}
                  to={`/legal/${item.slug}`}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-[#166534] text-white dark:bg-[#22C55E] dark:text-[#052E16]'
                        : 'surface-subtle hover:opacity-85'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-[#D5E2D7] dark:border-[#233D2F] px-2 space-y-2 text-xs text-[#4B5E53] dark:text-[#9CA3AF]">
            <div className="font-bold text-[#111C16] dark:text-white">
              Questions About Our Policies?
            </div>
            <a
              href={SITE_CONFIG.contact.emailHref}
              className="flex items-center gap-1.5 hover:underline"
            >
              <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{SITE_CONFIG.contact.email}</span>
            </a>
            <a
              href={SITE_CONFIG.contact.phoneHref}
              className="flex items-center gap-1.5 hover:underline"
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{SITE_CONFIG.contact.phoneDisplay}</span>
            </a>
          </div>
        </aside>

        {/* Main Policy Content */}
        <article className="lg:col-span-8 surface-card p-6 sm:p-10 space-y-6">
          <header className="border-b border-[#D5E2D7] dark:border-[#233D2F] pb-5 space-y-2">
            <span className="text-xs font-semibold text-[#166534] dark:text-[#22C55E]">
              Last Updated: {pageData.lastUpdated}
            </span>
            <h1 className="font-display text-2xl sm:text-4xl font-extrabold">
              {pageData.title}
            </h1>
            <p className="text-xs sm:text-sm text-[#4B5E53] dark:text-[#9CA3AF] leading-relaxed">
              {pageData.summary}
            </p>
          </header>

          <div className="space-y-6">
            {pageData.sections.map((sec, idx) => (
              <section key={idx} className="space-y-2">
                <h2 className="font-display text-lg font-bold">{sec.heading}</h2>
                <p className="text-sm leading-relaxed text-[#111C16] dark:text-[#ECFDF5]">
                  {sec.body}
                </p>
              </section>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}