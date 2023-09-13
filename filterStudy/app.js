(function () {
  const btnFilter = document.querySelectorAll('.btnFilter');

  btnFilter.forEach(function (btn) {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const value = e.target.dataset.filter;

      console.log(value);

      const storeItems = document.querySelectorAll('.store-item');

      storeItems.forEach(function (item) {
        if (value === 'all') {
          item.style.display = 'block';
        } else {
          if (item.classList.contains(value)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        }
      });
    });
  });
})();

(function () {
  const search = document.getElementById('searchBtn');
  const searchForm = document.getElementById('search-item');
  const shopItems = document.querySelectorAll('.store-item');

  search.addEventListener('click', e => {
    e.preventDefault();
    searchFunction();
  });

  searchFunction = function () {
    let value = searchForm.value.toLowerCase().trim();
    shopItems.forEach(function (item) {
      let type = item.dataset.item;
      if (type.includes(value)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  };
})();

(function () {
  let imgList = [];
  let counter = 0;

  const modal = document.querySelector('.modal-container');
  const modalContent = document.querySelector('.modal-content');
  const close = document.querySelector('.x');
  const left = document.querySelector('.left');
  const right = document.querySelector('.right');
  const images = document.querySelectorAll('.img-store');

  images.forEach(image => {
    imgList.push(image.src);
  });

  close.addEventListener('click', () => {
    modal.style.display = 'none';
    counter = 0;
  });

  images.forEach(image => {
    image.addEventListener('click', function (event) {
      modal.style.display = 'block';

      let src = event.target.src;
      counter = imgList.indexOf(src);
      modalContent.style.backgroundImage = `url(${src})`;
    });
  });

  left.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
      counter = imgList.length - 1;
    }
    modalContent.style.backgroundImage = `url(${imgList[counter]})`;
  });

  right.addEventListener('click', () => {
    counter++;
    if (counter > imgList.length - 1) {
      counter = 0;
    }
    modalContent.style.backgroundImage = `url(${imgList[counter]})`;
  });
})();
