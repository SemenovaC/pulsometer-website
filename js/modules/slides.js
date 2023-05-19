function slides (slidesSelector, prevSelector, nextSelector) {
  const slides = document.querySelectorAll(slidesSelector),
			prev = document.querySelector(prevSelector),
			next = document.querySelector(nextSelector);

  let slideIndex = 1;


  showSlides(slideIndex);


  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    slides.forEach(item => {
      item.style.display = 'none';
    });

    slides[slideIndex - 1].style.display = 'block';
    
  };

  function plusSlides(n) {
    showSlides(slideIndex += n)
  }

  prev.addEventListener('click', () => {
    plusSlides(-1);
  });

  next.addEventListener('click', () => {
    plusSlides(1);
  });
}

export default slides;