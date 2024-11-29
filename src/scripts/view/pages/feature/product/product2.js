import limitWords from '../../../../utils/limitWords';

class Product2 {
  constructor() {
    this._render();
  }

  _render() {
    document.title = 'Website Desa Tagawiti - Makau';
    const contentContainer = document.createElement('section');
    contentContainer.innerHTML = `
    <section class="d-flex flex-column align-items-center justify-content-center py-5 my-5" style="background-color: #eaf8ef">
      <div class="d-flex flex-column justify-content-center py-5 product-section-1" data-aos="fade-up">
        <div class="product-box w-100 p-2">
          <div class="d-flex flex-row gap-4 p-3 product-box-content">
            <div class="w-100 product-image-container">
              <img src="./images/market/product2.webp">
            </div>
            <div class="d-flex flex-column gap-2">
              <div class="d-flex flex-column product-text-header">
                <h3 class="fw-semibold mb-1">Makau</h3>
                <p class="text-secondary fs-6">Madu Bakau Khas Desa Tagawiti</p>
              </div>
              <div class="d-flex flex-column product-text-description">
                <p>
                  Makau adalah madu alami yang dihasilkan dari sarang lebah pohon bakau desa Tagawiti, murni tanpa melalui proses pengolahan apapun seperti pasteurisasi atau pencampuran dengan bahan lain, sehingga zat-zat yang bermanfaat tidak rusak.
                </p>
              </div>
              <ul class="d-flex flex-column gap-1">
                  <li><span class="fw-semibold">Komposisi</span> : Madu Alami (100%)</li>
                  <li><span class="fw-semibold">Diproduksi Oleh</span> : Badan Usaha Milik Desa Holoriang</li>
                  <li><span class="fw-semibold">Berat Bersih</span> : 250ml</li>
              </ul> 
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="d-flex flex-column align-items-center justify-content-center py-5 my-5">
      <div class="d-flex flex-column justify-content-center py-4 product-section-2" data-aos="fade-down">
        <div class="pb-3">
          <h1 class="fw-semibold" style="color:#327a6d; text-transform:uppercase;">produk lainnya</h1>
        </div>
        <div class="d-flex flex-row gap-4 product-section-2-content">
            <a class="card" href="#/product-jagreenola" style="text-decoration: none;">
              <img data-src="./images/market/product1.webp" class="card-img-top lazyload">
              <div class="card-body d-flex flex-column align-items-start">
                <h5 class="card-title text-center fw-semibold" style="text-transform: uppercase;">Jagreenola</h5>
                <p class="text-start text-secondary fs-6" id="cardProductDesc">Jagreenola adalah snack granola yang terbuat dari bahan-bahan lokal khas desa Tagawiti. Jagreenola kaya akan nutrisi serta rasa yang sweet dan crunchy menambahkan kenikmatan disetiap gigitannya!</p>
              </div>
            </a>

            <a class="card" href="#/product-fishfloss" style="text-decoration: none;">
              <img data-src="./images/market/product3.webp" class="card-img-top lazyload">
              <div class="card-body d-flex flex-column align-items-start">
                <h5 class="card-title text-center fw-semibold" style="text-transform: uppercase;">Fish Floss</h5>
                <p class="text-start text-secondary fs-6" id="cardProductDesc">Nikmati kelezatan autentik Abon Ikan Khas Desa Tagawiti, olahan tradisional dari daging ikan segar yang dipadukan dengan racikan bumbu alami khas Indonesia. Dibuat dengan bahan berkualitas seperti santan, rempah-rempah, dan daun jeruk, abon ini menghadirkan rasa gurih, pedas, dan aroma harum yang menggoda. Tanpa bahan pengawet, abon ikan ini cocok untuk teman makan nasi, taburan mi, atau camilan langsung. Praktis, lezat, dan kaya gizi, Abon Ikan Tagawiti adalah pilihan sempurna untuk Anda yang ingin membawa kelezatan Nusantara ke meja makan Anda.</p>
              </div>
            </a>

            <a class="card" href="#/product-greendrink" style="text-decoration: none;">
              <img data-src="./images/market/product4.webp" class="card-img-top lazyload">
              <div class="card-body d-flex flex-column align-items-start">
                <h5 class="card-title text-center fw-semibold" style="text-transform: uppercase;">Green Drink</h5>
                <p class="text-start text-secondary fs-6" id="cardProductDesc">Nikmati keaslian dan kesegaran Green Drink, minuman serbuk yang terbuat dari sari kacang hijau 100% asli tanpa bahan pengawet, pewarna, atau perasa buatan. Diproduksi di Desa Tagawiti, Green Drink menghadirkan kebaikan alami kacang hijau dalam setiap tegukan, kaya serat, protein, dan nutrisi penting lainnya.</p>
              </div>
            </a>
        </div>
      </div>
    </section>
          `;
    return contentContainer;
  }

  _initializeEvent() {
    this._eventListener();
  }

  _eventListener() {
    const productdesc = document.querySelectorAll('#cardProductDesc');
    productdesc.forEach((descElement) => {
      descElement.innerText = limitWords(descElement.innerText, 5);
    });
  }
}

export default Product2;
