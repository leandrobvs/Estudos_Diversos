(function () {
  const btnFilter = document.querySelectorAll('.btnFilter');

  btnFilter.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
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
