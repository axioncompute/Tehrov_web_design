import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Sun, Moon, Phone, ChevronDown, Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [legalOpen, setLegalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setLegalOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLegalOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeLogoSrc =
    theme === 'dark'
      ? SITE_CONFIG.logo?.darkSrc || SITE_CONFIG.logo?.src
      : SITE_CONFIG.logo?.lightSrc || SITE_CONFIG.logo?.src;

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? 'text-[#166534] dark:text-[#22C55E] bg-[#E8F0E9] dark:bg-[#192E23] font-semibold'
        : 'text-[#111C16] dark:text-[#ECFDF5] hover:text-[#166534] dark:hover:text-[#22C55E]'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0E1B14]/95 backdrop-blur-md border-b border-[#D5E2D7] dark:border-[#233D2F] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-18 py-2.5 flex items-center justify-between gap-4">
          {/* Official Transparent Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            {!logoError && activeLogoSrc ? (
              <img
                src={activeLogoSrc}
                alt={SITE_CONFIG.logo.alt}
                onError={(e) => {
                  if (e.currentTarget.src !== window.location.origin + SITE_CONFIG.logo.src) {
                    e.currentTarget.src = SITE_CONFIG.logo.src;
                  } else {
                    setLogoError(true);
                  }
                }}
                className="h-11 sm:h-12 w-auto object-contain"
              />
            ) : (
              <div className="w-10 h-10 rounded-xl bg-[#166534] dark:bg-[#22C55E] text-white dark:text-[#052E16] font-display font-bold text-base flex items-center justify-center shadow-sm">
                HB
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {SITE_CONFIG.navigation.map((item) => {
              if (item.dropdown) {
                const isLegalActive = location.pathname.startsWith('/legal');
                return (
                  <div key={item.label} className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setLegalOpen((prev) => !prev)}
                      aria-expanded={legalOpen}
                      aria-haspopup="true"
                      className={`px-3 py-2 rounded-lg text-sm font-medium inline-flex items-center gap-1.5 transition-colors ${
                        isLegalActive
                          ? 'text-[#166534] dark:text-[#22C55E] bg-[#E8F0E9] dark:bg-[#192E23] font-semibold'
                          : 'text-[#111C16] dark:text-[#ECFDF5] hover:text-[#166534] dark:hover:text-[#22C55E]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-150 ${
                          legalOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {legalOpen && (
                      <div
                        role="menu"
                        className="absolute left-0 mt-2 w-52 rounded-xl bg-white dark:bg-[#12221A] border border-[#D5E2D7] dark:border-[#233D2F] shadow-xl py-1.5 z-50"
                      >
                        {item.dropdown.map((sub) => (
                          <NavLink
                            key={sub.path}
                            to={sub.path}
                            role="menuitem"
                            className={({ isActive }) =>
                              `block px-4 py-2.5 text-xs sm:text-sm transition-colors ${
                                isActive
                                  ? 'bg-[#E8F0E9] dark:bg-[#192E23] text-[#166534] dark:text-[#22C55E] font-semibold'
                                  : 'text-[#111C16] dark:text-[#ECFDF5] hover:bg-[#F4F7F4] dark:hover:bg-[#192E23]'
                              }`
                            }
                          >
                            {sub.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink key={item.path} to={item.path} className={navLinkClass}>
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Controls: Minimalist Sun/Moon Switch + Phone Call CTA */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              className="relative w-14 h-8 rounded-full bg-[#E8F0E9] dark:bg-[#192E23] border border-[#D5E2D7] dark:border-[#233D2F] p-1 flex items-center transition-colors duration-200 focus:outline-none"
            >
              <span
                className={`w-6 h-6 rounded-full bg-white dark:bg-[#12221A] shadow-sm flex items-center justify-center transform transition-transform duration-200 ${
                  theme === 'dark' ? 'translate-x-6 text-[#F59E0B]' : 'translate-x-0 text-[#D97706]'
                }`}
              >
                {theme === 'dark' ? (
                  <Moon className="w-3.5 h-3.5" aria-hidden="true" />
                ) : (
                  <Sun className="w-3.5 h-3.5" aria-hidden="true" />
                )}
              </span>
            </button>

            <a
              href={SITE_CONFIG.contact.phoneHref}
              className="hidden sm:inline-flex btn-amber text-xs sm:text-sm"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>{SITE_CONFIG.contact.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle Menu"
              aria-expanded={mobileOpen}
              className="lg:hidden p-2 rounded-xl bg-[#E8F0E9] dark:bg-[#192E23] text-[#111C16] dark:text-[#ECFDF5]"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <nav
            aria-label="Mobile Navigation"
            className="lg:hidden py-4 border-t border-[#D5E2D7] dark:border-[#233D2F] space-y-1.5"
          >
            {SITE_CONFIG.navigation.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.label} className="space-y-1 pt-1">
                    <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#4B5E53] dark:text-[#9CA3AF]">
                      {item.label}
                    </div>
                    <div className="pl-3 space-y-1">
                      {item.dropdown.map((sub) => (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          className={({ isActive }) =>
                            `block px-3 py-2 rounded-lg text-sm font-medium ${
                              isActive
                                ? 'bg-[#E8F0E9] dark:bg-[#192E23] text-[#166534] dark:text-[#22C55E] font-semibold'
                                : 'text-[#111C16] dark:text-[#ECFDF5]'
                            }`
                          }
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-lg text-sm font-medium ${
                      isActive
                        ? 'bg-[#E8F0E9] dark:bg-[#192E23] text-[#166534] dark:text-[#22C55E] font-semibold'
                        : 'text-[#111C16] dark:text-[#ECFDF5]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}

            <div className="pt-3">
              <a href={SITE_CONFIG.contact.phoneHref} className="w-full btn-amber">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Call {SITE_CONFIG.contact.phoneDisplay}</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
