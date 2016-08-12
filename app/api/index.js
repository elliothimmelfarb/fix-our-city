import axios from 'axios';


export const findIssues = (center, corner) =>
  axios.post('/api/issues/find-issues', { center, corner });

export const addIssue = (issue) =>
  axios.post('/api/issues/add-issue', issue);

export const toggleFixed = (id) =>
  axios.post('/api/issues/toggle-fixed', id);

export const upvote = (id) =>
  axios.post('/api/issues/upvote', id);

export const downvote = (id) =>
  axios.post('/api/issues/downvote', id);
