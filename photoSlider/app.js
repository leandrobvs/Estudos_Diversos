(function () {
  const buttons = document.querySelectorAll('.slider');
  const images = [
    'pexels-taryn-elliott-4652250.jpg',
    'pexels-cottonbro-studio-6293192.jpg',
    'pexels-andrea-piacquadio-3766204.jpg',
    'pexels-gustavo-fring-4148937.jpg',
    'pexels-i-bautista-13100144.jpg',
    'pexels-koolshooters-8520562.jpg',
  ];

  let counter = 0;

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      if (e.target.classList.contains('next')) {
        counter++;
        if (counter >= images.length) {
          counter = 0;
        }
        document.getElementById('slideImages').src = `./img/${images[counter]}`;
        console.log(counter);
      } else if (e.target.classList.contains('prev')) {
        if (counter <= 0) {
          counter = images.length;
        }
        counter--;
        document.getElementById('slideImages').src = `./img/${images[counter]}`;
        console.log(counter);
      }
    });
  });
})();
