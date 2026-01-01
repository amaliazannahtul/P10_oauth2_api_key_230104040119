// Controller untuk produk

// Akses publik (API Key)
exports.getPublicProducts = (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Produk Contoh',
      price: 10000
    }
  ]);
};

// Akses privat (JWT)
exports.createProduct = (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      message: 'Akses ditolak, hanya admin'
    });
  }

  res.json({
    message: 'Produk berhasil dibuat'
  });
};
