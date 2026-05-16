const validateContact = (req, res, next) => {
  const { name, email, subject, message } = req.body;
  const errors = [];

  if (!name || name.trim().length < 2)
    errors.push('Name must be at least 2 characters.');

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.push('A valid email address is required.');

  if (!subject || subject.trim().length < 3)
    errors.push('Subject must be at least 3 characters.');

  if (!message || message.trim().length < 10)
    errors.push('Message must be at least 10 characters.');

  if (message && message.length > 2000)
    errors.push('Message must be under 2000 characters.');

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  // Sanitize
  req.body.name = name.trim();
  req.body.email = email.trim().toLowerCase();
  req.body.subject = subject.trim();
  req.body.message = message.trim();

  next();
};

module.exports = { validateContact };
