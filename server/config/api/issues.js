import express from 'express';
import { controllers } from '../../db';

// import { controllers } from '../db';

const router = new express.Router();

const issuesController = controllers && controllers.issues;
// api /api/issues

router.get('/', issuesController.all);
router.post('/add-issue', issuesController.add);
router.post('/find-issues', issuesController.findNearLocation);
router.post('/toggle-fixed', issuesController.toggleFixed);

module.exports = router;
