import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, Wrench } from 'lucide-react';
import SeoHead from '../components/SeoHead';

export default function NotFoundPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
      <SeoHead
        title="Page Not Found (404)"
        description="The page you are looking for could not be found on Hydro Build (tehrov.in)."
      />

      <div className="surface-card p-8 sm:p-12 space-y-5">
        <span className="inline-block px-3 py-1 rounded-full surface-subtle text-xs font-bold text-[#166534] dark:text-[#22C55E]">
          404 Error
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold">
          We Couldn’t Find That Page
        </h1>
        <p className="text-sm text-[#4B5E53] dark:text-[#9CA3AF] leading-relaxed">
          The link may have moved or the URL might have a typo. Use one of the links below to jump back to our indoor hydroponic guides and services.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link to="/" className="btn-primary">
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
          <Link to="/services" className="px-4 py-2.5 rounded-xl surface-subtle text-xs sm:text-sm font-semibold">
            <Wrench className="w-4 h-4 inline mr-1.5" aria-hidden="true" />
            <span>Browse Services</span>
          </Link>
          <Link to="/blog" className="px-4 py-2.5 rounded-xl surface-subtle text-xs sm:text-sm font-semibold">
            <BookOpen className="w-4 h-4 inline mr-1.5" aria-hidden="true" />
            <span>Read Build Blog</span>
          </Link>
        </div>
      </div>
    </div>
  );
}