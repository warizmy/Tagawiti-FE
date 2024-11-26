class NavbarVisibility {
  constructor(navbarSelector) {
    this.navbar = document.querySelector(navbarSelector);
    this.lastScrollY = window.scrollY;

    this._init();
  }

  _init() {
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > this.lastScrollY) {
        // Scroll ke bawah, sembunyikan navbar
        this.navbar.style.transform = 'translateY(-100%)';
      } else {
        // Scroll ke atas, tampilkan navbar
        this.navbar.style.transform = 'translateY(0)';
      }

      this.lastScrollY = currentScrollY;
    });
  }
}

export default NavbarVisibility;
