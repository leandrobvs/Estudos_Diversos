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
