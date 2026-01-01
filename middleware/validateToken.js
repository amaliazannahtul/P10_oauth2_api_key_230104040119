const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader) {
    return res.status(403).json({
      message: 'Authorization header tidak ada'
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, 'SECRET123');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({
      message: 'Token tidak valid'
    });
  }
};
