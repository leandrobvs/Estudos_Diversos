(function () {
  const btn = document.getElementById('btn');
  const hexValue = document.getElementById('hex-value');

  const hexVariables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

  btn.addEventListener('click', function () {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * hexVariables.length);

      hex += hexVariables[random];
    }

    hexValue.textContent = hex;
    document.body.style.backgroundColor = hex;
  });
})();
