# Web Aplikasi BNN Kota Sawahlunto 🇮🇩

Proyek ini adalah sistem informasi web resmi untuk Badan Narkotika Nasional (BNN) Kota Sawahlunto. Website ini dirancang modern, responsif, dan dinamis untuk memudahkan masyarakat mengakses informasi, layanan, berita, serta fitur pengaduan masyarakat.

## 🚀 Fitur Utama

- **Halaman Profil**: Menampilkan informasi mengenai BNN Kota Sawahunto dan struktur.
- **Berita & Informasi Edukasi**: Portal berita, artikel dan video edukasi P4GN (Pencegahan, Pemberantasan Penyalahgunaan dan Peredaran Gelap Narkotika).
- **Layanan Publik**: Informasi mengenai layanan Rehabilitasi, Tes Urine, SKHPN, dan Konseling.
- **Pengaduan Masyarakat**: Formulir pengaduan yang terintegrasi langsung dengan database backend.
- **Admin Dashboard**: Halaman manajemen (CMS) khusus admin untuk mengelola laporan masyarakat, berita, capaian kinerja, dan informasi edukasi.

## 💻 Tech Stack

Proyek ini menggunakan arsitektur **Monorepo** sederhana dengan pemisahan antara `web` (Frontend) dan `api` (Backend).

### Frontend (`apps/web`)
- **React.js** (via **Vite**) - Fast, modern frontend framework.
- **Tailwind CSS** - Utility-first styling framework.
- **React Router** - Client-side routing.

### Backend (`apps/api`)
- **Node.js & Express.js** - Restful API Server.
- **PostgreSQL** - Relational Database Management System.
- **Drizzle ORM** - Modern, type-safe TypeScript ORM.
- **Better Auth** - Sistem otentikasi komprehensif.

---

## 📂 Struktur Direktori

```text
RPL/
├── apps/
│   ├── web/                # Frontend React + Vite
│   │   ├── src/
│   │   │   ├── components/ # Reusable UI components
│   │   │   ├── pages/      # Halaman Publik (Home, Berita, Lapor, dll)
│   │   │   └── admin/      # Halaman Admin Dashboard
│   │   └── vite.config.js
│   │
│   └── api/                # Backend Express + Drizzle
│       ├── src/
│       │   ├── db/         # Drizzle Config & Skema Postgres
│       │   ├── routes/     # Express API Endpoints
│       │   ├── services/   # Business Logic
│       │   └── auth/       # Better Auth Middleware
│       ├── drizzle.config.ts
│       └── package.json
└── README.md
```

---

## 💻 Cara Setup Proyek Secara Lokal (Local Development)

Ikuti panduan langkah demi langkah di bawah ini untuk menjalankan proyek secara lokal di komputer Anda.

### Langkah 1: Prasyarat Sistem
Pastikan Anda sudah menginstal perangkat lunak berikut:
- **Node.js** (Disarankan versi 18 LTS atau terbaru)
- **Git**
- **PostgreSQL** (Sudah terinstal dan berjalan di sistem Anda, atau Anda bisa menggunakan layanan cloud seperti Supabase/Neon)

### Langkah 2: Kloning Repositori
Buka terminal Anda dan jalankan perintah berikut:
```bash
git clone https://github.com/adillahrn/rpl-bnn-sawahlunto.git
cd rpl-bnn-sawahlunto
```

### Langkah 3: Setup Database & Backend API
Arahkan terminal Anda ke dalam folder backend:
```bash
cd apps/api
```

1. **Instalasi Dependencies:**
   ```bash
   npm install
   ```
2. **Siapkan Database Lokal:**
   - Buka pgAdmin atau psql, lalu buat database kosong baru, misalnya dengan nama `bnn_sawahlunto`.
3. **Konfigurasi Environment:**
   Buat file bernama `.env` di dalam folder `apps/api` dan atur URL koneksi database Anda:
   ```env
   # Format: postgresql://[USER]:[PASSWORD]@localhost:5432/[NAMA_DATABASE]
   DATABASE_URL=postgresql://postgres:postgres@localhost:5432/bnn_sawahlunto
   PORT=3001
   ```
4. **Migrasi Skema Database:**
   Jalankan perintah ini untuk membuat tabel-tabel secara otomatis di PostgreSQL:
   ```bash
   npx drizzle-kit push
   ```
5. **Jalankan Server Backend:**
   ```bash
   npx tsx src/index.ts
   ```
   *(Server backend akan berjalan di http://localhost:3001)*

### Langkah 4: Setup Frontend Web
Buka tab terminal baru (biarkan server backend tetap berjalan), lalu arahkan ke folder frontend:
```bash
cd apps/web
```

1. **Instalasi Dependencies:**
   ```bash
   npm install
   ```
2. **Jalankan Server Frontend:**
   ```bash
   npm run dev
   ```
   *(Aplikasi web akan terbuka secara otomatis di browser pada http://localhost:5173)*

> **Penting**: Server Vite telah dikonfigurasi (*proxy*) sehingga semua _request_ ke `/api` dari frontend secara otomatis diarahkan ke backend di `localhost:3001`. Anda tidak akan mengalami masalah CORS selama pengembangan lokal.

---

## 🔑 Akses Halaman Admin
Untuk mengakses dasbor CMS/Admin, Anda dapat membuka URL berikut di browser:
**[http://localhost:5173/admin](http://localhost:5173/admin)**

*(Sistem otentikasi login admin sedang disiapkan menggunakan Better Auth)*

---

## 🤝 Kontribusi
Jika Anda ingin berkontribusi dalam proyek ini:
1. *Fork* repositori ini.
2. Buat *branch* fitur Anda (`git checkout -b fitur-keren`).
3. Lakukan *commit* (`git commit -m 'Menambahkan fitur keren'`).
4. Lakukan *push* ke *branch* Anda (`git push origin fitur-keren`).
5. Buat *Pull Request* baru.
