//routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/userController');

// Routes map to /api/users because of how we mount them in index.js
router.get('/', getUsers);
router.post('/', createUser);

module.exports = router;