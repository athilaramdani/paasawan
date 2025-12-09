# Tugas 12 Cloud Computing - PaaS Application

Project ini adalah aplikasi web sederhana yang dibangun sebagai bagian dari **Tugas 12: Implementasi Layanan PaaS (Platform as a Service)**. Aplikasi ini mendemonstrasikan penggunaan PaaS dengan mendeploy aplikasi Next.js modern ke cloud (Vercel).

## 🚀 Tentang Aplikasi
**Task Manager** adalah aplikasi *To-Do List* interaktif yang dibangun dengan desain modern dan responsif.
- **Tujuan**: Memenuhi tugas kuliah Cloud Computing untuk mencari penyedia PaaS gratis dan membuat aplikasi sederhana di atasnya.
- **Penyedia PaaS**: [Vercel](https://vercel.com/) (Dipilih karena integrasi native dengan Next.js dan tier gratis yang generous).

## ✨ Fitur
- **Manajemen Tugas**: Menambah, menandai selesai, dan menghapus tugas.
- **Modern UI/UX**: Desain antarmuka premium dengan *Glassmorphism*, gradasi warna, dan animasi halus.
- **Resposif**: Tampilan tetap optimal di perangkat mobile maupun desktop.
- **State Management**: Menggunakan React Hooks (`useState`) untuk interaksi real-time di sisi klien.

## 🛠️ Teknologi yang Digunakan
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: SVG (Lucide React style)
- **Font**: Geist Sans & Mono (Next.js default font optimization)

## 📂 Struktur Project
Berikut adalah struktur folder utama dalam project ini:

```bash
paasawan/
├── public/              # Aset statis
│   ├── grid.svg         # Background pattern
│   └── ...
├── src/
│   └── app/             # App Router directory
│       ├── globals.css  # Global styles & Tailwind directives
│       ├── layout.tsx   # Root layout (Metadata & Font config)
│       └── page.tsx     # Halaman utama (Aplikasi Task Manager)
├── package.json         # Dependencies & scripts
├── next.config.ts       # Konfigurasi Next.js
├── tailwind.config.ts   # Konfigurasi Tailwind (jika ada custom config)
└── README.md            # Dokumentasi project
```

## 💻 Cara Menjalankan Project (Local)

1.  **Clone atau Masuk ke Direktori Project**
    ```bash
    cd paasawan
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Jalankan Development Server**
    ```bash
    npm run dev
    ```

4.  **Buka di Browser**
    Akses [http://localhost:3000](http://localhost:3000) untuk melihat aplikasi.

## 🌐 Deployment (Vercel)
Project ini siap di-deploy ke Vercel dengan langkah mudah:
1. Push kode ke Repository GitHub/GitLab/Bitbucket.
2. Login ke [Vercel](https://vercel.com) dan buat "New Project".
3. Import repository tersebut.
4. Klik **Deploy**. Vercel akan otomatis mendeteksi konfigurasi Next.js.

---
**Catatan**: Project ini dibuat untuk tujuan edukasi dan demonstrasi tugas kuliah.
