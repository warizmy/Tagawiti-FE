class GoToTopButton {
  constructor() {
    this.button = null;
    this._createButton();
    this._addScrollListener();
  }

  _createButton() {
    this.button = document.createElement('button');
    this.button.classList.add('go-to-top');
    this.button.innerHTML = '&#8593;';

    document.body.appendChild(this.button);

    this.button.addEventListener('click', this._scrollToTop.bind(this));
  }

  _addScrollListener() {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        this.button.style.display = 'block';
      } else {
        this.button.style.display = 'none';
      }
    });
  }

  _scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}

export default GoToTopButton;
