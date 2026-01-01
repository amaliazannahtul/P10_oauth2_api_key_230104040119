## Praktikum 10 – Web Service & Enterprise

### Implementasi API Key dan OAuth 2.0 (JWT)

---

### Identitas

* **Nama** : Amilia Zannahtul Putria
* **NIM** : 230104040119
* **Mata Kuliah** : Web Service & Enterprise
* **Praktikum** : 10

---

### Deskripsi Project

Project ini merupakan implementasi **Web Service menggunakan Node.js dan Express** dengan mekanisme keamanan berupa **API Key** dan **OAuth 2.0 menggunakan JSON Web Token (JWT)**.

Aplikasi ini dibuat untuk memenuhi tugas **Praktikum 10 WSE**, dengan fokus pada:

* Autentikasi menggunakan token (JWT)
* Validasi API Key pada endpoint tertentu
* Pemisahan struktur project sesuai konsep backend modern

---

### Teknologi yang Digunakan

* Node.js
* Express.js
* JSON Web Token (JWT)
* Dotenv

---

### Struktur Project

```
P10_oauth2_api_key_230104040119/
│
├── controllers/
│   ├── authController.js
│   └── productController.js
│
├── middleware/
│   ├── validateApiKey.js
│   └── validateToken.js
│
├── routes/
│   ├── authRoutes.js
│   └── productRoutes.js
│
├── utils/
│   └── generateToken.js
│
├── server.js
├── package.json
├── .env.example
└── README.md
```

---

### Mekanisme Keamanan

1. **API Key**

   * Digunakan untuk membatasi akses ke endpoint tertentu
   * Divalidasi melalui middleware `validateApiKey`

2. **JWT (OAuth 2.0 Simulation)**

   * Token dihasilkan saat proses login
   * Token divalidasi menggunakan middleware `validateToken`

---

### Konfigurasi Environment

File `.env` **tidak di-commit** ke repository demi keamanan.
Sebagai gantinya, disediakan file `.env.example` dengan variabel berikut:

```
PORT=3000
JWT_SECRET=your_jwt_secret
MONGODB_URI=your_mongodb_connection_string
```

---

### Cara Menjalankan Aplikasi

1. Install dependencies:

```
npm install
```

2. Jalankan server:

```
npm start
```

---

### Catatan

Project ini dikerjakan dengan fokus pada **struktur, konsep, dan implementasi keamanan API**.
Pengujian runtime dapat dilakukan setelah environment lokal tersedia.

---

### Kesimpulan

Melalui praktikum ini, mahasiswa dapat memahami:

* Konsep API Key
* Autentikasi berbasis token (JWT)
* Penerapan middleware pada Web Service
* Struktur backend yang terorganisir
