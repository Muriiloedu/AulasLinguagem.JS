class ContaBancaria{
    #ValorInicial = 0;
    constructor(ValorInicial){
        this._saldo = ValorInicial;
    }

    depositar(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if( valor <= this._saldo){
            this._saldo -= valor;
            
        }else{
            console.lg("Valor indisponoivel para saque");
        }
    }
    get saldo(){
        return this._saldo;
    }
}

module.export = ContaBancaria;