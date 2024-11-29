class Navbar {
  render() {
    const header = document.createElement('header');
    header.innerHTML = `
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a href="/#" class="d-flex align-items-center justify-content-center gap-3" style="text-decoration: none;">
          <img src="./icon.webp">
          <div class="navbar-txt-header">
              <div id="navbarBrand" class="navbar-brand d-flex flex-column fs-6 fw-semibold">Desa Tagawiti
                <span class="fw-normal">Kabupaten Lembata</span>
              </div>
          </div>
        </a>
        <button class="navbar-toggler" type="button" aria-label="Toggle navigation">
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
              <a class="nav-link" href="#/galeri">Galeri</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;
    return header;
  }

  _initializeEvent() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    document.addEventListener('click', (event) => {
      if (!navbar.contains(event.target) && navbarCollapse.classList.contains('active')) {
        navbarCollapse.classList.remove('active');
      }
    });

    navbarToggler.addEventListener('click', (event) => {
      navbarCollapse.classList.toggle('active');
      event.stopPropagation();
    });
  }

  initialize() {
    this._initializeEvent();
  }
}

export default Navbar;
