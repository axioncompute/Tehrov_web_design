import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Clock, Send, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { submitConsultationInquiry } from '../api/client';
import SeoHead from '../components/SeoHead';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [serviceType, setServiceType] = useState('System Rescue (Yellow Leaves / Root Rot / Kratky)');
  const [waterTds, setWaterTds] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    await submitConsultationInquiry({
      name,
      phone,
      email,
      city,
      serviceType,
      waterTds,
      notes,
    });

    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SeoHead
        title="Contact Us — Book a Hydroponic Rescue or Small-Space Build Consultation"
        description="Call or WhatsApp +91 80023 85354 or email info@tehrov.in for indoor hydroponic troubleshooting, tap-water TDS calibration, and under-₹2,000 apartment builds."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Info & Pre-Call Checklist */}
        <div className="lg:col-span-5 space-y-6">
          <div className="surface-card p-6 sm:p-8 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#166534] dark:text-[#22C55E]">
              Direct Grower Support
            </span>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold">
              Get Help With Your Indoor Setup
            </h1>
            <p className="text-xs sm:text-sm text-[#4B5E53] dark:text-[#9CA3AF] leading-relaxed">
              Whether your Kratky jars are yellowing in summer heat or you want a custom parts list for a kitchen counter, shelf, or 2×2 ft corner, reach out directly below.
            </p>

            <div className="space-y-3.5 pt-2">
              <a
                href={SITE_CONFIG.contact.phoneHref}
                className="surface-subtle p-4 flex items-center gap-3.5 hover:opacity-90"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D97706] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-[#4B5E53] dark:text-[#9CA3AF] font-medium">
                    Call Directly
                  </div>
                  <div className="font-display font-bold text-base">
                    {SITE_CONFIG.contact.phoneDisplay}
                  </div>
                </div>
              </a>

              <a
                href={SITE_CONFIG.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-subtle p-4 flex items-center gap-3.5 hover:opacity-90"
              >
                <div className="w-10 h-10 rounded-xl bg-[#166534] text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-[#4B5E53] dark:text-[#9CA3AF] font-medium">
                    WhatsApp (Send Plant / Corner Photos)
                  </div>
                  <div className="font-display font-bold text-base">
                    {SITE_CONFIG.contact.phoneDisplay}
                  </div>
                </div>
              </a>

              <a
                href={SITE_CONFIG.contact.emailHref}
                className="surface-subtle p-4 flex items-center gap-3.5 hover:opacity-90"
              >
                <div className="w-10 h-10 rounded-xl bg-[#166534] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-[#4B5E53] dark:text-[#9CA3AF] font-medium">
                    Email Support
                  </div>
                  <div className="font-display font-bold text-base">
                    {SITE_CONFIG.contact.email}
                  </div>
                </div>
              </a>

              <div className="surface-subtle p-4 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#166534]/15 text-[#166534] dark:text-[#22C55E] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-[#4B5E53] dark:text-[#9CA3AF] font-medium">
                    Consultation Hours
                  </div>
                  <div className="font-semibold text-sm">{SITE_CONFIG.contact.hours}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Pre-Call Checklist */}
          <div className="surface-card p-6 space-y-3">
            <h2 className="font-display font-bold text-base">
              Helpful Details to Keep Ready (If Available)
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-[#4B5E53] dark:text-[#9CA3AF]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#166534] dark:text-[#22C55E] shrink-0 mt-0.5" />
                <span>Your available space dimensions (e.g., 18-inch counter or 2×2 ft corner).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#166534] dark:text-[#22C55E] shrink-0 mt-0.5" />
                <span>Whether you use municipal tap, borewell, or kitchen RO water.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#166534] dark:text-[#22C55E] shrink-0 mt-0.5" />
                <span>A clear photo of your leaves and roots if troubleshooting an existing jar or tub.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Consultation Request Form */}
        <div className="lg:col-span-7">
          <div className="surface-card p-6 sm:p-8 space-y-6">
            <div className="space-y-1 border-b border-[#D5E2D7] dark:border-[#233D2F] pb-4">
              <h2 className="font-display text-xl sm:text-2xl font-bold">
                Send a System Rescue or Custom Build Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-[#4B5E53] dark:text-[#9CA3AF]">
                Fill out your details below and we’ll get back to you with a tailored action plan.
              </p>
            </div>

            {submitted ? (
              <div className="surface-subtle p-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#166534] dark:text-[#22C55E] mx-auto" />
                <h3 className="font-display text-lg font-bold">
                  Thanks, {name}! Your Inquiry Has Been Received.
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5E53] dark:text-[#9CA3AF] max-w-md mx-auto">
                  We have recorded your setup details and will reach out shortly. For urgent plant recovery, you can also message us directly on WhatsApp at{' '}
                  <strong>{SITE_CONFIG.contact.phoneDisplay}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-primary text-xs"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="inq-name" className="block text-xs font-semibold mb-1">
                      Full Name *
                    </label>
                    <input
                      id="inq-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full rounded-xl px-3.5 py-2.5 text-sm surface-subtle focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="inq-phone" className="block text-xs font-semibold mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="inq-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl px-3.5 py-2.5 text-sm surface-subtle focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="inq-email" className="block text-xs font-semibold mb-1">
                      Email Address *
                    </label>
                    <input
                      id="inq-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl px-3.5 py-2.5 text-sm surface-subtle focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="inq-city" className="block text-xs font-semibold mb-1">
                      City / State *
                    </label>
                    <input
                      id="inq-city"
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Bengaluru, Pune, Patna, Delhi"
                      className="w-full rounded-xl px-3.5 py-2.5 text-sm surface-subtle focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="inq-service" className="block text-xs font-semibold mb-1">
                      What Do You Need Help With?
                    </label>
                    <select
                      id="inq-service"
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full rounded-xl px-3.5 py-2.5 text-sm surface-subtle focus:outline-none"
                    >
                      <option>System Rescue (Yellow Leaves / Root Rot / Kratky)</option>
                      <option>Kitchen Counter Herb Setup (Under ₹1,200)</option>
                      <option>12-Plant Starter DWC System (Under ₹2,000)</option>
                      <option>25-Plant Single-Shelf System</option>
                      <option>2×2 ft Bedroom / Room Corner Mini-Farm</option>
                      <option>Window Grill or Vertical UPVC Tower</option>
                      <option>Indian Tap / Borewell Water TDS Calibration</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="inq-tds" className="block text-xs font-semibold mb-1">
                      Water Source / Approximate TDS (Optional)
                    </label>
                    <input
                      id="inq-tds"
                      type="text"
                      value={waterTds}
                      onChange={(e) => setWaterTds(e.target.value)}
                      placeholder="e.g. Kitchen RO + Borewell (~450 ppm)"
                      className="w-full rounded-xl px-3.5 py-2.5 text-sm surface-subtle focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inq-notes" className="block text-xs font-semibold mb-1">
                    Tell Us About Your Space or Plant Symptoms *
                  </label>
                  <textarea
                    id="inq-notes"
                    rows={4}
                    required
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Share what crops you want to grow, your corner/shelf measurements, or any issues you're facing..."
                    className="w-full rounded-xl px-3.5 py-2.5 text-sm surface-subtle focus:outline-none"
                  />
                </div>

                <button type="submit" disabled={submitting} className="w-full btn-primary py-3">
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>{submitting ? 'Sending Request...' : 'Send Consultation Request'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}