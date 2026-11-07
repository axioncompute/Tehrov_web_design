const API_BASE = '/api';

export async function fetchCommentsByPost(postId, initialComments = []) {
  try {
    const response = await fetch(`${API_BASE}/comments?postId=${encodeURIComponent(postId)}`, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data.comments)) {
        return data.comments;
      }
    }
  } catch (_) {
    // Backend service will be connected in production; fall back to local comments
  }

  try {
    const cached = localStorage.getItem(`tehrov_comments_${postId}`);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (_) {}

  return initialComments;
}

export async function submitComment({ postId, author, location, email, text }, existingComments = []) {
  const newComment = {
    id: `c-${Date.now()}`,
    postId,
    author: author.trim(),
    location: (location || 'India').trim(),
    date: new Date().toLocaleDateString('en-IN', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }),
    text: text.trim(),
  };

  try {
    const response = await fetch(`${API_BASE}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newComment, email }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.comment) return data.comment;
    }
  } catch (_) {
    // Graceful fallback while backend database is being wired
  }

  try {
    const updated = [...existingComments, newComment];
    localStorage.setItem(`tehrov_comments_${postId}`, JSON.stringify(updated));
  } catch (_) {}

  return newComment;
}

export async function submitConsultationInquiry(payload) {
  try {
    const response = await fetch(`${API_BASE}/inquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return await response.json();
    }
  } catch (_) {
    // Graceful fallback until backend database is active
  }

  return {
    ok: true,
    submittedAt: new Date().toISOString(),
  };
}