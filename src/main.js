import './style.css'
import './maps-gallery.css'

const slides = [
  {
    image: '/images/Pantai wohkudu.jpeg',
    title: 'Pantai Wohkudu',
    subtitle: 'Pantai tersembunyi dengan tebing tinggi dan pasir putih yang bersih.',
    description: 'Pantai tersembunyi yang menawarkan keindahan alam yang masih asri. Pengunjung harus melalui jalan setapak untuk mencapainya, namun usaha tersebut akan terbayar dengan pemandangan laut yang biru dan pasir putih yang bersih.',
    maps: 'https://maps.google.com/?q=Pantai+Wohkudu+Gunungkidul',
  },
  {
    image: '/images/Pantai Kesirat.jpeg',
    title: 'Pantai Kesirat',
    subtitle: 'Tebing karang, sunset, dan pohon abadi di tepi laut lepas.',
    description: 'Pantai Kesirat didominasi tebing karang tinggi yang menghadap langsung ke laut lepas. Tempat favorit untuk menikmati sunset, camping, rock fishing, dan siluet pohon Gebangkoro yang ikonik.',
    maps: 'https://maps.google.com/?q=Pantai+Kesirat+Gunungkidul',
  },
  {
    image: '/images/Pantai Gesing.jpeg',
    title: 'Pantai Gesing',
    subtitle: 'Pasir putih lembut, air jernih, dan hidangan laut segar.',
    description: 'Pantai Gesing terkenal dengan pasir putih yang lembut dan air laut kebiruan. Diapit dua tebing tinggi, pantai ini cocok untuk berenang, memancing, atau mencicipi hidangan laut di warung pinggir pantai.',
    maps: 'https://maps.google.com/?q=Pantai+Gesing+Gunungkidul',
  },
  {
    image: '/images/Puncak Segoro.jpeg',
    title: 'Puncak Segoro',
    subtitle: 'Tebing karst megah yang berhadapan dengan Samudra Hindia.',
    description: 'Puncak Segoro menawarkan pemandangan laut lepas dari ketinggian, terutama saat matahari terbenam. Tempat yang tepat untuk mencari ketenangan dan menikmati hembusan angin laut.',
    maps: 'https://maps.google.com/?q=Puncak+Segoro+Gunungkidul',
  },
]

let activeSlide = 0

document.querySelector('#app').innerHTML = `
  <main>
    <section class="hero" id="beranda" style="--hero-image: url('${slides[activeSlide].image}')">
      <header class="site-header">
        <a class="brand" href="#beranda" aria-label="KKN UII 73 home">
          <span>KKN UII 73</span>
          <small>Girikarto<br><b>indonesia</b> <i>✳</i></small>
        </a>
        <button class="menu-toggle" aria-label="Buka menu" aria-expanded="false"><span></span><span></span><span></span></button>
        <nav class="nav-links"><a href="#beranda">Beranda</a><a href="#lokasi">Destinasi</a><a href="#cerita">Cerita</a><a href="#galeri">Galeri</a></nav>
      </header>

      <div class="hero-copy">
        <p class="eyebrow">Potensi wisata Girikarto</p>
        <h1>${slides[activeSlide].title}</h1>
        <p class="hero-subtitle">${slides[activeSlide].subtitle}</p>
        <p class="hero-description">${slides[activeSlide].description}</p>
        <a class="hero-maps-link" href="${slides[activeSlide].maps}" target="_blank" rel="noreferrer">Lihat di Google Maps <span>↗</span></a>
      </div>
      <div class="hero-bottom">
        <button class="arrow prev" aria-label="Cerita sebelumnya">←</button>
        <div class="slide-meta"><span>Girikarto, Gunungkidul</span><span>01 — 04</span></div>
        <button class="arrow next" aria-label="Cerita berikutnya">→</button>
      </div>
      <div class="scroll-cue"><span></span>Gulir untuk mengenal Pundung</div>
    </section>

    <section class="location-section" id="lokasi">
      <div class="section-label"><span class="pin">⌖</span> Jelajah Girikarto</div>
      <div class="location-layout">
        <div>
          <h2>Empat wajah<br><em>pesisir selatan.</em></h2>
          <p class="intro">Dari teluk tersembunyi hingga tebing yang menghadap samudra, Girikarto menyimpan lanskap yang selalu punya cerita untuk dibawa pulang.</p>
          <a class="text-link" href="https://maps.google.com/?q=Girikarto+Gunungkidul" target="_blank" rel="noreferrer">Lihat Girikarto di Maps <span>↗</span></a>
        </div>
        <div class="map-card" aria-label="Peta lokasi wisata Girikarto">
          <div class="map-lines"></div><div class="map-label label-one">PUNDUNG</div><div class="map-label label-two">GIRIKARTO</div><div class="map-pin">●</div>
          <div class="map-card-footer"><span>Lokasi pilihan</span><strong>Girikarto, Gunungkidul</strong><a href="https://maps.google.com/?q=Girikarto+Gunungkidul" target="_blank" rel="noreferrer">Buka Google Maps ↗</a></div>
        </div>
      </div>
    </section>

    <section class="story-section" id="cerita">
      <div class="section-label">Peta cerita</div>
      <div class="story-grid"><h2>Tempat indah,<br><em>cerita besar.</em></h2><p>Jelajahi empat destinasi pesisir Girikarto. Setiap foto membawa suasana yang berbeda: tenang, liar, hangat, dan lapang.</p></div>
    </section>
    <section class="gallery-section" id="galeri"><div class="section-label">Galeri Girikarto</div><div class="gallery-grid">${[
      ['Pantai wohkudu.jpeg', 'Pantai Wohkudu', 'Teluk tersembunyi di balik tebing tinggi', 'https://maps.google.com/?q=Pantai+Wohkudu+Gunungkidul'],
      ['Pantai Kesirat.jpeg', 'Pantai Kesirat', 'Sunset dan pohon abadi di tepi tebing', 'https://maps.google.com/?q=Pantai+Kesirat+Gunungkidul'],
      ['Pantai Gesing.jpeg', 'Pantai Gesing', 'Pasir putih dan air laut kebiruan', 'https://maps.google.com/?q=Pantai+Gesing+Gunungkidul'],
      ['Puncak Segoro.jpeg', 'Puncak Segoro', 'Tebing karst di atas Samudra Hindia', 'https://maps.google.com/?q=Puncak+Segoro+Gunungkidul'],
    ].map(([image, name, caption, maps]) => `<figure><img src="/images/${image}" alt="${name}" loading="lazy"><figcaption><strong>${name}</strong><span>${caption}</span><a href="${maps}" target="_blank" rel="noreferrer">Lihat lokasi di Maps ↗</a></figcaption></figure>`).join('')}</div></section>
    <footer><span>Girikarto, Gunungkidul</span><span>© 2026</span></footer>
  </main>
`

const hero = document.querySelector('.hero')
const title = document.querySelector('.hero-copy h1')
const subtitle = document.querySelector('.hero-subtitle')
const description = document.querySelector('.hero-description')
const mapsLink = document.querySelector('.hero-maps-link')
const slideMeta = document.querySelector('.slide-meta')

function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length
  const slide = slides[activeSlide]
  hero.style.setProperty('--hero-image', `url('${slide.image}')`)
  title.textContent = slide.title
  subtitle.textContent = slide.subtitle
  description.textContent = slide.description
  mapsLink.href = slide.maps
  slideMeta.innerHTML = `<span>Girikarto, Gunungkidul</span><span>0${activeSlide + 1} — 04</span>`
}

document.querySelector('.prev').addEventListener('click', () => showSlide(activeSlide - 1))
document.querySelector('.next').addEventListener('click', () => showSlide(activeSlide + 1))

const menuToggle = document.querySelector('.menu-toggle')
menuToggle.addEventListener('click', () => {
  const isOpen = hero.classList.toggle('menu-open')
  menuToggle.setAttribute('aria-expanded', isOpen)
})
