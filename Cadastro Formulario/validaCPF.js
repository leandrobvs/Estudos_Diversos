<<<<<<< HEAD

class ValidaCPF {
  constructor(cpfSubmit) {
    this.cpfLimpo = cpfSubmit.replace(/\D+/g, '');
  }

  isSequencia() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
  }

  geraNovoCpf() {
    const cpfInicial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfInicial);
    const digito2 = this.criaDigito(cpfInicial + digito1);
    this.novoCpf = cpfInicial + digito1 + digito2;
  }

  criaDigito(cpfInicial) {
    const cpfArray = Array.from(cpfInicial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
      ac += regressivo * Number(val);
      regressivo--;
      return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
  }

  valida() {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;
    this.geraNovoCpf();

    return this.novoCpf === this.cpfLimpo;
  }
}




=======

class ValidaCPF {
  constructor(cpfSubmit) {
    this.cpfLimpo = cpfSubmit.replace(/\D+/g, '');
  }

  isSequencia() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
  }

  geraNovoCpf() {
    const cpfInicial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfInicial);
    const digito2 = this.criaDigito(cpfInicial + digito1);
    this.novoCpf = cpfInicial + digito1 + digito2;
  }

  criaDigito(cpfInicial) {
    const cpfArray = Array.from(cpfInicial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
      ac += regressivo * Number(val);
      regressivo--;
      return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
  }

  valida() {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;
    this.geraNovoCpf();

    return this.novoCpf === this.cpfLimpo;
  }
}




>>>>>>> 53bcfe5a35c06d5da6bab2d144389dae11182502
