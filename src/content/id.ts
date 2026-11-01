import type { Content } from "@/types/content";

// Jangan sebut nama klien atau produk di teks project: jelaskan pekerjaannya, bukan sistemnya.
export const id: Content = {
  meta: {
    title: "Danendra Wyanta Mustofa | Technical Support & Backend Developer",
    description:
      "Technical support engineer di Jakarta yang sedang berkembang ke backend development. Lebih dari 3 tahun menangani aplikasi production, PHP, Laravel, dan Oracle. Terbuka untuk posisi backend dan project UMKM.",
    ogLocale: "id_ID",
  },
  ui: {
    skipToContent: "Langsung ke konten",
    toggleTheme: "Ganti tema warna",
    switchLanguage: "Ganti bahasa",
  },
  hero: {
    role: "Technical Support & Backend Developer",
    tagline: "Saya menjaga aplikasi production tetap sehat, dan sedang berkembang menjadi backend engineer.",
    location: "Jakarta Barat, Indonesia",
    facts: ["3+ tahun di production support", "Juara 1 hackathon 2025", "Best Employee divisi 2025"],
    viewProjects: "Lihat project",
    contactMe: "Hubungi saya",
    portraitAlt: "Foto Danendra mengenakan kemeja kotak-kotak biru",
    nodes: {
      request: "input tervalidasi",
      api: "REST · Laravel",
      database: "Oracle · MySQL",
      response: "200 OK",
    },
  },
  about: {
    label: "tentang saya",
    title: "Saya mulai dari yang rusak, lalu menelusuri sistemnya sampai ketemu sebabnya.",
    paragraphs: [
      "Lebih dari 3 tahun saya mendukung aplikasi bisnis: melacak masalah production dengan SQL, menguji rilis sebelum tayang, dan memperketat validasi request terhadap input berbahaya.",
      "Arah saya ke backend. Saya pernah membangun tools internal dengan Laravel dan merancang API untuk aplikasi web dan mobile, dan sekarang sedang belajar dasar-dasar cyber security.",
    ],
    quickFacts: [
      { label: "sedang mencari", value: "Posisi backend dan project UMKM" },
      { label: "domisili", value: "Jakarta Barat, Indonesia" },
      { label: "pendidikan", value: "S1 Sistem Informasi, 2026" },
      { label: "bahasa", value: "Indonesia, Inggris" },
    ],
  },
  achievements: {
    label: "prestasi",
    title: "Dihargai karena hasil kerjanya, bukan sekadar jabatannya.",
    items: [
      {
        highlight: "Juara 1",
        title: "Clash of Code Hackathon",
        issuer: "Happy Healthy, PT Neuronworks Indonesia",
        year: "2025",
        detail: "Memimpin tim beranggotakan 3 orang dan membangun backend serta API untuk aplikasi tiket support berbasis web dan mobile.",
        image: {
          src: "/images/hackathon.jpg",
          alt: "Tim beranggotakan tiga orang dengan medali, memegang sertifikat juara 1 Clash of Code",
        },
      },
      {
        highlight: "Best",
        title: "Employee Division of the Year",
        issuer: "PT Neuronworks Indonesia",
        year: "2025",
        detail: "Terpilih sebagai karyawan terbaik di divisi saya.",
        image: {
          src: "/images/best-employee.jpg",
          alt: "Danendra menerima sertifikat Best Employee Division of the Year 2025 di atas panggung",
        },
      },
    ],
  },
  experience: {
    label: "pengalaman",
    title: "Dari jaringan kantor ke aplikasi production.",
    jobs: [
      {
        role: "Technical Support & Maintenance",
        company: "PT Neuronworks Indonesia",
        period: "Mar 2023 – Sekarang",
        points: [
          "Menguji perubahan aplikasi sebelum deploy ke production, menyelidiki defect, dan berkoordinasi dengan tim development untuk perbaikannya.",
          "Menyelidiki masalah production dengan SQL dan Oracle Database, serta melakukan koreksi data yang sudah divalidasi bila diperlukan.",
          "Mengelola pembaruan versi aplikasi melalui Git untuk aplikasi PHP skala enterprise.",
          "Meninjau perilaku aplikasi untuk mencari celah keamanan, dan memperkuat validasi request terhadap input berbahaya dan SQL injection.",
        ],
      },
      {
        role: "IT Support Technician",
        company: "PT Infomedia Solusi Humanika",
        period: "Des 2021 – Mar 2023",
        points: [
          "Menjaga ketersediaan jaringan kantor dan menangani perangkat Cisco serta MikroTik.",
          "Menangani masalah hardware, software, dan jaringan sehari-hari.",
          "Membangun tools internal dengan Laravel, termasuk tool monitoring SNMP dan aplikasi serah terima paperless.",
        ],
      },
      {
        role: "Junior Data Analyst",
        company: "PT Nitoza Indonesia Mandiri",
        period: "Sep 2021 – Nov 2021",
        points: ["Mengelola dan memvalidasi data aplikasi, serta menyiapkan struktur data untuk aplikasi web dengan database NoSQL."],
      },
    ],
    educationLabel: "pendidikan",
    education: [
      {
        degree: "S1 Sistem Informasi",
        school: "Universitas Bina Sarana Informatika",
        period: "Lulus Feb 2026",
        note: "IPK 3,60/4,00",
      },
      {
        degree: "Rekayasa Perangkat Lunak",
        school: "SMK Telkom Jakarta",
        period: "2018 – 2021",
      },
    ],
  },
  projects: {
    label: "project",
    title: "Yang pernah saya kerjakan.",
    problem: "masalah",
    solution: "solusi",
    impact: "dampak",
    smallLabel: "tools kecil dan tugas yang diberikan",
    featured: [
      {
        slug: "support-ticketing",
        title: "Aplikasi tiket support kantor",
        context: "Juara 1 hackathon internal 2025 · Tim 3 orang · Team lead dan backend",
        problem: "Saat ada masalah di kantor, misalnya Wi-Fi mati, laporannya tidak punya satu tempat dan sulit ditindaklanjuti.",
        solution: "Aplikasi web dan mobile yang membuat setiap masalah dimulai dari tiket. Saya membangun backend dan API yang dipakai kedua aplikasinya.",
        impact: "Meraih juara 1 di hackathon.",
        tech: ["REST API", "Backend", "Web", "Mobile"],
      },
      {
        slug: "paperless-monitoring",
        title: "Serah terima paperless dan monitoring mesin",
        context: "Skripsi · Tool internal",
        problem: "Catatan serah terima masih di kertas, dan status mesin tidak tersedia di satu tempat.",
        solution: "Aplikasi Laravel untuk serah terima dengan detail barang, riwayat, dan tanda tangan digital, ditambah integrasi SNMP yang mengumpulkan metrik mesin dan mengirimkannya ke aplikasi.",
        impact: "Menggantikan catatan serah terima kertas dengan satu alur digital.",
        tech: ["Laravel", "PHP", "Node.js", "SNMP", "REST API"],
      },
      {
        slug: "enterprise-maintenance",
        title: "Maintenance aplikasi enterprise",
        context: "PT Neuronworks Indonesia · Technical support",
        problem: "Aplikasi pemrosesan order berskala besar yang dipakai tim operasional butuh masalahnya dilacak dan diperbaiki dengan cepat, tanpa mengganggu production.",
        solution: "Melacak defect lewat kode dan database, menguji perubahan sebelum rilis, dan membantu tim security menutup risiko fraud.",
        impact: "Membantu menjaga layanan tetap stabil bagi pengguna operasional.",
        tech: ["PHP", "Oracle Database", "SQL", "Git"],
      },
      {
        slug: "security-review",
        title: "Pengecekan keamanan aplikasi",
        context: "PT Neuronworks Indonesia · Dukungan VAPT",
        problem: "Sebuah aplikasi web perlu dicek terhadap SQL injection sebagai bagian dari vulnerability assessment.",
        solution: "Mengecek input aplikasi terhadap SQL injection, dan memperkuat validasi request terhadap input berbahaya.",
        impact: "Mengurangi risiko dari input berbahaya.",
        tech: ["SQL", "Validasi request", "PHP"],
      },
    ],
    small: [
      {
        slug: "telegram-bot",
        title: "Bot Telegram tim",
        summary: "Bot yang menghubungkan alur kerja tim ke Telegram untuk integrasi dan otomasi.",
        tech: ["Telegram Bot API", "Node.js"],
      },
      {
        slug: "case-recap",
        title: "Rekap case harian",
        summary: "Script kecil yang mengubah chat case harian di Telegram menjadi laporan Excel.",
        tech: ["Scripting", "Excel"],
      },
      {
        slug: "order-flow-tests",
        title: "Test automation alur order",
        summary: "Tugas dari atasan: test Playwright untuk alur order di sistem enterprise.",
        tech: ["Playwright"],
      },
    ],
  },
  skills: {
    label: "skill",
    title: "Yang saya pakai sehari-hari, dan yang masih saya pelajari.",
    groups: [
      { label: "backend dan web", items: ["PHP", "Laravel", "CodeIgniter", "Node.js", "JavaScript", "REST API", "Next.js"] },
      { label: "database", items: ["Oracle Database", "SQL", "MySQL", "MongoDB"] },
      { label: "support dan tools", items: ["Git", "Troubleshooting", "Software testing", "Validasi request", "SNMP", "Cisco", "MikroTik"] },
      { label: "sedang dipelajari", items: ["Dasar cyber security", "Otomasi", "Playwright"] },
    ],
    certificationsLabel: "sertifikasi",
    certifications: [
      { title: "Menjadi Back-End Developer Expert dengan JavaScript", issuer: "Dicoding Indonesia", year: "2025" },
      { title: "Next.js Fullstack", issuer: "BuildWithAngga" },
      { title: "Laravel 12 + React", issuer: "BuildWithAngga" },
      { title: "Laravel + Flutter", issuer: "BuildWithAngga" },
      { title: "Web Security", issuer: "BuildWithAngga" },
    ],
  },
  services: {
    label: "untuk UMKM",
    title: "Butuh website atau tool kecil untuk usaha Anda?",
    items: [
      { title: "Website usaha", description: "Website sederhana dan cepat supaya pelanggan mudah menemukan dan menghubungi usaha Anda." },
      { title: "Tools internal", description: "Aplikasi web kecil untuk menggantikan formulir kertas dan spreadsheet yang tercecer." },
      { title: "Bot Telegram", description: "Bot untuk notifikasi dan pekerjaan rutin yang diulang tim Anda setiap hari." },
    ],
  },
  contact: {
    label: "kontak",
    title: "Sedang mencari kandidat, atau punya project? Mari ngobrol.",
    direct: "Lebih suka langsung? Bisa lewat sini juga.",
    form: {
      name: "Nama",
      contact: "Email atau WhatsApp",
      message: "Pesan",
      send: "Kirim pesan",
      sending: "Mengirim…",
      sent: "Pesan terkirim. Saya akan segera membalas.",
      errorValidation: "Periksa nama, kontak, dan pesan Anda, lalu coba lagi.",
      errorRateLimit: "Terlalu banyak pesan. Coba lagi beberapa menit lagi.",
      errorGeneric: "Pesan Anda gagal terkirim. Silakan kirim lewat email.",
    },
  },
};
