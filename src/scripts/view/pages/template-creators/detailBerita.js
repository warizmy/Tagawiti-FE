import limitWords from '../../../utils/limitWords';
import LoadingCircle from '../../../utils/loading';
import SwiperUtility from '../../../utils/swiper';

class DetailBerita {
  constructor(newsId) {
    this.newsId = newsId;
    this._loading = new LoadingCircle();
  }

  async _render() {
    this._loading.show();
    try {
      const berita = await this.getBeritaById(this.newsId);

      if (!berita) {
        this._loading.hide();
        return this.showError('Berita tidak ditemukan');
      }

      const container = document.createElement('section');
      container.classList.add('detail-berita');

      container.innerHTML = `
        <section class="d-flex flex-column align-items-center justify-content-center py-5 my-5">
          <div class="d-flex flex-column justify-content-center py-5 news-detail-section">
            <div class="d-flex flex-column pb-5">
              <h1 class="fs-2 fw-semibold" style="color: #1e465f">${berita.title}</h1>
              <div class="d-flex flex-row align-items-center gap-2 text-secondary">
                <i class="bi bi-person-fill"></i>
                <p class="m-0">${berita.author}</p>
              </div>
              <div class="d-flex flex-row align-items-center gap-2 text-secondary">
                <i class="bi bi-calendar-fill"></i>
                <p class="m-0">${new Date(berita.created_at).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })}</p>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center py-3 img-news-container">
                <img src="${berita.image_url}" alt="${berita.title}" />
            </div>
            <div class="pt-5">
              <h5 class="fw-normal lh-base news-content-text">${berita.content}</h5>
            </div>
          </div>
        </section>
        
        <section class="d-flex mb-5 flex-column align-items-center jusify-content-center" data-aos="fade-up" style="background-color: #eaf8ef">
          <div class="d-flex flex-column justify-content-center py-4 another-news-section">
            <div class="pb-3">
              <h1 class="fw-semibold" style="color:#327a6d; text-transform:uppercase;">berita lainnya</h1>
            </div>
            <div class="swiper swiper-4 another-news-section-cardContainer py-3">
              <div class="swiper-wrapper" id="anotherNewsContainer"></div>
            </div>
            <div class="swiper-pagination swiper-pagination-4"></div>
            <div class="swiper-button-prev swiper-button-prev-4"></div>
            <div class="swiper-button-next swiper-button-next-4"></div>
          </div>
        </section>`;

      document.body.appendChild(container);

      this._getAnotherNews();
      // eslint-disable-next-line no-new
      new SwiperUtility();

      this._loading.hide();

      return container;
    } catch (error) {
      this._loading.hide();
      console.error(error);
      return this.showError('Gagal memuat berita.');
    }
  }

  async getBeritaById(id) {
    try {
      const response = await fetch(`https://api.desatagawiti.com/api/get/news/${id}`);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching berita:', error);
      return null;
    }
  }

  async _getAnotherNews() {
    const API_URL = 'https://api.desatagawiti.com/api/get/all/news';
    const newsContainer = document.getElementById('anotherNewsContainer');

    try {
      const response = await fetch(API_URL);
      const result = await response.json();

      if (!response.ok || !result.data) throw new Error(result.message || 'Gagal mengambil data berita.');

      const currentId = `${this.newsId}`;
      const filteredNews = result.data.filter(news => `${news.id}` !== currentId);

      newsContainer.innerHTML = '';

      filteredNews.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

      filteredNews.forEach((news) => {
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

        newsContainer.appendChild(newsElement);
      });
    } catch (error) {
      console.error('Error:', error.message);
      newsContainer.innerHTML = '<p class="text-danger">Gagal memuat berita. Silakan coba lagi.</p>';
    }
  }

  showError(message) {
    const container = document.createElement('div');
    container.classList.add('error');
    container.innerHTML = `<p class="text-danger">${message}</p>`;
    return container;
  }
}

export default DetailBerita;
