document.addEventListener('DOMContentLoaded', function () {
  // mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var navList = document.querySelector('nav.main-nav ul');
  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      navList.classList.toggle('open');
    });
  }

  // carousel
  document.querySelectorAll('.carousel').forEach(function (carousel) {
    var track = carousel.querySelector('.carousel-track');
    var slides = carousel.querySelectorAll('.slide');
    var dotsWrap = carousel.querySelector('.carousel-controls');
    var index = 0;
    var total = slides.length;

    slides.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Ir para slide ' + (i + 1));
      dot.addEventListener('click', function () { goTo(i); });
      dotsWrap.appendChild(dot);
    });

    function goTo(i) {
      index = (i + total) % total;
      track.style.transform = 'translateX(-' + (index * 100) + '%)';
      dotsWrap.querySelectorAll('.dot').forEach(function (d, di) {
        d.classList.toggle('active', di === index);
      });
    }

    var prev = carousel.querySelector('.carousel-arrow.prev');
    var next = carousel.querySelector('.carousel-arrow.next');
    if (prev) prev.addEventListener('click', function () { goTo(index - 1); });
    if (next) next.addEventListener('click', function () { goTo(index + 1); });

    var timer = setInterval(function () { goTo(index + 1); }, 5500);
    carousel.addEventListener('mouseenter', function () { clearInterval(timer); });
  });
});
