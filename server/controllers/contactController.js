const Message = require('../models/Message');
const { validationResult } = require('express-validator');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res, next) => {
  try {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      });
    }

    const { name, email, message } = req.body;

    // Save to MongoDB
    const newMessage = await Message.create({
      name,
      email,
      message,
      ipAddress: req.ip,
    });

    res.status(201).json({
      success: true,
      message: 'Message received! I will get back to you soon.',
      data: { id: newMessage._id },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all messages (protected — for personal use)
// @route   GET /api/contact/messages
// @access  Private (add auth middleware if needed)
const getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { submitContact, getMessages };
