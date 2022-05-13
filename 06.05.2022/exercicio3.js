function recebercores (cor1, cor2, cor3, cor4) {
    return {
        cor1: cor1,
        cor2: cor2,
        cor3: cor3,
        cor4: cor4
    }
}

const cor1 = recebercores ('Azul', 'Preto', 'Amarelo', 'Vermelho')
console.log(cor1)