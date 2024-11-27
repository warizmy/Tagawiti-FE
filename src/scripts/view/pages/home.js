/* eslint-disable no-new */
import limitWords from '../../utils/limitWords';
import SwiperUtility from '../../utils/swiper';
import IncomeChart from '../component/incomeChart';

class Home {
  constructor() {
    this._render();
  }

  _render() {
    document.title = 'Website Desa Tagawiti';
    const contentContainer = document.createElement('section');
    contentContainer.className = 'hero';
    contentContainer.innerHTML = `
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./images/bg/bg-header1.webp" class="d-block w-100">
          <div class="d-flex flex-column gap-1 align-items-center justify-content-center carousel-caption">
            <h1>Selamat Datang</h1>
            <h1>Website Desa Tagawiti</h1>
            <p>Sumber informasi terbaru tentang Desa Tagawiti</p>
          </div>
        </div>
      </div>
    </div>
    
    <section class="d-flex my-5 py-5 flex-column align-items-center jusify-content-center">
      <div class="section-content-1">
        <div class="d-flex flex-column align-items-center justify-content-center gap-5">
          <h1 class="fw-semibold pb-4">Selamat Datang di 
            <span style="color:#327a6d">Desa Tagawiti</span>
          </h1>
          <div class="d-flex flex-row align-items-center justify-content-center gap-4 section-inner-content-1">
            <div class="d-flex align-items-center justify-content-center w-100">
              <img data-src="./images/bg/bg-header2.webp" class="img-section-1 lazyload">
            </div>
            <div class="d-flex flex-column gap-1">
              <h3 style="color:#327a6d" class="fw-semibold">Desa Tagawiti</h3>
              <p class="lh-base">
                Sebuah desa yang memadukan tradisi lokal yang kuat dengan semangat inovasi. Terletak di Kecamatan Ile Ape, Kabupaten Lembata, Nusa Tenggara Timur, 
                Desa Tagawiti dikenal sebagai komunitas yang berdaya, dengan potensi alam dan budaya yang menjadikannya destinasi yang menarik untuk dieksplorasi.
              </p>
              <p class="lh-base">
                Desa ini aktif mengembangkan berbagai program pemberdayaan masyarakat, mulai dari pelatihan pengelolaan pendapatan berbasis usaha produktif hingga dukungan rehabilitasi sosial. 
                Dengan komitmen yang tinggi terhadap kesejahteraan warganya, Desa Tagawiti juga memanfaatkan teknologi komunikasi modern untuk meningkatkan pelayanan dan menjaga hubungan dengan masyarakat yang bekerja di luar daerah.
              </p>
            </div>
          </div>      
        </div>
      </div>
    </section>

    <section class="d-flex my-5 py-5 flex-column align-items-center jusify-content-center" style="background-color: #eaf8ef">
      <div class="d-flex flex-column justify-content-center py-3 section-content-2">
        <div class="pb-3">
          <h1 class="fw-semibold" style="color:#327a6d">Peta Desa</h1>
          <h5>Menampilkan Peta Desa Dengan Interest Point Kantor Desa Tagawiti</h5>
        </div>
        <div class="iframe-section">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.1245534129557!2d123.39631388574799!3d-8.272298968917928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dab9f1d3cc8ae85%3A0x8295936d481706db!2sKANTOR%20DESA%20TAGAWITI!5e1!3m2!1sid!2sid!4v1732505979973!5m2!1sid!2sid" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>

    <section class="d-flex my-5 py-5 flex-column align-items-center jusify-content-center">
      <div class="d-flex flex-column justify-content-center py-3 section-content-3">
        <div class="pb-3">
          <h1 class="fw-semibold" style="color:#327a6d; text-transform:uppercase;">sotk</h1>
          <h5>Struktur Organisasi dan Tata Kerja Desa Tagawiti</h5>
        </div>
        <div class="swiper swiper-1 section-card-content-3 py-3">
          <div class="swiper-wrapper">
            <div class="swiper-slide card">
              <img data-src="./images/gov/img-gov1.webp" class="card-img-top lazyload">
              <div class="card-body">
                <h5 class="card-title text-center fw-semibold style="text-transform: uppercase;">Kornelis K. B. Making</h5>
                <p class="card-text text-center">Kepala Desa</p>
              </div>
            </div>
            <div class="swiper-slide card">
              <img data-src="./images/gov/img-gov5.webp" class="card-img-top lazyload">
              <div class="card-body">
                <h5 class="card-title text-center fw-semibold style="text-transform: uppercase;">Bernadus Tena</h5>
                <p class="card-text text-center">Sekertaris Desa</p>
              </div>
            </div>
            <div class="swiper-slide card">
              <img data-src="./images/gov/img-gov3.webp" class="card-img-top lazyload">
              <div class="card-body">
                <h5 class="card-title text-center fw-semibold style="text-transform: uppercase;">Damianus H. L. Ona</h5>
                <p class="card-text text-center">Kepala Urusan Umum</p>
              </div>
            </div>
            <div class="swiper-slide card">
              <img data-src="./images/gov/img-gov2.webp" class="card-img-top lazyload">
              <div class="card-body">
                <h5 class="card-title text-center fw-semibold style="text-transform: uppercase;">Benediktus L. LB</h5>
                <p class="card-text text-center">Kepala Urusan Keuangan</p>
              </div>
            </div>
            <div class="swiper-slide card">
              <img data-src="./images/gov/img-gov4.webp" class="card-img-top lazyload">
              <div class="card-body">
                <h5 class="card-title text-center fw-semibold style="text-transform: uppercase;">Simplis Langoday</h5>
                <p class="card-text text-center">Operator SISKEUDES</p>
              </div>
            </div>
        </div>
        </div>
        <div class="swiper-pagination swiper-pagination-1"></div>
        <div class="swiper-button-prev swiper-button-prev-1"></div>
        <div class="swiper-button-next swiper-button-next-1"></div>
        <div class="text-end pt-3">
          <a href="#/profile" class="href-profile">Lihat Struktur Lebih Lengkap &#8594;</a>
        </div>
      </div>
    </section>

    <section class="d-flex my-5 py-5 flex-column align-items-center jusify-content-center" style="background-color: #eaf8ef">
      <div class="d-flex flex-column justify-content-center py-3 section-content-4">
        <div class="pb-3">
          <h1 class="fw-semibold" style="color:#327a6d">APB DESA</h1>
          <h5>Anggaran Pendapatan dan Belanja Desa Per Tahun</h5>
        </div>
        <div class="d-flex flex-column gap-2 canvas-container">
            <select id="yearSelect" class="form-select pb-1"></select>
            <canvas id="incomeChart"></canvas>
        </div>
      </div>
    </section>

    <section class="d-flex my-5 py-5 flex-column align-items-center jusify-content-center">
      <div class="d-flex flex-column justify-content-center py-3 section-content-5">
        <div class="pb-3">
          <h1 class="fw-semibold" style="color:#327a6d; text-transform:uppercase;">market</h1>
          <h5>Produk yang disediakan untuk dipublikasikan</h5>
        </div>
        <div class="swiper swiper-2 section-card-content-5 py-3">
          <div class="swiper-wrapper">
            <div class="swiper-slide card">
              <img data-src="./images/market/product1.webp" class="card-img-top lazyload">
              <div class="card-body">
                <h5 class="card-title text-center fw-semibold style="text-transform: uppercase;">Jagreenola</h5>
              </div>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-2"></div>
          <div class="swiper-button-prev swiper-button-prev-2"></div>
          <div class="swiper-button-next swiper-button-next-2"></div>
          <div class="text-end pt-3">
            <a href="#/market">Lihat Selengkapnya &#8594;</a>
          </div>
        </div>
      </div>
    </section>    

    <section class="d-flex my-5 py-5 flex-column align-items-center jusify-content-center" style="background-color: #eaf8ef">
      <div class="d-flex flex-column justify-content-center py-3 section-content-6">
        <div class="pb-3">
          <h1 class="fw-semibold" style="color:#327a6d; text-transform:uppercase;">berita</h1>
          <h5>Menyajikan informasi terbaru tentang peristiwa, wisata, dan berita terkini dari Desa Tagawiti</h5>
        </div>
        <div class="swiper swiper-3 section-card-content-6 py-3">
          <div class="swiper-wrapper" id="newsContainer">
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-3"></div>
        <div class="swiper-button-prev swiper-button-prev-3"></div>
        <div class="swiper-button-next swiper-button-next-3"></div>
        <div class="text-end pt-3">
          <a href="#/berita" class="href-news">Lihat Berita Lainnya &#8594;</a>
        </div>
      </div>
    </section>`;

    return contentContainer;
  }

  _initializeEvent() {
    new SwiperUtility();
    new IncomeChart('https://api.desatagawiti.com');
    this._getNews();
  }

  async _getNews() {
    const API_URL = 'https://api.desatagawiti.com/api/get/all/news';
    const newsContainer = document.getElementById('newsContainer');

    try {
      const response = await fetch(API_URL);
      const result = await response.json();

      if (!response.ok || !result.data) throw new Error(result.message || 'Gagal mengambil data berita.');

      newsContainer.innerHTML = '';
      result.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

      result.data.forEach((news) => {
        // Creating Element
        const newsElement = document.createElement('a');
        newsElement.classList.add('swiper-slide', 'text-decoration-none', 'card');
        newsElement.href = `#/berita/${news.id}-${news.title.replace(/\s+/g, '-').toLowerCase()}`;

        const limitedDescription = limitWords(news.description, 10);
        const limitedTitle = limitWords(news.title, 5);

        newsElement.innerHTML = `
          <img data-src="${news.image_url}" class="card-img-top lazyload" alt="${news.title}">
          <div class="card-body">
            <h5 class="card-title text-start fw-semibold" style="text-transform: uppercase;">${limitedTitle}</h5>
            <p class="card-text pt-2 text-start">${limitedDescription}</p>
            <div class="pt-4">
              <div class="d-flex gap-2 flex-row align-items-center text-secondary" style="font-size: 0.9rem;">
                <i class="bi bi-person-fill"></i>
                <p class="m-0">${news.author}</p>
              </div>
              <div class="d-flex gap-2 flex-row align-items-center text-secondary" style="font-size: 0.9rem;">
                <i class="bi bi-calendar-fill"></i>
                <p class="m-0">${new Date(news.created_at).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })}</p>
              </div>
            </div>
          </div>
        `;

        // Adding Element
        newsContainer.appendChild(newsElement);
      });
    } catch (error) {
      console.error('Error:', error.message);
      newsContainer.innerHTML = '<p class="text-danger">Gagal memuat berita. Silakan coba lagi.</p>';
    }
  }
}

export default Home;
