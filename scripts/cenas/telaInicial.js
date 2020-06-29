class TelaInicial {
  constructor(){
  }
  setup(){
    botaoGerenciador = new BotaoGerenciador('start', width /1.5, 400);
  }
  
  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    fill(0, 0, 145);
    textSize(20);
    text('Mr Meeseeks at:', width / 2, height / 4.8);
    textSize(70);
    text('LOOK AT ME!', width / 2, height / 3);
    textSize(10);
    text('Use the arrows left, right and up to move Mr Meeseeks', width / 2, height / 2.5);
    textSize(10);
    text('try not to get hit by the Jerrys, his golf balls and the spinning flying Mr Puppybuthole', width / 2, height / 2.3);
  }
  
  _botao(){
    botaoGerenciador.y = height / 7 * 4;
    botaoGerenciador.draw();
  }
}