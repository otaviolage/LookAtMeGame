class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -50;
    this.pulos = 0;
  }  

  pula() {
    if(this.pulos < 2){
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
      somPulo.play();
    }
  }
  
  aplicaGravidade() {
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;
  
    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }
  
  //MOVIMENTO DIREITA ESQUERDA
  moverDireita(){
    this.x += 20; 
  }
  moverEsquerda(){
    this.x -= 20; 
  }

  tornarInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false
    }, 1000)
  }
  
  estaColidindo(inimigo) {
    if(this.invencivel){
      return false;
    }
    const precisao = .3;
   
    // noFill();
    // rect(
    //   this.x + 35, 
    //   this.y +25, 
    //   this.largura * precisao, 
    //   this.altura - 50)
    // rect(
    //   inimigo.x +35,
    //   inimigo.y,
    //   inimigo.largura * precisao,
    //   inimigo.altura
    // );
    const colisao = collideRectRect(
      this.x +35, 
      this.y +25, 
      this.largura * precisao, 
      this.altura -50,
      inimigo.x +35,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura
    );
    
    return colisao;
  }
}