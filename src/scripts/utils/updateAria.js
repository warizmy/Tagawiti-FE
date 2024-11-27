function updateAriaCurrent() {
  document.querySelectorAll('.nav-links').forEach(link => {
    const pathName = window.location.hash.slice(1);
    if (link.getAttribute('href').slice(1) === pathName) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current', 'page');
    }
  });
}

export default updateAriaCurrent;
