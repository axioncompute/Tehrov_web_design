import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, MessageCircle, Sprout } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import SeoHead from '../components/SeoHead';

export default function AboutPage() {
  const starterLinks = [
    {
      step: 'Step 1',
      title: 'Why I Stopped Recommending Kratky to Beginners',
      desc: 'Understand the 5 hidden reasons passive jars fail in Indian summer heat and why a ₹120 air pump changes everything.',
      path: '/blog/i-stopped-recommending-kratky-to-beginners-heres-what-changed-my-mind',
    },
    {
      step: 'Step 2',
      title: 'I Built a Hydroponic Garden in a 2×2 ft Space',
      desc: 'The foolproof, leak-safe floor footprint for a rented 1BHK or 2BHK apartment.',
      path: '/blog/i-built-a-hydroponic-garden-in-a-2x2-ft-space-heres-exactly-how',
    },
    {
      step: 'Step 3',
      title: 'Full System Breakdown Under ₹2,000',
      desc: 'My exact rupee-by-rupee bill of materials (₹1,940 total) including the digital TDS pen and A+B nutrients.',
      path: '/blog/i-built-a-hydroponic-system-for-under-inr-2000-full-breakdown',
    },
    {
      step: 'Step 4',
      title: '90-Day Kitchen Counter Herb Setup (Under ₹1,200)',
      desc: 'How to grow fresh pudina, dhaniya, and basil right beside your chai dabba.',
      path: '/blog/i-grew-fresh-herbs-on-my-kitchen-counter-for-90-days-my-honest-hydroponic-setup-under-1200',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SeoHead
        title="About Us — Real Indoor Hydroponic Builds in India"
        description="Learn the story behind Hydro Build (tehrov.in)—testing small-space, soil-free hydroponic setups in real Indian apartments for under ₹1,200 to ₹2,000."
      />

      {/* Hero Story Card */}
      <section className="surface-card p-6 sm:p-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full surface-subtle text-xs font-bold text-[#166534] dark:text-[#22C55E]">
          <Sprout className="w-3.5 h-3.5" aria-hidden="true" />
          <span>About {SITE_CONFIG.brandName} ({SITE_CONFIG.domain})</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-extrabold leading-tight">
          Built in a Real Indian Apartment—Not a Commercial Greenhouse
        </h1>

        <div className="space-y-4 text-sm sm:text-base text-[#111C16] dark:text-[#ECFDF5] leading-relaxed">
          <p>
            Hi, I’m the grower behind <strong>{SITE_CONFIG.brandName} ({SITE_CONFIG.domain})</strong>. Six months ago, I started growing plants without soil in my 1BHK apartment with a single jar on the window sill. Before I figured out what actually works indoors in India, I spent three weeks obsessing over YouTube tutorials, burned through ₹2,000 on the wrong nutrient mix, watched passive Kratky jars turn yellow in 34°C summer heat, and accidentally flooded my floor once.
          </p>
          <p>
            Along the way, I realized two things. First, almost every beginner hydroponic guide online is written for cool Western climates with soft tap water—not an Indian flat in May where borewell TDS hits 550 ppm and afternoon room temperatures cross 33°C. Second, pre-made indoor hydroponic kits sold in India charge ₹15,000 to ₹30,000 for basic plastic and a ₹150 pump.
          </p>
          <p>
            I started <strong>{SITE_CONFIG.domain}</strong> to document every build honestly—showing the exact rupee-by-rupee part costs, the failures that taught me to switch beginners from passive Kratky jars to active ₹120 air-pump DWC trays, and how to fit 25 healthy plants onto a single shelf or grow 90 days of kitchen herbs for under ₹1,200.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="surface-subtle p-4 space-y-1.5">
            <div className="font-display font-bold text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#166534] dark:text-[#22C55E]" aria-hidden="true" />
              <span>Honest Rupee Breakdowns</span>
            </div>
            <p className="text-xs text-[#4B5E53] dark:text-[#9CA3AF] leading-relaxed">
              Every setup uses local food-grade tubs, aquarium pumps, and standard T8 LEDs you can source anywhere in India under ₹1,200–₹2,000.
            </p>
          </div>

          <div className="surface-subtle p-4 space-y-1.5">
            <div className="font-display font-bold text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#166534] dark:text-[#22C55E]" aria-hidden="true" />
              <span>Indian Climate &amp; Water First</span>
            </div>
            <p className="text-xs text-[#4B5E53] dark:text-[#9CA3AF] leading-relaxed">
              Designed around real Indian municipal, RO, and borewell TDS levels and warm summer room temperatures.
            </p>
          </div>

          <div className="surface-subtle p-4 space-y-1.5">
            <div className="font-display font-bold text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#166534] dark:text-[#22C55E]" aria-hidden="true" />
              <span>Renter &amp; Bedroom Safe</span>
            </div>
            <p className="text-xs text-[#4B5E53] dark:text-[#9CA3AF] leading-relaxed">
              Zero wall drilling, silent suspended air pumps, natural-white lighting, and secondary spill trays to protect apartment tiles.
            </p>
          </div>
        </div>
      </section>

      {/* Start Here — Beginner Roadmap */}
      <section className="space-y-6">
        <div className="space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#166534] dark:text-[#22C55E]">
            New to Soil-Free Growing?
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            Start Here: The 4-Article Beginner Roadmap
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {starterLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="surface-card p-6 flex flex-col justify-between hover:-translate-y-0.5 transition-transform"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase text-[#D97706] dark:text-[#F59E0B]">
                  {item.step}
                </span>
                <h3 className="font-display font-bold text-lg">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#4B5E53] dark:text-[#9CA3AF] leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#D5E2D7] dark:border-[#233D2F] inline-flex items-center gap-1.5 text-xs font-bold text-[#166534] dark:text-[#22C55E]">
                <span>Read Guide</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Direct Help Banner */}
      <section className="rounded-2xl bg-[#0D2116] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <h2 className="font-display text-xl sm:text-2xl font-bold">
            Need 1-on-1 Help With Your Own Corner or Struggling Plants?
          </h2>
          <p className="text-xs sm:text-sm text-[#A7BDB0]">
            Reach out directly by phone, WhatsApp, or email and we will help you plan or rescue your setup.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <a href={SITE_CONFIG.contact.phoneHref} className="btn-amber">
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>{SITE_CONFIG.contact.phoneDisplay}</span>
          </a>
          <a
            href={SITE_CONFIG.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </section>
    </div>
  );
}