# Web Aplikasi BNN Kota Sawahlunto 🇮🇩

Proyek ini adalah sistem informasi web resmi untuk Badan Narkotika Nasional (BNN) Kota Sawahlunto. Website ini dirancang modern, responsif, dan dinamis untuk memudahkan masyarakat mengakses informasi, layanan, berita, serta fitur pengaduan masyarakat.

## 🚀 Fitur Utama

- **Halaman Profil**: Menampilkan informasi mengenai BNN Kota Sawahunto dan struktur organisasi.
- **Berita & Informasi Edukasi**: Portal berita, artikel dan video edukasi P4GN (Pencegahan, Pemberantasan Penyalahgunaan dan Peredaran Gelap Narkotika).
- **Layanan Publik**: Informasi mengenai layanan Rehabilitasi, Tes Urine, SKHPN, dan Konseling.
- **Pengaduan Masyarakat**: Formulir pengaduan masyarakat yang terintegrasi langsung dengan database Sanity CMS dan Firebase Storage untuk unggah berkas.
- **Admin Dashboard (CMS)**: Sistem manajemen konten menggunakan Sanity Studio khusus admin untuk mengelola laporan masyarakat, berita, layanan, dan informasi edukasi.

## 💻 Tech Stack

Proyek ini menggunakan arsitektur **Monorepo** sederhana dengan pemisahan antara `web` (Frontend) dan `cms` (Backend/CMS).

### Frontend (`apps/web`)
- **React.js** (via **Vite**) - Fast, modern frontend framework.
- **Tailwind CSS** - Utility-first styling framework.
- **React Router** - Client-side routing.
- **Sanity Client** - Fetching data dari headless CMS.
- **Firebase SDK** - Manajemen penyimpanan unggahan berkas laporan.

### Backend & CMS (`apps/cms`)
- **Sanity Studio** - Headless CMS terpusat dan real-time.
- **Sanity Vision** - Plugin GROQ query tester.

---

## 📂 Struktur Direktori

```text
RPL/
├── apps/
│   ├── web/                # Frontend React + Vite
│   │   ├── src/
│   │   │   ├── components/ # Reusable UI components
│   │   │   ├── pages/      # Halaman Publik (Home, Berita, Lapor, dll)
│   │   │   ├── lib/        # Konfigurasi Sanity & Firebase
│   │   │   └── hooks/      # Custom React Hooks
│   │   └── vite.config.js
│   │
│   └── cms/                # Sanity Studio CMS
│       ├── schemas/        # Skema konten Sanity (Berita, Laporan, dll)
│       ├── sanity.config.js# Konfigurasi utama Sanity Studio
│       └── sanity.cli.js
└── README.md
```

---

## 💻 Cara Setup Proyek Secara Lokal (Local Development)

Ikuti panduan langkah demi langkah di bawah ini untuk menjalankan proyek secara lokal di komputer Anda.

### Langkah 1: Prasyarat Sistem
Pastikan Anda sudah menginstal perangkat lunak berikut:
- **Node.js** (Disarankan versi 18 LTS atau terbaru)
- **Git**

### Langkah 2: Kloning Repositori
Buka terminal Anda dan jalankan perintah berikut:
```bash
git clone https://github.com/adillahrn/rpl-bnn-sawahlunto.git
cd rpl-bnn-sawahlunto
```

### Langkah 3: Setup Sanity CMS
Arahkan terminal Anda ke dalam folder CMS:
```bash
cd apps/cms
```

1. **Instalasi Dependencies:**
   ```bash
   npm install
   ```
2. **Jalankan Sanity Studio:**
   ```bash
   npm run dev
   ```
   *(Sanity Studio akan berjalan di http://localhost:3333)*

### Langkah 4: Setup Frontend Web
Buka tab terminal baru (biarkan server Sanity Studio tetap berjalan), lalu arahkan ke folder frontend:
```bash
cd apps/web
```

1. **Instalasi Dependencies:**
   ```bash
   npm install
   ```
2. **Konfigurasi Environment:**
   Buat file bernama `.env` di dalam folder `apps/web` (atau copy dari `.env.example` jika tersedia) dan masukkan kredensial Sanity dan Firebase Anda:
   ```env
   VITE_SANITY_PROJECT_ID='ID_PROJECT_SANITY'
   VITE_SANITY_DATASET='production'
   VITE_SANITY_TOKEN='TOKEN_SANITY'

   VITE_FIREBASE_API_KEY='API_KEY_FIREBASE'
   VITE_FIREBASE_AUTH_DOMAIN='domain.firebaseapp.com'
   VITE_FIREBASE_PROJECT_ID='ID_PROJECT_FIREBASE'
   VITE_FIREBASE_STORAGE_BUCKET='bucket.firebasestorage.app'
   VITE_FIREBASE_MESSAGING_SENDER_ID='SENDER_ID'
   VITE_FIREBASE_APP_ID='APP_ID'
   ```
3. **Jalankan Server Frontend:**
   ```bash
   npm run dev
   ```
   *(Aplikasi web akan terbuka secara otomatis di browser pada http://localhost:5173)*

---

## 🔑 Akses Halaman Admin (CMS)
Untuk mengakses dasbor manajemen konten, Anda dapat membuka Sanity Studio di URL berikut:
**[http://localhost:3333](http://localhost:3333)**

*(Anda harus memiliki akses dari administrator proyek untuk login ke dalam Sanity Workspace)*

---

## 🤝 Kontribusi
Jika Anda ingin berkontribusi dalam proyek ini:
1. *Fork* repositori ini.
2. Buat *branch* fitur Anda (`git checkout -b fitur-keren`).
3. Lakukan *commit* (`git commit -m 'Menambahkan fitur keren'`).
4. Lakukan *push* ke *branch* Anda (`git push origin fitur-keren`).
5. Buat *Pull Request* baru.
