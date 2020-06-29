function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  
  jogo = new Jogo();
  jogo.setup();
  
  telaInicial = new TelaInicial();
  telaInicial.setup();

  somStart.volume(0.3);
  somStart.play()
  
  cenas = {
    jogo,
    telaInicial,
    gameOver
  }
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}