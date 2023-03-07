let sliders = document.querySelectorAll('.slider');

for (let i = 0; i < sliders.length; i++) {
  init_slider(sliders[i]);
}

function init_slider(slider) {
  let slide = slider.querySelectorAll('.slide');
  let i = 0;
  function setOpacity_a(i) {
    var el = i
    var op = 0;
    while (op <= 1) {
        (function(_op) {
            setTimeout(function() { el.style.opacity = _op; }, 6 + op * 1000);
        })(op);
        op += 0.05;
    }
  }
  setInterval(function() {
    slide[i].classList.remove('block');

    i = (i + 1) % slide.length;

    slide[i].classList.add('block');  
    setOpacity_a(slide[i]);

    }, getRandomIntInclusive(5000, 8000)); 

    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
