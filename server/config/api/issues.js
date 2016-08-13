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

router.post('/add-issue', upload.single('file'),issuesController.add);


router.post('/find-issues', issuesController.findNearLocation);
router.put('/toggle-fixed', issuesController.toggleFixed);
router.put('/upvote', issuesController.upvote);
router.put('/downvote', issuesController.downvote);


module.exports = router;
