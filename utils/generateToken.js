const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      role: user.role
    },
    'SECRET123',
    { expiresIn: '1h' }
  );
};

module.exports = generateToken;
