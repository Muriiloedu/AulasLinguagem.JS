class pessoa{
    #nome
    #cpf
    constructor(_nome, _cpf){
        this.#nome =_nome;
        this.#cpf = _cpf;
    }

    get nome(){
        return this.#nome;
    }

    set nome(_nome){
        this.#nome = _nome;
    }

    get cpf(){
        return this.#cpf;
    }

    set cpf(_cpf){
        this.#cpf = _cpf;
    }
}