class ContaBancaria {
	constructor (agencia, conta, tipo) {
		this.agencia = agencia;
		this.conta = conta;
		this.tipo = tipo;
		this._saldo = 0; /*quando tiver getter e setter*/
	}
	get saldo() {
		return this._saldo;
	}

	set saldo(valor) {
		this._saldo = valor;
	}

	sacar(valor) {
		if (valor > this._saldo) {
			return "Operação negada"
		}
		this._saldo = this._saldo - valor;

		console.log('Seu saldo é de: ' + this._saldo);
	}

	depositar(valor) {
		this._saldo = this._saldo + valor;

		console.log('Seu saldo é de: R$ ' + this._saldo);
	}

	consultarSaldo(conta) {
		this.conta = conta

		console.log('Seu saldo é de: R$ ' + this.saldo);

	}
}

class ContaCorrente extends ContaBancaria {
	constructor(agencia, numero, cartaoCredito){
		super(agencia,numero);
		this.tipo = 'corrente';
		this._caraoCredito = cartaoCredito;
	}

	get cartaoCredito() {
		return this._caraoCredito ;
	}

	set cartaoCredito(valor){
		this._caraoCredito = valor;
	}
}

class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero){
		super(agencia,numero);
		this.tipo = 'poupança';
	}
}

class ContaUniversitaria extends ContaBancaria {
	constructor(agencia, numero){
		super(agencia,numero);
		this.tipo = 'universitaria';
	}

	sacar(valor) {
		if (valor > 500) {
			return 'Operação Negada'
		}
		this._saldo = this._saldo - valor;

		console.log('Seu saldo é de: R$ ' + this._saldo);
	}
}