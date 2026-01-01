module.exports = (req, res, next) => {
  const apiKey = req.header('x-api-key');

  if (!apiKey) {
    return res.status(401).json({
      message: 'API Key tidak ditemukan'
    });
  }

  if (apiKey !== 'PRACTICUM_API_KEY') {
    return res.status(401).json({
      message: 'API Key tidak valid'
    });
  }

  next();
};
