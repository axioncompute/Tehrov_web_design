import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Phone, MessageCircle, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogsData';
import { SITE_CONFIG } from '../config/siteConfig';
import CommentSection from '../components/CommentSection';
import SeoHead from '../components/SeoHead';

export default function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="font-display text-2xl font-bold">Article Not Found</h1>
        <p className="text-sm text-[#4B5E53] dark:text-[#9CA3AF]">
          We couldn’t find that build story. Browse all 9 articles in our archive below.
        </p>
        <Link to="/blog" className="btn-primary">
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to All Build Stories</span>
        </Link>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  function handleContentClick(e) {
    const anchor = e.target.closest('a');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (href && href.startsWith('/blog/')) {
      e.preventDefault();
      navigate(href);
    }
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    description: post.excerpt,
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <SeoHead
        title={post.title}
        description={post.excerpt}
        schemaData={articleSchema}
      />

      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="text-xs text-[#4B5E53] dark:text-[#9CA3AF] flex flex-wrap items-center gap-2"
      >
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span>/</span>
        <Link to="/blog" className="hover:underline">
          Blog
        </Link>
        <span>/</span>
        <Link
          to={`/blog?category=${encodeURIComponent(post.categories[0])}`}
          className="text-[#166534] dark:text-[#22C55E] font-semibold hover:underline"
        >
          {post.categories[0]}
        </Link>
      </nav>

      {/* Main Article Card */}
      <article className="surface-card p-6 sm:p-10 space-y-6">
        <header className="space-y-4 border-b border-[#D5E2D7] dark:border-[#233D2F] pb-6">
          <div className="flex flex-wrap gap-2">
            {post.categories.map((cat) => (
              <Link
                key={cat}
                to={`/blog?category=${encodeURIComponent(cat)}`}
                className="px-3 py-1 rounded-full text-xs font-bold bg-[#E8F0E9] dark:bg-[#192E23] text-[#166534] dark:text-[#22C55E]"
              >
                {cat}
              </Link>
            ))}
          </div>

          <h1 className="font-display text-2xl sm:text-4xl font-extrabold leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#4B5E53] dark:text-[#9CA3AF]">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{post.date}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{post.readTime}</span>
            </span>
            <span>By {post.author}</span>
          </div>
        </header>

        {/* Accessible Featured Thumbnail with Descriptive Alt Text */}
        <figure className="rounded-2xl overflow-hidden bg-[#122C1E] border border-[#D5E2D7] dark:border-[#233D2F]">
          <img
            src={post.thumbnail}
            alt={post.thumbnailAlt}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
            className="w-full max-h-96 object-cover"
          />
          <figcaption className="px-4 py-2.5 text-xs text-[#A7BDB0] bg-[#0D2116]">
            {post.thumbnailAlt}
          </figcaption>
        </figure>

        {/* Full WordPress Article Content */}
        {post.htmlContent ? (
          <div
            onClick={handleContentClick}
            className="wp-article-content"
            dangerouslySetInnerHTML={{ __html: post.htmlContent }}
          />
        ) : (
          <div className="space-y-4 text-sm sm:text-base leading-relaxed">
            {(post.content || []).map((block, index) => (
              <p key={index} className="whitespace-pre-line">
                {block}
              </p>
            ))}
          </div>
        )}

        {/* Article Tags */}
        <div className="pt-6 border-t border-[#D5E2D7] dark:border-[#233D2F] flex flex-wrap items-center gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-lg surface-subtle text-xs font-medium"
            >
              <Tag className="w-3 h-3 text-[#166534] dark:text-[#22C55E]" aria-hidden="true" />
              <span>{tag}</span>
            </span>
          ))}
        </div>

        {/* Help / Consultation Callout Box */}
        <div className="rounded-2xl bg-[#0D2116] text-white p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4ADE80]">
              Want to Build or Fix This Setup in Your Apartment?
            </span>
            <h3 className="font-display text-lg font-bold">
              Talk Directly With Us for Parts, Water TDS &amp; Layout Help
            </h3>
            <p className="text-xs text-[#A7BDB0]">
              Call or message on WhatsApp with your corner dimensions or plant photos.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 shrink-0">
            <a href={SITE_CONFIG.contact.phoneHref} className="btn-amber text-xs">
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{SITE_CONFIG.contact.phoneDisplay}</span>
            </a>
            <a
              href={SITE_CONFIG.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </article>

      {/* Reader Comments Section */}
      <CommentSection postId={post.id} initialComments={post.comments || []} />

      {/* Related Build Articles */}
      <section className="space-y-4 pt-4">
        <h2 className="font-display text-xl font-bold">More Personal Build Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {relatedPosts.map((rel) => (
            <Link
              key={rel.id}
              to={`/blog/${rel.slug}`}
              className="surface-card p-4 space-y-2 hover:-translate-y-0.5 transition-transform block"
            >
              <span className="text-[11px] font-bold text-[#166534] dark:text-[#22C55E]">
                {rel.categories[0]}
              </span>
              <h3 className="font-display font-bold text-sm leading-snug">{rel.title}</h3>
              <span className="text-xs text-[#4B5E53] dark:text-[#9CA3AF] block">
                {rel.date}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
