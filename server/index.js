import express from 'express';
import cors from 'cors';
import commentsRouter from './routes/comments.routes.js';
import inquiriesRouter from './routes/inquiries.routes.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json({ limit: '64kb' }));

app.get('/api/health', (_req, res) => {
  res.status(200).json({
    ok: true,
    service: 'tehrov-api',
    timestamp: new Date().toISOString(),
  });
});

app.use('/api/comments', commentsRouter);
app.use('/api/inquiries', inquiriesRouter);

app.use((err, _req, res, _next) => {
  console.error('[server error]', err);
  res.status(500).json({
    ok: false,
    error: 'Internal server error',
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});