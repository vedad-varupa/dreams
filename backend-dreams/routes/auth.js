const express = require('express');
const register = require('../controllers/auth.js');
const login = require('../controllers/auth.js');
const logout = require('../controllers/auth.js');

const router = express.Router();

router.post('/register', register);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;