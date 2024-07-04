// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

function hashPassword(password) {
    const hash = crypto.createHash('sha256');
    hash.update(password);
    return hash.digest('hex');
}


router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = hashPassword(password); // Hash password
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = hashPassword(password); // Hash password
        const user = await User.findOne({ username, password: hashedPassword });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
