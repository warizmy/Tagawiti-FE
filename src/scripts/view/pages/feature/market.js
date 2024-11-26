class Market {
  constructor() {
    this._render();
  }

  _render() {
    document.title = 'Website Desa Tagawiti - Market';
    const contentContainer = document.createElement('section');
    contentContainer.innerHTML = `
    <div class="py-5 my-5">
      <h1>Hello World</h1>
    </div>            
                `;
    return contentContainer;
  }

  _initializeEvent() {

  }
}

export default Market;
