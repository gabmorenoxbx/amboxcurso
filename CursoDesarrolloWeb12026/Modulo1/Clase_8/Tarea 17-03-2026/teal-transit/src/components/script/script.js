//Cerrar Offcanvas//
document.querySelectorAll('.dropdown-item, .nav-link:not(.dropdown-toggle)').forEach(link => {
  link.addEventListener('click', () => {
    const offcanvasElement = document.querySelector('#offcanvasNavbar');
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);

    if (offcanvas) {
      offcanvas.hide();
    }
  });
});
//Enviar mensaje a Email//
