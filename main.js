function Producao(proficional, produto, validade ){
   this.proficional = proficional,
   this.produto = produto,
   this.validade = validade 
}

function Pizzaria(proficional, produto, validade){
   Producao.call(this, proficional, produto, validade)
}
function Padaria(proficional,produto,validade){
   Producao.call(this, proficional, produto, validade)
}
function Confeitaria(proficional,produto,validade){
   Producao.call(this, proficional, produto, validade)
}


const pizza1 = new Pizzaria('Jefersson', 'pizza calabresa', '5 dias')
console.log(pizza1);

const pao1 = new Padaria('Carlos', 'Pao Francês', '7 dias')
console.log(pao1);

const bolo1 = new Confeitaria('Ismael', 'Bolo de cenoura com chocolate', '10 dias')
console.log(bolo1);