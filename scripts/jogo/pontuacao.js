class Pontuacao {
  constructor() {
    this.pontos = 0;
  }
  
  exibe() {
    textAlign(RIGHT);
    fill('#1C1C1C');
    textSize(50);
    text(parseInt(this.pontos), width - 30, 50);
  }
  
  retorna() {
    return parseInt(this.pontos);
  }
  
  adicionarPonto(){
    this.pontos += .05;
  }
}