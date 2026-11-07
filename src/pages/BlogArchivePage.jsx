import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, ArrowRight, Tag } from 'lucide-react';
import { BLOG_CATEGORIES, BLOG_POSTS } from '../data/blogsData';
import SeoHead from '../components/SeoHead';

export default function BlogArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'all'
  );
  const [selectedTag, setSelectedTag] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const catParam = searchParams.get('category');
    if (catParam) {
      setSelectedCategory(catParam);
    } else {
      setSelectedCategory('all');
    }
  }, [searchParams]);

  const popularTags = [
    'all',
    'Kratky Method',
    'Under ₹1,200',
    'Under ₹2,000',
    '25 Plants',
    'Vertical Tower',
    'Window Farm',
    'Bedroom Corner',
  ];

  function handleSelectCategory(catId) {
    setSelectedCategory(catId);
    if (catId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: catId });
    }
  }

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'all' || post.categories.includes(selectedCategory);
    const matchesTag =
      selectedTag === 'all' ||
      post.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase());
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.tags.some((t) => t.toLowerCase().includes(q));

    return matchesCategory && matchesTag && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <SeoHead
        title="Personal Hydroponic Builds & Apartment Setup Blog"
        description="Read all 9 personal indoor hydroponic build stories from tehrov.in—including under-₹1,200 kitchen herb counters, 25-plant shelves, and why passive Kratky jars fail."
      />

      {/* Blog Archive Header */}
      <div className="space-y-3 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-[#166534] dark:text-[#22C55E]">
          Personal Build Stories • Indoor Hydroponics
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold">
          All Apartment Hydroponic Builds &amp; Experiments
        </h1>
        <p className="text-sm sm:text-base text-[#4B5E53] dark:text-[#9CA3AF] leading-relaxed">
          Honest breakdowns of what worked, what failed, and how much every setup actually cost in my apartment. Browse by category or search a specific topic below.
        </p>
      </div>

      {/* Category Cards with Category Descriptions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {BLOG_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const count =
            cat.id === 'all'
              ? BLOG_POSTS.length
              : BLOG_POSTS.filter((p) => p.categories.includes(cat.id)).length;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleSelectCategory(cat.id)}
              className={`text-left p-5 rounded-2xl transition-all flex flex-col justify-between ${
                isActive
                  ? 'bg-[#166534] text-white dark:bg-[#22C55E] dark:text-[#052E16] shadow-md'
                  : 'surface-card hover:opacity-95'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider opacity-85">
                    Category
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      isActive
                        ? 'bg-white/20 text-white dark:bg-[#052E16]/20 dark:text-[#052E16]'
                        : 'surface-subtle'
                    }`}
                  >
                    {count} Posts
                  </span>
                </div>
                <h2 className="font-display text-lg font-bold">{cat.name}</h2>
                <p
                  className={`text-xs leading-relaxed ${
                    isActive ? 'opacity-90' : 'text-[#4B5E53] dark:text-[#9CA3AF]'
                  }`}
                >
                  {cat.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Tag Pills & Search Input */}
      <div className="surface-card p-4 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5">
          {popularTags.map((tag) => {
            const active = selectedTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors inline-flex items-center gap-1 ${
                  active
                    ? 'bg-[#166534] text-white dark:bg-[#22C55E] dark:text-[#052E16]'
                    : 'surface-subtle hover:opacity-85'
                }`}
              >
                {tag !== 'all' && <Tag className="w-3 h-3" aria-hidden="true" />}
                <span>{tag === 'all' ? 'All Topics' : tag}</span>
              </button>
            );
          })}
        </div>

        <div className="relative w-full lg:w-72">
          <Search
            className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4B5E53] dark:text-[#9CA3AF]"
            aria-hidden="true"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            aria-label="Search blog articles"
            className="w-full rounded-xl pl-9 pr-3.5 py-2 text-xs sm:text-sm surface-subtle focus:outline-none"
          />
        </div>
      </div>

      {/* Blog Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="surface-card overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="block h-48 bg-[#122C1E] relative overflow-hidden"
                >
                  <img
                    src={post.thumbnail}
                    alt={post.thumbnailAlt}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {post.categories.map((c) => (
                      <span
                        key={c}
                        className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#0D2116]/90 text-[#4ADE80]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </Link>

                <div className="p-5 space-y-2.5">
                  <div className="text-xs text-[#4B5E53] dark:text-[#9CA3AF]">
                    {post.date} • {post.readTime}
                  </div>
                  <h2 className="font-display text-lg font-bold leading-snug">
                    <Link to={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-xs sm:text-sm text-[#4B5E53] dark:text-[#9CA3AF] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-[#D5E2D7] dark:border-[#233D2F] flex items-center justify-between gap-2">
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#166534] dark:text-[#22C55E] hover:underline"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                <span className="text-[11px] text-[#4B5E53] dark:text-[#9CA3AF]">
                  {post.comments?.length || 0} comments
                </span>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="surface-card p-10 text-center space-y-3">
          <p className="text-sm text-[#4B5E53] dark:text-[#9CA3AF]">
            No articles matched your current filter.
          </p>
          <button
            type="button"
            onClick={() => {
              handleSelectCategory('all');
              setSelectedTag('all');
              setSearchQuery('');
            }}
            className="btn-primary text-xs"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}