import limitWords from '../../../utils/limitWords';
import LoadingCircle from '../../../utils/loading';

class News {
  constructor() {
    this.currentPage = 1;
    this.itemsPerPage = 9;
    this.newsData = [];
    this._loading = new LoadingCircle();
  }

  async _render() {
    this._loading.show();
    document.title = 'Website Desa Tagawiti - Berita';

    const contentContainer = document.createElement('section');
    contentContainer.id = 'news-page';
    contentContainer.innerHTML = `
      <section class="d-flex my-5 py-5 flex-column align-items-center justify-content-center">
        <div class="d-flex flex-column py-5 align-items-center justify-content-center section-news-1">
          <h2 style="text-transform: uppercase;" class="fw-semibold pb-4">berita</h2>
          <div id="news-container" class="d-flex flex-wrap gap-4 mt-4 justify-content-center"></div>
          <div id="pagination" class="d-flex gap-2 mt-4"></div>
        </div>
      </section>`;

    try {
      await this._fetchNewsData();
      this._renderArticles(contentContainer);
      this._renderPagination(contentContainer);
    } catch (error) {
      const newsContainer = contentContainer.querySelector('#news-container');
      newsContainer.innerHTML = '<p class="text-danger">Terjadi kesalahan saat mengambil data berita.</p>';
    } finally {
      this._loading.hide();
    }

    return contentContainer;
  }

  async _fetchNewsData() {
    try {
      const response = await fetch('https://api.desatagawiti.com/api/get/all/news');
      const result = await response.json();
      if (response.ok && result.data) {
        this.newsData = result.data;
        result.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      } else {
        throw new Error(result.message || 'Gagal mengambil data berita.');
      }
    } catch (error) {
      console.error('Error fetching news data:', error);
    }
  }

  _renderArticles(contentContainer) {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const paginatedData = this.newsData.slice(startIndex, endIndex);

    const newsContainer = contentContainer.querySelector('#news-container');
    newsContainer.innerHTML = '';

    if (paginatedData.length === 0) {
      newsContainer.innerHTML = '<p class="text-danger">Tidak ada berita yang ditemukan.</p>';
      return;
    }

    paginatedData.forEach((news) => {
      const newsElement = document.createElement('a');
      newsElement.classList.add('text-decoration-none', 'card');
      newsElement.href = `#/berita/${news.id}-${news.title.replace(/\s+/g, '-').toLowerCase()}`;

      const limitedDescription = limitWords(news.description, 10);
      const limitedTitle = limitWords(news.title, 5);

      newsElement.innerHTML = `
        <img data-src="${news.image_url}" class="card-img-top lazyload" alt="${news.title}" style="height: 180px; object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title text-start fw-semibold" style="text-transform: uppercase;">${limitedTitle}</h5>
          <p class="card-text pt-2 text-start text-secondary">${limitedDescription}</p>
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
  }

  _renderPagination(contentContainer) {
    const totalPages = Math.ceil(this.newsData.length / this.itemsPerPage);
    const paginationContainer = contentContainer.querySelector('#pagination');
    paginationContainer.innerHTML = '';

    if (this.currentPage > 1) {
      const firstButton = document.createElement('button');
      firstButton.className = 'btn';
      firstButton.style.borderColor = '#327a6d';
      firstButton.style.color = '#327a6d';
      firstButton.textContent = 'Awal';
      firstButton.onclick = () => {
        this.currentPage = 1;
        this._renderArticles(contentContainer);
        this._renderPagination(contentContainer);
        window.scrollTo(0, 0);
      };
      paginationContainer.appendChild(firstButton);
    }

    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.className = 'btn';
      button.style.borderColor = '#327a6d';
      button.style.color = i === this.currentPage ? 'white' : '#327a6d';
      button.style.backgroundColor = i === this.currentPage ? '#327a6d' : 'transparent';
      button.textContent = i;
      button.onclick = () => {
        this.currentPage = i;
        this._renderArticles(contentContainer);
        this._renderPagination(contentContainer);
        window.scrollTo(0, 0);
      };
      paginationContainer.appendChild(button);
    }

    if (this.currentPage < totalPages) {
      const lastButton = document.createElement('button');
      lastButton.className = 'btn';
      lastButton.style.borderColor = '#327a6d';
      lastButton.style.color = '#327a6d';
      lastButton.textContent = 'Akhir';
      lastButton.onclick = () => {
        this.currentPage = totalPages;
        this._renderArticles(contentContainer);
        this._renderPagination(contentContainer);
        window.scrollTo(0, 0);
      };
      paginationContainer.appendChild(lastButton);
    }
  }
}

export default News;
