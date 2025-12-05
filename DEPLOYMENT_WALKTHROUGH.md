# 🚀 Deployment Walkthrough - Step by Step

Ikuti langkah-langkah ini untuk deploy website Anda ke internet!

---

## 📋 Persiapan

Sebelum mulai, pastikan Anda punya:
- ✅ Akun GitHub (buat di [github.com](https://github.com) jika belum)
- ✅ Code website sudah siap
- ✅ EmailJS credentials sudah di `.env.local`

---

## 🔹 Langkah 1: Push Code ke GitHub

### 1.1 Buat Repository di GitHub

1. Buka browser, pergi ke: **https://github.com/new**
2. Isi form:
   - **Repository name**: `my-portfolio` (atau nama lain)
   - **Description**: "Personal portfolio website"
   - **Visibility**: **Public** (agar bisa deploy gratis)
   - **JANGAN centang** "Add a README file"
3. Klik **"Create repository"**
4. **COPY URL** yang muncul, contoh: `https://github.com/adimulyadi-ch/my-portfolio.git`

### 1.2 Push Code dari Komputer

Jalankan command berikut **satu per satu** di terminal:

```bash
# 1. Add semua file
git add .

# 2. Commit perubahan
git commit -m "Initial commit - portfolio website with blog system"

# 3. Rename branch ke main
git branch -M main

# 4. Hubungkan ke GitHub (GANTI URL dengan URL Anda!)
git remote add origin https://github.com/adimulyadi-ch/my-portfolio.git

# 5. Push ke GitHub
git push -u origin main
```

**Jika diminta login:**
- Username: Username GitHub Anda
- Password: Gunakan **Personal Access Token** (bukan password biasa)

**Cara buat token:** https://github.com/settings/tokens → Generate new token (classic) → Centang `repo` → Generate

### 1.3 Verifikasi

Buka `https://github.com/adimulyadi-ch/my-portfolio` di browser.
Anda harus lihat semua file website Anda di sana! ✅

---

## 🔹 Langkah 2: Deploy ke Vercel

### 2.1 Buat Akun Vercel

1. Buka: **https://vercel.com**
2. Klik **"Sign Up"**
3. Pilih **"Continue with GitHub"**
4. Authorize Vercel untuk akses GitHub Anda

### 2.2 Import Project

1. Di Vercel dashboard, klik **"Add New..."** → **"Project"**
2. Pilih repository **`my-portfolio`** dari list
3. Klik **"Import"**

### 2.3 Configure Project

Vercel akan auto-detect Next.js. Pastikan:
- **Framework Preset**: Next.js ✅
- **Root Directory**: `./` ✅
- **Build Command**: `npm run build` ✅
- **Output Directory**: `.next` ✅

### 2.4 Add Environment Variables

**PENTING!** Tambahkan environment variables:

1. Klik **"Environment Variables"**
2. Tambahkan satu per satu:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | `service_v50sq8m` |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | `template_ixuzz8i` |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | `FKY1ZRa46Ny9xmJoO` |

3. Klik **"Add"** untuk setiap variable

### 2.5 Deploy!

1. Klik **"Deploy"**
2. Tunggu 2-3 menit (Vercel akan build website Anda)
3. Setelah selesai, Anda akan dapat URL seperti:
   ```
   https://my-portfolio-abc123.vercel.app
   ```

### 2.6 Test Website

1. Buka URL yang diberikan Vercel
2. Test semua fitur:
   - ✅ Dark/Light mode
   - ✅ Blog posts muncul
   - ✅ Contact form (kirim test email)
   - ✅ Responsive di mobile

---

## 🔹 Langkah 3: Custom Domain (Opsional)

Jika Anda punya domain sendiri (misal: `adimulyadi.com`):

1. Di Vercel project, klik **Settings** → **Domains**
2. Tambahkan domain Anda
3. Ikuti instruksi untuk update DNS di registrar domain
4. Tunggu propagasi DNS (5-60 menit)
5. Website Anda akan accessible di domain custom!

---

## 🎉 Selesai!

Website Anda sekarang **LIVE** dan bisa diakses dari mana saja!

**URL Anda:**
- Vercel: `https://my-portfolio-abc123.vercel.app`
- Custom (jika ada): `https://adimulyadi.com`

---

## 🔄 Update Website di Masa Depan

Setiap kali Anda ingin update website:

```bash
# 1. Edit code/blog posts
# 2. Add dan commit
git add .
git commit -m "Add new blog post"

# 3. Push ke GitHub
git push

# 4. Vercel akan AUTO-DEPLOY dalam 2-3 menit!
```

Tidak perlu deploy manual lagi! 🚀

---

## 🐛 Troubleshooting

### Build Error di Vercel
- Check build logs di Vercel dashboard
- Pastikan `npm run build` berhasil di local
- Cek environment variables sudah benar

### Contact Form Tidak Bekerja
- Pastikan environment variables sudah di-set di Vercel
- Cek EmailJS dashboard untuk error logs
- Redeploy setelah menambah env vars

### Website Lambat
- Vercel otomatis optimize
- Check di https://pagespeed.web.dev/
- Optimize images jika perlu

---

## 📚 Resources

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Docs](https://docs.github.com)

---

**Selamat! Website Anda sudah online!** 🎊

Jangan lupa share URL-nya! 😊
