import React, { useEffect, useState } from 'react';
import { MessageSquare, Send, MapPin } from 'lucide-react';
import { fetchCommentsByPost, submitComment } from '../api/client';

export default function CommentSection({ postId, initialComments = [] }) {
  const [comments, setComments] = useState(initialComments);
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    let mounted = true;
    fetchCommentsByPost(postId, initialComments).then((loaded) => {
      if (mounted) setComments(loaded);
    });
    return () => {
      mounted = false;
    };
  }, [postId, initialComments]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;

    setSubmitting(true);
    setFeedback('');

    const saved = await submitComment(
      { postId, author, location, email, text },
      comments
    );

    setComments((prev) => [...prev, saved]);
    setText('');
    setSubmitting(false);
    setFeedback('Thanks for sharing! Your comment has been posted below.');
  }

  return (
    <section
      aria-labelledby="comments-heading"
      className="surface-card p-6 sm:p-8 space-y-6 mt-10"
    >
      <div className="flex items-center justify-between gap-4 border-b border-[#D5E2D7] dark:border-[#233D2F] pb-4">
        <div className="flex items-center gap-2.5">
          <MessageSquare className="w-5 h-5 text-[#166534] dark:text-[#22C55E]" aria-hidden="true" />
          <h2 id="comments-heading" className="font-display text-xl font-bold">
            Reader Questions &amp; Build Notes ({comments.length})
          </h2>
        </div>
      </div>

      {/* Existing Comments List */}
      {comments.length > 0 ? (
        <div className="space-y-4">
          {comments.map((item) => {
            const isAuthor = item.author.toLowerCase().includes('tehrov');
            return (
              <div
                key={item.id}
                className={`surface-subtle p-4 sm:p-5 space-y-2 ${
                  isAuthor ? 'ml-4 sm:ml-8 border-l-4 border-l-[#166534] dark:border-l-[#22C55E]' : ''
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#111C16] dark:text-white">
                      {item.author}
                    </span>
                    {item.location && (
                      <span className="inline-flex items-center gap-1 text-[#4B5E53] dark:text-[#9CA3AF]">
                        <MapPin className="w-3 h-3" aria-hidden="true" />
                        <span>{item.location}</span>
                      </span>
                    )}
                  </div>
                  <span className="text-[#4B5E53] dark:text-[#9CA3AF]">{item.date}</span>
                </div>
                <p className="text-sm leading-relaxed text-[#111C16] dark:text-[#ECFDF5]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-sm text-[#4B5E53] dark:text-[#9CA3AF]">
          Have a question about parts, tap water TDS, or plant spacing for this setup? Ask below.
        </p>
      )}

      {/* Comment Submission Form */}
      <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-[#D5E2D7] dark:border-[#233D2F]">
        <h3 className="font-display font-bold text-base">
          Leave a Comment or Setup Question
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label htmlFor="comment-author" className="block text-xs font-semibold mb-1">
              Your Name *
            </label>
            <input
              id="comment-author"
              type="text"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="e.g. Siddharth"
              className="w-full rounded-xl px-3.5 py-2.5 text-sm surface-subtle focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="comment-location" className="block text-xs font-semibold mb-1">
              City (Optional)
            </label>
            <input
              id="comment-location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Pune / Bengaluru"
              className="w-full rounded-xl px-3.5 py-2.5 text-sm surface-subtle focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="comment-email" className="block text-xs font-semibold mb-1">
              Email (Never published) *
            </label>
            <input
              id="comment-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl px-3.5 py-2.5 text-sm surface-subtle focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="comment-text" className="block text-xs font-semibold mb-1">
            Your Question or Build Experience *
          </label>
          <textarea
            id="comment-text"
            rows={3}
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share your water TDS, room size, or what you're growing..."
            className="w-full rounded-xl px-3.5 py-2.5 text-sm surface-subtle focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          {feedback ? (
            <span className="text-xs sm:text-sm font-medium text-[#166534] dark:text-[#22C55E]">
              {feedback}
            </span>
          ) : (
            <span className="text-xs text-[#4B5E53] dark:text-[#9CA3AF]">
              Your email address stays private.
            </span>
          )}

          <button type="submit" disabled={submitting} className="btn-primary">
            <Send className="w-4 h-4" aria-hidden="true" />
            <span>{submitting ? 'Posting...' : 'Post Comment'}</span>
          </button>
        </div>
      </form>
    </section>
  );
}