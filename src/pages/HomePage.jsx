import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  MapPin,
  ChevronDown,
  X,
  Sparkles,
  Droplets,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import {
  SERVICE_CATEGORIES,
  WARNING_SIGNS,
  SERVICES_DATA,
  PROCESS_STEPS,
} from '../data/servicesData';
import { CITIES_DATA } from '../data/citiesData';
import { BLOG_POSTS } from '../data/blogsData';
import { FAQ_DATA } from '../data/faqData';
import SeoHead from '../components/SeoHead';

export default function HomePage() {
  const [triageMode, setTriageMode] = useState('rescue');
  const [selectedSymptom, setSelectedSymptom] = useState('kratky');
  const [selectedSpace, setSelectedSpace] = useState('counter');
  const [activeServiceCat, setActiveServiceCat] = useState('all');
  const [modalService, setModalService] = useState(null);
  const [cityQuery, setCityQuery] = useState('');
  const [showAllCities, setShowAllCities] = useState(false);
  const [selectedCity, setSelectedCity] = useState(CITIES_DATA[0]);
  const [openFaqId, setOpenFaqId] = useState(FAQ_DATA[0]?.id);

  const triageRecommendations = {
    kratky: {
      title: 'Active DWC Aeration Retrofit (~₹600)',
      detail:
        'Convert stagnant jars into a 6-pot active DWC tub with a ₹120 aquarium air pump, airline tubing, and air stone to restore dissolved oxygen within 48 hours.',
    },
    rootrot: {
      title: 'Root Sanitization & Thermal Wrap',
      detail:
        'Prune slimy brown roots, rinse in clean water, insulate the reservoir from 34°C summer heat, and reset with a mild 450 ppm nutrient solution.',
    },
    algae: {
      title: 'Opaque Blackout & Reservoir Flush',
      detail:
        'Wrap or paint clear glass containers opaque to starve green algae immediately, flush pH-dropped water, and refill with fresh Part A + B nutrients.',
    },
    tds: {
      title: 'Indian Tap & RO Water Calibration',
      detail:
        'Blend high-TDS borewell or tap water with RO water to hit a 150–180 ppm base before dosing nutrients to stop leaf tip-burn and iron lockout.',
    },
    under1200: {
      title: '90-Day Kitchen Counter Herb Bar (Under ₹1,200)',
      detail:
        '7-litre opaque food-grade tub, 6 net pots, 2.5W air pump, and an 18W under-cabinet LED bar for continuous fresh pudina, dhaniya, and basil.',
    },
    under2000: {
      title: '12-Plant Active DWC Starter System (₹1,940)',
      detail:
        'Complete starter build with a 15L heavy-duty box, dual-outlet air pump, 2-foot T8 full-spectrum LED, digital TDS meter, and 200L nutrient pack.',
    },
    shelf25: {
      title: '25-Plant Staggered Single-Shelf Layout',
      detail:
        'High-density 8–9–8 diamond hole pattern with tall herbs in the back row and compact lettuce and spinach in the front.',
    },
    tower: {
      title: 'Quiet Vertical UPVC Window/Corner Tower',
      detail:
        '4-inch food-grade UPVC column with an internal sponge baffle for silent indoor water flow, fitting 18–24 plants in a 1.5×1.5 ft corner.',
    },
  };

  const currentRecommendation =
    triageRecommendations[selectedSymptom] || triageRecommendations.kratky;

  const filteredServices =
    activeServiceCat === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeServiceCat);

  const filteredCities = CITIES_DATA.filter(
    (c) =>
      c.city.toLowerCase().includes(cityQuery.trim().toLowerCase()) ||
      c.popularSetup.toLowerCase().includes(cityQuery.trim().toLowerCase())
  );
  const displayedCities = cityQuery.trim()
    ? filteredCities
    : showAllCities
    ? filteredCities
    : filteredCities.slice(0, 8);

  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.brandName,
    url: SITE_CONFIG.siteUrl,
    telephone: SITE_CONFIG.contact.phoneRaw,
    email: SITE_CONFIG.contact.email,
    description: SITE_CONFIG.description,
    areaServed: 'India',
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      <SeoHead
        title="Indoor Hydroponic System Rescue & Small-Space Builds in India"
        description="Fix yellowing hydroponic plants, root rot, and Kratky failures or build a space-optimized apartment setup in India under ₹1,200–₹2,000."
        schemaData={homeSchema}
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0D2116] text-white border-b border-[#1E3B2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#163826] border border-[#2A543D] text-[#4ADE80] text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Indoor Hydroponic Rescue &amp; Space-Optimized Builds</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15]">
                Save Struggling Hydroponic Plants or Build a Compact Apartment Farm Under ₹2,000
              </h1>

              <p className="text-base sm:text-lg text-[#D5E2D7] leading-relaxed max-w-2xl">
                Passive Kratky jars, uncalibrated tap water TDS, and 34°C Indian summer heat can wipe out an indoor setup in days. We help home growers rescue yellowing plants and design clean, soil-free setups for kitchen counters, window grills, single shelves (25 plants), and 2×2 ft corners.
              </p>

              {/* 4 Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                <div className="bg-[#122C1E] border border-[#234734] rounded-xl p-3">
                  <div className="text-[#4ADE80] font-bold text-xs sm:text-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Tested in 1BHKs</span>
                  </div>
                  <p className="text-xs text-[#A7BDB0] mt-1">Real apartment builds</p>
                </div>

                <div className="bg-[#122C1E] border border-[#234734] rounded-xl p-3">
                  <div className="text-[#4ADE80] font-bold text-xs sm:text-sm flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Indian Water Ready</span>
                  </div>
                  <p className="text-xs text-[#A7BDB0] mt-1">RO, tap &amp; borewell TDS</p>
                </div>

                <div className="bg-[#122C1E] border border-[#234734] rounded-xl p-3">
                  <div className="text-[#4ADE80] font-bold text-xs sm:text-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Honest Budgets</span>
                  </div>
                  <p className="text-xs text-[#A7BDB0] mt-1">Under ₹1,200–₹2,000</p>
                </div>

                <div className="bg-[#122C1E] border border-[#234734] rounded-xl p-3">
                  <div className="text-[#4ADE80] font-bold text-xs sm:text-sm flex items-center gap-1.5">
                    <Clock className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Fast Recovery</span>
                  </div>
                  <p className="text-xs text-[#A7BDB0] mt-1">1-on-1 setup guidance</p>
                </div>
              </div>

              {/* Primary CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a href={SITE_CONFIG.contact.phoneHref} className="btn-amber text-sm sm:text-base px-6 py-3.5">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Call {SITE_CONFIG.contact.phoneDisplay}</span>
                </a>
                <a
                  href={SITE_CONFIG.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm sm:text-base transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#4ADE80]" aria-hidden="true" />
                  <span>WhatsApp Your Setup Photo</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive System Triage & Space Finder */}
            <div className="lg:col-span-5">
              <div className="bg-[#122A1D] border border-[#28503B] rounded-2xl p-6 shadow-2xl space-y-5">
                <div className="border-b border-[#1E3B2B] pb-3.5 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4ADE80]">
                      Quick Diagnostic &amp; Build Finder
                    </span>
                    <h2 className="font-display text-lg sm:text-xl font-bold text-white mt-0.5">
                      What Do You Need Help With?
                    </h2>
                  </div>
                </div>

                {/* Mode Tabs */}
                <div className="grid grid-cols-2 gap-2 bg-[#0A1810] p-1 rounded-xl border border-[#1E3B2B]">
                  <button
                    type="button"
                    onClick={() => {
                      setTriageMode('rescue');
                      setSelectedSymptom('kratky');
                    }}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors ${
                      triageMode === 'rescue'
                        ? 'bg-[#22C55E] text-[#052E16]'
                        : 'text-[#A7BDB0] hover:text-white'
                    }`}
                  >
                    Fix a Failing Setup
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTriageMode('build');
                      setSelectedSymptom('under1200');
                    }}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors ${
                      triageMode === 'build'
                        ? 'bg-[#22C55E] text-[#052E16]'
                        : 'text-[#A7BDB0] hover:text-white'
                    }`}
                  >
                    Plan a New Build
                  </button>
                </div>

                {/* Dynamic Select Controls */}
                <div className="space-y-3">
                  <div>
                    <label
                      htmlFor="triage-symptom"
                      className="block text-xs font-medium text-[#D5E2D7] mb-1"
                    >
                      {triageMode === 'rescue'
                        ? 'Select the issue you are seeing:'
                        : 'Select your target build & budget:'}
                    </label>
                    <select
                      id="triage-symptom"
                      value={selectedSymptom}
                      onChange={(e) => setSelectedSymptom(e.target.value)}
                      className="w-full rounded-xl bg-[#0A1810] border border-[#28503B] text-white text-xs sm:text-sm px-3.5 py-2.5 focus:outline-none"
                    >
                      {triageMode === 'rescue' ? (
                        <>
                          <option value="kratky">Yellowing leaves in Kratky jars (no air pump)</option>
                          <option value="rootrot">Brown slimy roots &amp; warm water (32–34°C)</option>
                          <option value="algae">Green algae growth inside clear jars</option>
                          <option value="tds">Slow growth / Hard tap water TDS &amp; pH drift</option>
                        </>
                      ) : (
                        <>
                          <option value="under1200">Fresh Kitchen Counter Herbs (Under ₹1,200)</option>
                          <option value="under2000">12-Plant Active DWC Starter (Under ₹2,000)</option>
                          <option value="shelf25">25-Plant High-Density Single Shelf</option>
                          <option value="tower">Vertical Window / Room Corner UPVC Tower</option>
                        </>
                      )}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="triage-space"
                      className="block text-xs font-medium text-[#D5E2D7] mb-1"
                    >
                      Where does your setup live?
                    </label>
                    <select
                      id="triage-space"
                      value={selectedSpace}
                      onChange={(e) => setSelectedSpace(e.target.value)}
                      className="w-full rounded-xl bg-[#0A1810] border border-[#28503B] text-white text-xs sm:text-sm px-3.5 py-2.5 focus:outline-none"
                    >
                      <option value="counter">Kitchen Countertop</option>
                      <option value="corner">2×2 ft Bedroom or Living Room Corner</option>
                      <option value="shelf">Single Utility Shelf</option>
                      <option value="window">Window Grill or Balcony Ledge</option>
                    </select>
                  </div>

                  {/* Output Recommendation Box */}
                  <div className="rounded-xl bg-[#0A1810] border border-[#28503B] p-4 space-y-1.5">
                    <div className="text-xs font-bold text-[#F59E0B]">
                      Recommended Action: {currentRecommendation.title}
                    </div>
                    <p className="text-xs text-[#D5E2D7] leading-relaxed">
                      {currentRecommendation.detail}
                    </p>
                  </div>

                  <Link to="/contact" className="w-full btn-amber py-3 text-sm">
                    <span>Request Your Custom Parts &amp; Rescue Plan</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RECOGNIZING THE WARNING SIGNS (4 FOCUS CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#166534] dark:text-[#22C55E]">
            Recognizing the Warning Signs
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold">
            Spot Indoor Hydroponic Problems Before Your Crop Fails
          </h2>
          <p className="text-sm sm:text-base text-[#4B5E53] dark:text-[#9CA3AF] leading-relaxed">
            In warm Indian homes, passive jars and uncalibrated tap water fail quietly—a plant can look fine on Day 9 and wilt by Day 12. Watch for these four early signals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WARNING_SIGNS.map((sign) => (
            <div
              key={sign.id}
              className="surface-card p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#E8F0E9] dark:bg-[#192E23] text-[#166534] dark:text-[#22C55E]">
                  {sign.focusLabel}
                </span>
                <h3 className="font-display text-lg font-bold">{sign.title}</h3>
                <p className="text-xs sm:text-sm text-[#4B5E53] dark:text-[#9CA3AF] leading-relaxed">
                  {sign.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-[#D5E2D7] dark:border-[#233D2F] flex items-center justify-between gap-2 text-xs font-semibold">
                <span className="text-[#166534] dark:text-[#22C55E]">{sign.solutionText}</span>
                <button
                  type="button"
                  onClick={() => {
                    const found = SERVICES_DATA.find((s) => s.id === sign.linkedServiceId);
                    if (found) setModalService(found);
                  }}
                  className="text-[#D97706] dark:text-[#F59E0B] hover:underline shrink-0"
                >
                  View Fix →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CATEGORIZED SERVICES SECTION (SIMPLE 2-TRACK FILTER) */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#166534] dark:text-[#22C55E]">
              Approachable &amp; Practical Help
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold">
              Explore Our Hydroponic Rescue &amp; Custom Build Services
            </h2>
            <p className="text-sm sm:text-base text-[#4B5E53] dark:text-[#9CA3AF]">
              Filter by category below to either fix an existing setup or plan a new small-space apartment build under ₹1,200–₹2,000.
            </p>
          </div>

          {/* Clean Category Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveServiceCat(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                  activeServiceCat === cat.id
                    ? 'bg-[#166534] text-white dark:bg-[#22C55E] dark:text-[#052E16]'
                    : 'surface-subtle text-[#111C16] dark:text-[#ECFDF5] hover:opacity-85'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="surface-card p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#E8F0E9] dark:bg-[#192E23] text-[#166534] dark:text-[#22C55E]">
                    {service.badge}
                  </span>
                  <span className="text-xs font-bold text-[#D97706] dark:text-[#F59E0B]">
                    {service.priceTag}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold leading-snug">{service.title}</h3>
                <p className="text-xs font-medium text-[#166534] dark:text-[#22C55E]">
                  {service.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#4B5E53] dark:text-[#9CA3AF] leading-relaxed">
                  {service.summary}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#D5E2D7] dark:border-[#233D2F] space-y-2.5">
                <div className="text-[11px] text-[#4B5E53] dark:text-[#9CA3AF] font-medium">
                  ✓ Includes 12 specific setup &amp; care checkpoints
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={SITE_CONFIG.contact.phoneHref}
                    className="px-3.5 py-2 rounded-xl surface-subtle text-xs font-bold hover:opacity-85"
                  >
                    Call
                  </a>
                  <button
                    type="button"
                    onClick={() => setModalService(service)}
                    className="flex-1 btn-primary py-2 text-xs"
                  >
                    <span>View 12 Checkpoints</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. 7-STEP PROCESS SECTION */}
      <section className="bg-[#0D2116] text-white py-16 lg:py-20 border-y border-[#1E3B2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4ADE80]">
                Systematic &amp; Renter-Safe
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold">
                How Our 7-Step Rescue &amp; Small-Space Build Process Works
              </h2>
              <p className="text-sm sm:text-base text-[#A7BDB0]">
                From checking your baseline tap-water TDS to harvesting your first batch of herbs, every step is designed to prevent leaks, algae, and wasted money.
              </p>
            </div>
            <a href={SITE_CONFIG.contact.phoneHref} className="btn-amber self-start lg:self-auto">
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Call {SITE_CONFIG.contact.phoneDisplay}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-[#122C1E] border border-[#234734] rounded-2xl p-5 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="w-8 h-8 rounded-xl bg-[#22C55E] text-[#052E16] font-display font-bold text-sm inline-flex items-center justify-center">
                    {item.step}
                  </span>
                  <h3 className="font-display font-bold text-base text-white">{item.title}</h3>
                  <p className="text-xs text-[#D5E2D7] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDIAN CITIES SERVICE AREAS & WATER TDS DIRECTORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#166534] dark:text-[#22C55E]">
              Local Water &amp; Climate Profiles
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold">
              Supporting Apartment Growers Across India
            </h2>
            <p className="text-sm sm:text-base text-[#4B5E53] dark:text-[#9CA3AF]">
              Select your city below to view typical tap/borewell water TDS ranges, summer temperature notes, and our most requested setup for that region.
            </p>
          </div>

          <div className="w-full lg:w-72">
            <label htmlFor="city-search" className="sr-only">
              Search city
            </label>
            <input
              id="city-search"
              type="text"
              value={cityQuery}
              onChange={(e) => setCityQuery(e.target.value)}
              placeholder="Search city (e.g. Bengaluru, Patna, Pune)..."
              className="w-full rounded-xl px-4 py-2.5 text-sm surface-card focus:outline-none"
            />
          </div>
        </div>

        {/* Selected City Inspector Card */}
        {selectedCity && (
          <div className="surface-subtle p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#166534] dark:text-[#22C55E]">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>Selected Region: {selectedCity.city}</span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold">
                {selectedCity.popularSetup}
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5E53] dark:text-[#9CA3AF]">
                <strong>Typical Water Profile:</strong> {selectedCity.waterProfile} •{' '}
                <strong>Climate Note:</strong> {selectedCity.climateNote}
              </p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0">
              <span>Book Consultation for {selectedCity.city.split(',')[0]}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        )}

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
          {displayedCities.map((item) => {
            const isSelected = selectedCity?.city === item.city;
            return (
              <button
                key={item.city}
                type="button"
                onClick={() => setSelectedCity(item)}
                className={`text-left p-4 rounded-xl transition-all flex items-center justify-between gap-2 ${
                  isSelected
                    ? 'bg-[#166534] text-white dark:bg-[#22C55E] dark:text-[#052E16] font-semibold shadow-sm'
                    : 'surface-card hover:opacity-90'
                }`}
              >
                <div>
                  <div className="text-xs sm:text-sm font-bold">{item.city}</div>
                  <div
                    className={`text-[11px] mt-0.5 ${
                      isSelected ? 'opacity-90' : 'text-[#4B5E53] dark:text-[#9CA3AF]'
                    }`}
                  >
                    {item.waterProfile.split('(')[0]}
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              </button>
            );
          })}
        </div>

        {!cityQuery.trim() && (
          <div>
            <button
              type="button"
              onClick={() => setShowAllCities((prev) => !prev)}
              className="px-5 py-2.5 rounded-xl surface-subtle text-xs sm:text-sm font-semibold hover:opacity-85"
            >
              {showAllCities ? 'Show Fewer Cities' : `Show All ${CITIES_DATA.length} Cities`}
            </button>
          </div>
        )}
      </section>

      {/* 6. FEATURED PERSONAL BUILD STORIES (FROM BLOG) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#166534] dark:text-[#22C55E]">
              Real Apartment Experiments
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold">
              Recent Build Stories from My Home Setups
            </h2>
          </div>
          <Link to="/blog" className="btn-primary self-start sm:self-auto">
            <span>Read All {BLOG_POSTS.length} Build Posts</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <article
              key={post.id}
              className="surface-card overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div>
                <div className="h-44 bg-[#122C1E] flex items-center justify-center p-4 relative overflow-hidden">
                  <img
                    src={post.thumbnail}
                    alt={post.thumbnailAlt}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#0D2116]/90 text-[#4ADE80]">
                    {post.categories[0]}
                  </span>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="text-xs text-[#4B5E53] dark:text-[#9CA3AF]">
                    {post.date} • {post.readTime}
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug">
                    <Link to={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5E53] dark:text-[#9CA3AF] line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-[#D5E2D7] dark:border-[#233D2F]">
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#166534] dark:text-[#22C55E] hover:underline"
                >
                  <span>Read Full Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 7. COMMON SERVICE QUESTIONS (FAQ ACCORDION) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#166534] dark:text-[#22C55E]">
            Frequently Asked Questions
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold">
            Common Questions About Indoor Hydroponics in India
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((item) => {
            const isOpen = openFaqId === item.id;
            return (
              <div key={item.id} className="surface-card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-150 ${
                      isOpen ? 'rotate-180 text-[#166534] dark:text-[#22C55E]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-2 text-xs sm:text-sm text-[#4B5E53] dark:text-[#9CA3AF] leading-relaxed border-t border-[#D5E2D7] dark:border-[#233D2F]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SERVICE 12-CHECKPOINT DETAIL MODAL */}
      {modalService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-service-title"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
        >
          <div className="surface-card max-w-2xl w-full p-6 sm:p-8 space-y-5 my-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-[#D5E2D7] dark:border-[#233D2F] pb-4">
              <div>
                <span className="text-xs font-bold uppercase text-[#166534] dark:text-[#22C55E]">
                  {modalService.badge} • {modalService.priceTag}
                </span>
                <h3 id="modal-service-title" className="font-display text-xl sm:text-2xl font-bold mt-1">
                  {modalService.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalService(null)}
                aria-label="Close modal"
                className="p-2 rounded-lg surface-subtle"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm text-[#4B5E53] dark:text-[#9CA3AF] leading-relaxed">
              {modalService.summary}
            </p>

            <div className="space-y-2.5">
              <h4 className="font-display font-bold text-sm">
                12 Included Service &amp; Build Checkpoints:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {modalService.options.map((opt, idx) => (
                  <div
                    key={idx}
                    className="surface-subtle p-3 text-xs flex items-start gap-2 leading-relaxed"
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

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#D5E2D7] dark:border-[#233D2F]">
              <a href={SITE_CONFIG.contact.phoneHref} className="btn-amber">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Call {SITE_CONFIG.contact.phoneDisplay}</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setModalService(null)}
                className="btn-primary"
              >
                <span>Request This Service</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}