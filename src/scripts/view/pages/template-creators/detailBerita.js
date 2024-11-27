import LoadingCircle from '../../../utils/loading';

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

      const container = document.createElement('div');
      container.classList.add('detail-berita');

      container.innerHTML = `
        <h1>${berita.title}</h1>
        <img src="${berita.image_url}" alt="${berita.title}" />
        <p>${berita.content}</p>
        <p><strong>Author:</strong> ${berita.author}</p>
        <p><strong>Published on:</strong> ${new Date(berita.created_at).toLocaleDateString()}</p>
      `;

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

  showError(message) {
    const container = document.createElement('div');
    container.classList.add('error');
    container.innerHTML = `<p class="text-danger">${message}</p>`;
    return container;
  }
}

export default DetailBerita;
