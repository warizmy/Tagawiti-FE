class Profile {
  constructor() {
    this._render();
  }

  _render() {
    document.title = 'Website Desa Tagawiti - Profile';
    const contentContainer = document.createElement('section');
    contentContainer.innerHTML = `
    <section class="d-flex my-5 py-5 flex-column align-items-center justify-content-center" data-aos="fade-up">
      <div class="d-flex flex-column py-5 justify-content-center section-profile-1">
        <h1 style="color:#327a6d; text-transform:uppercase;" class="text-center mb-4 fw-semibold fs-1">profile</h1>
        <div class="box-profile">
          <div class="profile-text-content">
            <p class="fs-5">
              Desa Tagawiti terletak di Kecamatan Ile Ape, Kabupaten Lembata, Provinsi Nusa Tenggara Timur. 
              Desa ini merupakan bagian dari wilayah administratif di Kabupaten Lembata yang dikenal dengan keindahan alam serta tradisi budaya yang khas. 
              Penduduknya sebagian besar berasal dari suku Flores dan banyak yang bekerja sebagai petani. Hasil pertanian utama meliputi kelapa, kakao, kopi, dan kemiri, yang merupakan komoditas unggulan desa ini.
              <br><br>
              Secara historis, Desa Tagawiti telah menjadi bagian penting dalam aktivitas sosial dan budaya di Lembata, termasuk pelaksanaan acara-acara besar seperti peringatan 
              Hari Pendidikan Nasional (HARDIKNAS), di mana berbagai pihak dari pemerintah dan masyarakat ikut serta dalam perayaan.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="d-flex my-5 py-5 flex-column align-items-center jusify-content-center section-profile-2" style="background-color: #eaf8ef;" data-aos="fade-down">
      <div class="d-flex flex-column justify-content-center py-5 profile-section-container">
        <h1 style="color:#327a6d; text-transform:uppercase;" class="text-center mb-5 fw-semibold fs-1">visi & misi</h1>
        <div class="d-flex gap-1 flex-column box-profile-1">
          <h1 class="fs-2 fw-semibold" style="text-transform: uppercase;">visi</h1>
          <p class="fs-5">Terwujudnya Tata Kelolah Pemerintahan Desa Yang Baik dan Bersih Guna <br>Mewujudkan Kehidupan Masyrakat Desa Yang Adil, Makmur Dan Sejahtera.</p>
        </div>
        <div class="d-flex gap-1 flex-column mt-4 box-profile-2">
          <h1 class="fs-2 fw-semibold" style="text-transform: uppercase;">misi</h1>
            <div class="profile-ol-container">
              <ol class="d-flex flex-column fs-5 lh-lg">
                <li>
                  Membangun dan menumbuh kembangkan potensi budaya
                  berbasiskan pada kearifan lokal
                </li>
                <li>
                  Pengembangan dan peningkatan perekonomian desa dengan
                  menggenjot potensi desa sebagai sumber pendapatan
                  perkapita masyrakat dan pendapatan asli desa
                </li>
                <li>
                  Pengembangan dan peningkatan kualitas kesehatan
                  masyarakat
                </li>
                <li>
                  Pengembangan dan peningkatan kualitas sumber daya
                  manusia
                </li>
                <li>
                  Pengembangan dan peningkatan tata kelola pemerintah desa
                  yang baik ( Good Governance )
                </li>
              </ol>
            </div>
        </div>
      </div>
    </section>
    
    <section class="d-flex my-5 py-5 flex-column align-items-center jusify-content-center" data-aos="fade-up">
      <div class="d-flex flex-column section-profile-3">
        <div class="pb-4">
          <h1 class="fw-semibold fs-1" style="color:#327a6d; text-transform:uppercase;">bagan desa</h1>
          <p>Struktur Organisasi Pemerintahan Desa Tagawiti & Struktur Badan Permusyawaratan Desa</p>
        </div>
        <div class="w-100">
          <img data-src="./images/img-gov-chart1.png" class="modal-trigger lazyload">
        </div>
        <div class="w-100 pt-5">
          <img data-src="./images/img-gov-chart2.png" class="modal-trigger lazyload">
        </div>
      </div>

      <div id="imageModal" class="modal">
        <span class="close" id="closeModal">&times;</span>
        <img class="modal-content" id="modalImage">
      </div>
    </section>
    `;
    return contentContainer;
  }

  _initializeEvent() {
    const images = document.querySelectorAll('.modal-trigger');
    images.forEach((img) => {
      img.addEventListener('click', () => this._imgModal(img));
    });

    const closeModal = document.querySelector('#closeModal');
    closeModal.addEventListener('click', this._closeModal);
  }

  _imgModal(img) {
    const modal = document.querySelector('#imageModal');
    const modalImage = document.querySelector('#modalImage');

    modalImage.src = img.getAttribute('data-src');
    modal.style.display = 'block';
  }

  _closeModal() {
    const modal = document.querySelector('#imageModal');
    modal.style.display = 'none';
  }
}

export default Profile;
