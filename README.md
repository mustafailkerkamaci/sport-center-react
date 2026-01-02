# 🏋️ Patika Sports Center - React Dönüşümü

Bu proje, Patika Front-End eğitimi kapsamında, statik bir HTML/CSS spor salonu web sitesinin **React** kütüphanesi ve **Vite** yapılandırıcısı kullanılarak modern, komponent tabanlı bir yapıya dönüştürülmüş halidir.

## 🚀 Proje Hakkında

Projenin temel amacı, "Tek Sayfa Uygulaması" (SPA) mantığını kavramak ve büyük bir sayfayı yönetilebilir, tekrar kullanılabilir küçük parçalara (Components) bölmektir.

### ✨ Öne Çıkan Özellikler

* **⚡ Vite & React:** Hızlı geliştirme ortamı ve modern React yapısı.
* **🧩 Komponent Mimarisi:** "Her bölüm en az 3 parça" kuralına sadık kalınarak modüler bir yapı kuruldu.
* **🧮 Dinamik State Yönetimi:**
    * **BMI Calculator:** Anlık veri girişi ile Vücut Kitle İndeksi hesaplama ve dinamik ibre hareketi.
    * **Classes Bölümü:** Butonlara tıklandığında içeriğin (resim ve yazıların) state ile değişmesi.
* **📱 Responsive Tasarım:** Mobil ve masaüstü uyumlu (Hamburger menü dahil).

---

## 📂 Dosya ve Komponent Yapısı

Proje, sürdürülebilirlik açısından her bölüm kendi klasöründe olacak şekilde yapılandırıldı. Her ana bölüm **en az 3 alt bileşene** ayrıldı:

* **Header Bölümü:** `Header.jsx`, `Logo.jsx`, `NavLinks.jsx`
* **Hero (Giriş) Bölümü:** `Hero.jsx`, `HeroContent.jsx`, `HeroButtons.jsx`
* **Classes (Dersler):** `Classes.jsx`, `ClassButtons.jsx`, `ClassContent.jsx`
* **BMI Calculator:** `BMI.jsx`, `BMICalculator.jsx`, `BMIImage.jsx`
* **Trainers:** `Trainers.jsx`, `TrainerList.jsx`, `TrainerCard.jsx`
* **Review & Purchase:** İlgili bölümler için liste ve kart bileşenleri.
* **Contact & Footer:** İletişim formu, harita ve alt bilgi bileşenleri.

---

## 🛠️ Kurulum ve Çalıştırma

Projeyi bilgisayarınızda çalıştırmak için terminalde şu komutları sırasıyla uygulayın:

1.  **Gerekli paketleri yükleyin:**
    ```bash
    npm install
    ```

2.  **Projeyi başlatın:**
    ```bash
    npm run dev
    ```

3.  Terminalde verilen `http://localhost:5173` (veya benzeri) adresine gidin.

