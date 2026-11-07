import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle2, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SERVICE_CATEGORIES, SERVICES_DATA } from '../data/servicesData';
import SeoHead from '../components/SeoHead';

export default function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCat);

  useEffect(() => {
    const paramCat = searchParams.get('category');
    if (paramCat && ['all', 'rescue', 'builds'].includes(paramCat)) {
      setActiveCategory(paramCat);
    }
  }, [searchParams]);

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  function handleCategoryChange(catId) {
    setActiveCategory(catId);
    if (catId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: catId });
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SeoHead
        title="Hydroponic System Rescue & Small-Space Build Services"
        description="Compare our indoor hydroponic rescue services (Kratky upgrades, root rot recovery, tap water TDS calibration) and under-₹2,000 small-space apartment builds."
      />

      {/* Page Header */}
      <div className="surface-card p-6 sm:p-10 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#166534] dark:text-[#22C55E]">
          Simple 2-Track Service Menu
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold">
          Hydroponic System Rescue &amp; Space-Optimized Apartment Builds
        </h1>
        <p className="text-sm sm:text-base text-[#4B5E53] dark:text-[#9CA3AF] max-w-3xl leading-relaxed">
          We keep our services simple and transparent. Choose <strong>System Rescue &amp; Water Care</strong> if your current plants are yellowing or struggling with Indian summer heat, or choose <strong>Small-Space Custom Builds</strong> to set up a reliable indoor garden in your kitchen, window, shelf, or bedroom corner.
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 pt-2">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
                activeCategory === cat.id
                  ? 'bg-[#166534] text-white dark:bg-[#22C55E] dark:text-[#052E16]'
                  : 'surface-subtle text-[#111C16] dark:text-[#ECFDF5] hover:opacity-85'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Detailed Service Cards */}
      <div className="space-y-8">
        {filteredServices.map((service) => (
          <section
            key={service.id}
            id={service.id}
            className="surface-card p-6 sm:p-8 space-y-6"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#D5E2D7] dark:border-[#233D2F] pb-5">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E8F0E9] dark:bg-[#192E23] text-[#166534] dark:text-[#22C55E]">
                    {service.badge}
                  </span>
                  <span className="text-xs font-bold text-[#D97706] dark:text-[#F59E0B]">
                    {service.priceTag}
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold">{service.title}</h2>
                <p className="text-xs sm:text-sm text-[#4B5E53] dark:text-[#9CA3AF]">
                  {service.summary}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <a href={SITE_CONFIG.contact.phoneHref} className="btn-amber">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Call {SITE_CONFIG.contact.phoneDisplay}</span>
                </a>
                <Link to="/contact" className="btn-primary">
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* 12 Service Checkpoints */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#4B5E53] dark:text-[#9CA3AF] mb-3">
                12 Included Checkpoints &amp; Deliverables:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {service.options.map((opt, idx) => (
                  <div
                    key={idx}
                    className="surface-subtle p-3.5 text-xs sm:text-sm flex items-start gap-2.5"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-[#166534] dark:text-[#22C55E] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{opt}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom Contact Banner */}
      <div className="surface-subtle p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h2 className="font-display text-xl font-bold">
            Not sure which rescue or small-space build fits your room?
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5E53] dark:text-[#9CA3AF]">
            Send us a quick photo of your corner or plant roots on WhatsApp and we will guide you before you spend a rupee on parts.
          </p>
        </div>
        <a
          href={SITE_CONFIG.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary shrink-0"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          <span>Chat on WhatsApp ({SITE_CONFIG.contact.phoneDisplay})</span>
        </a>
      </div>
    </div>
  );
}