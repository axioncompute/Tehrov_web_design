import { Router } from 'express';
import {
  getCommentsByPost,
  createComment,
} from '../controllers/comments.controller.js';

const router = Router();

router.get('/', getCommentsByPost);
router.post('/', createComment);

export default router;