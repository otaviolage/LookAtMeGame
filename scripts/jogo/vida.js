class Vida {
  constructor(total, inicial) {
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial;
    
    this.largura = 50;
    this.altura = 50;
    this.xInicial = 20
    this.y = 20
  }
  
  exibe() {
    for(let i = 0; i < this.vidas; i++){
      const margem = i *10;
      const posicao = this.xInicial * (i + 1);
      image(imagemVida, posicao + margem, this.y, this.altura, this.largura);
    }
  }
  
  ganhaVida(){
    if (this.vidas < this.total) {
      this.vidas++;
    }
  }
  
  perdeVida(){
    this.vidas--;
    
  }
  
}