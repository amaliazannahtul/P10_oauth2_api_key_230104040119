const generateToken = require('../utils/generateToken');

// Endpoint login (simulasi OAuth2 / JWT)
exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'password123') {
    const token = generateToken({
      id: 1,
      role: 'admin'
    });

    return res.json({
      access_token: token,
      token_type: 'Bearer'
    });
  }

  res.status(401).json({
    message: 'Username atau password salah'
  });
};
