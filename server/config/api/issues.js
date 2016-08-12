import express from 'express';
import multer from 'multer';
import { controllers } from '../../db';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 52428800 },
});
// import { controllers } from '../db';

const router = new express.Router();

const issuesController = controllers && controllers.issues;
// api /api/issues

router.get('/', issuesController.all);
router.post('/add-issue', upload.single('photo'), issuesController.add);
router.post('/find-issues', issuesController.findNearLocation);
router.post('/toggle-fixed', issuesController.toggleFixed);
router.post('/upvote', issuesController.upvote);
router.post('/downvote', issuesController.downvote);


module.exports = router;
