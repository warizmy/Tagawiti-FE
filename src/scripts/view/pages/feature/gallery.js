class Gallery {
  constructor() {
    this._render();
  }

  _render() {
    document.title = 'Website Desa Tagawiti - Galeri';
    const contentContainer = document.createElement('section');
    contentContainer.innerHTML = `
    <div class="gal-content-container">
      <div class="d-flex flex-column justify-content-center align-items-center" data-aos="fade-up">
        <div class="pb-5 text-center">
          <h1 class="fw-semibold">Galeri</h1>
          <p class="fs-5">Galeri foto kegiatan dan pemandangan di Desa Tagawiti</p>
        </div>
        <div class="row">
          <div class="column">
            <img src="./images/gallery/gallery-pic6.webp">
            <img src="./images/gallery/gallery-pic1.webp">
            <img src="./images/gallery/gallery-pic8.webp">
            <img src="./images/gallery/gallery-pic9.webp">
            <img src="./images/gallery/gallery-pic10.webp">
            <img src="./images/gallery/gallery-pic11.webp">
          </div>
          <div class="column">
            <img src="./images/gallery/gallery-pic14.webp">
            <img src="./images/gallery/gallery-pic7.webp">
            <img src="./images/gallery/gallery-pic5.webp">
            <img src="./images/gallery/gallery-pic25.webp">
            <img src="./images/gallery/gallery-pic2.webp">
          </div>
          <div class="column">
            <img src="./images/gallery/gallery-pic12.webp">
            <img src="./images/gallery/gallery-pic15.webp">
            <img src="./images/gallery/gallery-pic16.webp">
            <img src="./images/gallery/gallery-pic17.webp">
            <img src="./images/gallery/gallery-pic18.webp">
            <img src="./images/gallery/gallery-pic19.webp">
            <img src="./images/gallery/gallery-pic20.webp">
          </div>
          <div class="column">
            <img src="./images/gallery/gallery-pic21.webp">
            <img src="./images/gallery/gallery-pic23.webp">
            <img src="./images/gallery/gallery-pic24.webp">
            <img src="./images/gallery/gallery-pic22.webp">
            <img src="./images/gallery/gallery-pic26.webp">
          </div>
        </div>
      </div>
    </div>`;
    return contentContainer;
  }
}

export default Gallery;
