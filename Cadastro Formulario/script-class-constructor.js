<<<<<<< HEAD
class ValidaForm {
  constructor() {
    this.form = document.querySelector('form');
    this.eventos();
  }

  eventos() {
    this.form.addEventListener('submit', (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const isValidInfos = this.isValid();
    const isValidPass = this.isValidPasswords();

    if (isValidInfos && isValidPass) {
      alert('Formulário enviado! Obrigado.');
      this.form.submit();
    }
  }

  isValid() {
    let valid = true;

    for (let errorText of this.form.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    for (let campo of this.form.querySelectorAll('.valid')) {
      const label = campo.previousElementSibling.innerText;
      if (!campo.value) {
        this.createError(campo, `Campo '${label}' não pode estar em branco`);
        valid = false;
      }

      if (campo.classList.contains('cpf')) {
        if (!this.validaCPF(campo)) valid = false;
      }

      if (campo.classList.contains('user')) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    }
    return valid;
  }

  isValidPasswords() {
    let valid = true;

    const senha = this.form.querySelector('.password');
    const repetirSenha = this.form.querySelector('.repeat-password');

    if (senha.value !== repetirSenha.value) {
      this.createError(
        senha,
        'Campos senha e repetir senha precisam ser iguais'
      );
      this.createError(
        repetirSenha,
        'Campos senha e repetir senha precisam ser iguais'
      );
      valid = false;
    }

    if (senha.value.length < 6 || senha.value.length > 12) {
      this.createError(senha, 'Senha precisa ter entre 6 e 12 caracteres');
      valid = false;
    }

    return valid;
  }

  validaUsuario(campo) {
    const user = campo.value;
    let valid = true;
    if (user.length > 12 || user.length < 3) {
      this.createError(campo, 'Nome precisa ter entre 3 e 12 caracteres');
      valid = false;
    }

    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(campo, 'Nome precisa conter apenas letras e/ou números');
      valid = false;
    }
    return true;
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if (!cpf.valida()) {
      this.createError(campo, 'CPF Inválido');
      return false;
    }
    return true;
  }

  createError(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }
}

const formulario1 = new ValidaForm();
=======
class ValidaForm {
  constructor() {
    this.form = document.querySelector('form');
    this.eventos();
  }

  eventos() {
    this.form.addEventListener('submit', (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const isValidInfos = this.isValid();
    const isValidPass = this.isValidPasswords();

    if (isValidInfos && isValidPass) {
      alert('Formulário enviado! Obrigado.');
      this.form.submit();
    }
  }

  isValid() {
    let valid = true;

    for (let errorText of this.form.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    for (let campo of this.form.querySelectorAll('.valid')) {
      const label = campo.previousElementSibling.innerText;
      if (!campo.value) {
        this.createError(campo, `Campo '${label}' não pode estar em branco`);
        valid = false;
      }

      if (campo.classList.contains('cpf')) {
        if (!this.validaCPF(campo)) valid = false;
      }

      if (campo.classList.contains('user')) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    }
    return valid;
  }

  isValidPasswords() {
    let valid = true;

    const senha = this.form.querySelector('.password');
    const repetirSenha = this.form.querySelector('.repeat-password');

    if (senha.value !== repetirSenha.value) {
      this.createError(
        senha,
        'Campos senha e repetir senha precisam ser iguais'
      );
      this.createError(
        repetirSenha,
        'Campos senha e repetir senha precisam ser iguais'
      );
      valid = false;
    }

    if (senha.value.length < 6 || senha.value.length > 12) {
      this.createError(senha, 'Senha precisa ter entre 6 e 12 caracteres');
      valid = false;
    }

    return valid;
  }

  validaUsuario(campo) {
    const user = campo.value;
    let valid = true;
    if (user.length > 12 || user.length < 3) {
      this.createError(campo, 'Nome precisa ter entre 3 e 12 caracteres');
      valid = false;
    }

    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(campo, 'Nome precisa conter apenas letras e/ou números');
      valid = false;
    }
    return true;
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if (!cpf.valida()) {
      this.createError(campo, 'CPF Inválido');
      return false;
    }
    return true;
  }

  createError(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }
}

const formulario1 = new ValidaForm();
>>>>>>> 53bcfe5a35c06d5da6bab2d144389dae11182502
