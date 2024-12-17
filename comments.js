// Create web server
// Create a route that listens for POST requests to the URL /comments
// When the route is hit, create a new comment object with the data sent in the request body
// Add the comment object to the comments array
// Send the comment object as a response
// Export the router
const express = require('express');
const router = express.Router();
const comments = require('../data/comments');