import axios from 'axios';


export const findIssues = (center, corner) =>
  axios.post('/api/issues/find-issues', { center, corner });

export const addIssue = (issue) =>
  axios.post('/api/issues/add-issue', issue);

export const toggleFixed = (id) =>
  axios.put('/api/issues/toggle-fixed', { id });

export const upvote = (id, center, corner) =>
  axios.put('/api/issues/upvote', { id, center, corner });

export const downvote = (id, center, corner) =>
  axios.put('/api/issues/downvote', { id, center, corner });
