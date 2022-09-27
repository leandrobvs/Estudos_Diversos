function validaForm() {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    handleSubmit = e.preventDefault();
    const isValidInfo = isValid();
    const isValidPass = formPassword();

    if (isValidInfo && isValidPass) {
      alert('Formulário Enviado! Obrigado.');
      form.submit();
    }
  });

  function isValid() {
    let valid = true;

    for (let errorText of form.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    for (let campo of form.querySelectorAll('.valid')) {
      const label = campo.previousElementSibling.innerText;
      if (!campo.value) {
        createError(campo, `Campo ${label} não pode estar em branco`);
        valid = false;
      }

      if (campo.classList.contains('user')) {
        if (!formUser(campo)) valid = false;
      }
      if (campo.classList.contains('cpf')) {
        if (!formCPF(campo)) valid = false;
      }
    }
    return valid;
  }

  function formCPF(campo) {
    const cpf = new ValidaCPF(campo.value);
    let valid = true;

    if (!cpf.valida()) {
      valid = false;
      createError(campo, 'CPF Inválido');
    }

    return valid;
  }

  function formUser(campo) {
    const user = campo.value;
    let valid = true;

    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      createError(campo, 'Usuário só poderá conter letras e/ou números');
      valid = false;
    }
    if (user.length < 3 || user.length > 12) {
      createError(campo, 'Nome precisa ter entre 3 e 12 caracteres');
      valid = false;
    }
    return valid;
  }

  function formPassword() {
    const password = form.querySelector('.password');
    const repeatPassword = form.querySelector('.repeat-password');
    let valid = true;

    if (password.value.length < 6 || password.value.length > 12) {
      createError(password, 'Senha precisa ter entre 6 e 12 caracteres');
      valid = false;
    }
    if (password.value !== repeatPassword.value) {
      createError(password, 'Campos senha e repetir senha precisam ser iguais');
      createError(
        repeatPassword,
        'Campos senha e repetir senha precisam ser iguais'
      );
      valid = false;
    }
    return valid;
  }

  function createError(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }
}
validaForm();
