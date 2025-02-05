const swiper = new Swiper(".swiper", {
  loop: false, // Ativa o loop para evitar espaços em branco
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    360: {
      slidesPerView: 2, // Em telas de 360px até 768px, exibe 3 slides
      spaceBetween: 10,
    },
    769: {
      slidesPerView: 4, // Tablets e iPads: 769px até 1024px, exibe 4 slides
      spaceBetween: 10,
    }
  },
  });