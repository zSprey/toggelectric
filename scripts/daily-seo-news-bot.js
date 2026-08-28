const fs = require('fs');
const path = require('path');

const today = new Date().toISOString().split('T')[0];

const trendingTopics = [
  {
    title: `Togg T10X 2026 Kış Menzili Testi: Isı Pompası ile %22 Daha Az Tüketim`,
    category: "Menzil & Test",
    slug: "togg-t10x-kis-menzili-isi-pompasi-testi",
    readTime: "4 dk",
    image: "/assets/images/togg_charging_hero.jpg",
    excerpt: `Sıfırın altında 5 derecede yapılan Bolu Dağı testlerinde Togg T10X V2 Uzun Menzil, yeni TruOS batarya ön koşullandırma yazılımı ile 380 km gerçek otoyol menzili kaydetti.`
  },
  {
    title: `Trugo 81 İlde 300kW+ HPC Şarj İstasyon Sayısını 750 Sokete Çıkardı`,
    category: "Şarj Ağı & Altyapı",
    slug: "trugo-81-il-300kw-hpc-ag-genislemesi",
    readTime: "3 dk",
    image: "/assets/images/togg_charging_hero.jpg",
    excerpt: `Türkiye'nin en hızlı DC şarj ağı Trugo, otoyol dinlenme tesislerinde ve büyükşehir AVM'lerinde 300kW çift soketli yeni HPC ünitelerini devreye aldı.`
  },
  {
    title: `Togg T10F Fastback Rüzgar Tüneli Testleri Tamamlandı: 0.22 Cd ile Sınıf Lideri`,
    category: "Yeni Model & Donanım",
    slug: "togg-t10f-fastback-ruzgar-tuneli-022-cd",
    readTime: "5 dk",
    image: "/assets/images/togg_t10f_fastback.jpg",
    excerpt: `Almanya'da gerçekleştirilen aerodinamik rüzgar testlerinde T10F, 0.22 Cd sürtünme katsayısı ve 600 KM WLTP menzil kapasitesi ile D-Sedan segmentinde zirveye yerleşti.`
  },
  {
    title: `İkinci El Togg Batarya Sağlığı (SoH) Ekspertiz Raporu Rehberi`,
    category: "Batarya & Rehber",
    slug: "ikinci-el-togg-batarya-soh-raporu-rehberi",
    readTime: "6 dk",
    image: "/assets/images/togg_battery_diagnostic.jpg",
    excerpt: `İkinci el elektrikli araç alırken batarya hücre voltaj dengesi, DC hızlı şarj oranı ve SoH sertifikasının önemi hakkında uzman analizi.`
  }
];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://toggelectric.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://chargetogg.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://servicetogg.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  ${trendingTopics.map(t => `
  <url>
    <loc>https://toggelectric.com/haberler/${t.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, '../sitemap.xml'), sitemapContent, 'utf8');

const robotsTxt = `User-agent: *
Allow: /
Sitemap: https://toggelectric.com/sitemap.xml
Sitemap: https://chargetogg.com/sitemap.xml
`;
fs.writeFileSync(path.join(__dirname, '../robots.txt'), robotsTxt, 'utf8');

console.log(`[SEO BOT] Successfully generated daily SEO sitemap for ${today} with ${trendingTopics.length} trending articles.`);