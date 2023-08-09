(function () {
  const form = document.getElementById('form');
  const warning = document.querySelector('.warning');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    let msg = document.querySelector('.msg').value;
    const sentMsg = document.querySelector('.lastmsg');

    if (msg) {
      sentMsg.textContent = msg;
      warning.classList.add('visibilityNone');
    } else {
      warning.classList.add('visibilityOn');
      setTimeout(function () {
        warning.classList.remove('visibilityOn');
      }, 3000);
    }

    form.reset();
  });
})();
