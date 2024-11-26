class Navbar {
  render() {
    const header = document.createElement('header');
    header.innerHTML = `
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div class="d-flex align-items-center justify-content-center gap-3">
          <img src="./icon.webp">
          <div class="navbar-txt-header">
              <a id="navbarBrand" class="navbar-brand d-flex flex-column fs-6 fw-semibold" href="/">Desa Tagawiti
                <span class="fw-normal">Kabupaten Lembata</span>
              </a>
          </div>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#/">Beranda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/profile">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/berita">Berita</a>
            </li>
              <li class="nav-item">
              <a class="nav-link" href="#/market">Market</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/galeri">Galeri</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;
    return header;
  }
}

export default Navbar;
