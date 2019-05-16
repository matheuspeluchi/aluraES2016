class ListaNegociacoes {
    
    constructor() {
        
        this._negociacoes = [];
    }
    
    adiciona(negociacao) {
        
        this._negociacoes = [].concat(this._negociacoes);
    }
    
    get negociacoes() {
        
        return [].concat(this._negociacoes);
    }
}