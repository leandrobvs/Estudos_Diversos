(function () {
  const quotes = [
    'Somos o que repetidamente fazemos. A excelência, portanto, não é um efeito, mas um hábito.',
    'Muitas vezes, questionei como é que todo homem ama a si mesmo mais do que todo o resto dos homens, mas ainda assim atribui menos valor à sua própria opinião sobre si mesmo do que à opinião dos outros.',
    'Sábio é aquele que conhece os limites da própria ignorância.',
    'Eu não tenho nenhum talento especial. Apenas sou apaixonadamente curioso',
    'A compaixão pelos animais está intimamente ligada à bondade de caráter, e pode ser seguramente afirmado que quem é cruel com os animais não pode ser um bom homem.',
  ];

  const autores = [
    '- Aristoteles',
    '- Marco Aurelio',
    '- Sócrates',
    '- Albert Einstein',
    '- Arthur Schopenhauer',
  ];

  const btn = document.querySelector('.btn');
  const quote = document.querySelector('.quote');
  const autor = document.querySelector('.autor');

  btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[random];
    autor.textContent = autores[random];
  });
})();
