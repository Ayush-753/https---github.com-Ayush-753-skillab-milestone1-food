const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const { email } = req.body;
    const newUser = new User({ email });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
