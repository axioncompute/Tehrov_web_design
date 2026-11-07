// In-memory store used until database layer (PostgreSQL / MongoDB) is connected
const commentsStore = new Map();

function sanitizeText(value = '', maxLength = 1200) {
  return String(value).trim().slice(0, maxLength);
}

export async function getCommentsByPost(req, res, next) {
  try {
    const postId = sanitizeText(req.query.postId, 120);
    if (!postId) {
      return res.status(400).json({
        ok: false,
        error: 'postId query parameter is required',
      });
    }

    // TODO (DB Integration): Replace with SELECT * FROM comments WHERE post_id = $1 AND approved = true
    const records = commentsStore.get(postId) || null;

    return res.status(200).json({
      ok: true,
      postId,
      comments: records,
    });
  } catch (err) {
    return next(err);
  }
}

export async function createComment(req, res, next) {
  try {
    const postId = sanitizeText(req.body.postId, 120);
    const author = sanitizeText(req.body.author, 80);
    const location = sanitizeText(req.body.location || 'India', 80);
    const email = sanitizeText(req.body.email, 140);
    const text = sanitizeText(req.body.text, 1500);

    if (!postId || !author || !email || !text) {
      return res.status(400).json({
        ok: false,
        error: 'postId, author, email, and comment text are required',
      });
    }

    const newComment = {
      id: `c-${Date.now()}`,
      postId,
      author,
      location,
      date: new Date().toLocaleDateString('en-IN', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      text,
      createdAt: new Date().toISOString(),
    };

    // TODO (DB Integration): Replace with INSERT INTO comments (...) VALUES (...)
    const existing = commentsStore.get(postId) || [];
    commentsStore.set(postId, [...existing, newComment]);

    return res.status(201).json({
      ok: true,
      comment: newComment,
    });
  } catch (err) {
    return next(err);
  }
}