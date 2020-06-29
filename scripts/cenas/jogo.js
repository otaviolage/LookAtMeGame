class Jogo {
  constructor() {
    this.inimigoAtual = 0;
  }
  setup() {
    createCanvas(
      windowWidth,
      windowHeight
      // 800, 
      // 500
    );
    cenario = new Cenario(imagemNuvens, 4);
    montanha = new Cenario(imagemMontanha, 5);
    nuvens = new Cenario(imagemCenario, 7);

    pontuacao = new Pontuacao(0);

    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

    personagem = new Personagem(matrizPersonagemMove, imagemPersonagem, 0, 30, 110, 135, 256, 256);

    const jerryAndando = new Inimigo(matrizJerryAndando, imagemJerryAndando, width - 52, 30, 90, 100, 256, 256, 25, 100);

    const jerryGolf = new Inimigo(matrizJerryGolf, imagemJerryGolf, width - 300, 45, 45, 50, 256, 256, 7, 0);

    const mrPBH = new Inimigo(matrizMrPBH, imagemMrPBH, width - 52, 350, 100, 75, 256, 256, 18, 150);

    const jerryBola = new Inimigo(matrizJerryBola, imagemJerryBola, width * 2, 200, 20, 20, 256, 256, 30, 1000);

    inimigos.push(jerryAndando);
    inimigos.push(jerryGolf);
    inimigos.push(jerryBola);
    inimigos.push(mrPBH);

    frameRate(25);
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
    }
    if (key == "ArrowLeft") {
      personagem.moverEsquerda();
    }
    if (key == "ArrowRight") {
      personagem.moverDireita();
    }
    // if (key === 'Escape') {
    //   createCanvas(windowWidth, windowHeight);
    //   clear();
    //   //inimigos.push();
    //   this.setup();
    //   loop(this.draw());
    // }
  }

  draw() {
    cenario.exibe();
    cenario.move();
    montanha.exibe();
    montanha.move();
    nuvens.exibe();
    nuvens.move();

    vida.exibe(3, 3);

    pontuacao.exibe();
    pontuacao.adicionarPonto();
    personagem.exibe();
    personagem.aplicaGravidade();

    inimigos.forEach(inimigo => {
      inimigo.exibe();
      inimigo.move();
      if (personagem.estaColidindo(inimigo)) {
        vida.perdeVida();
        personagem.tornarInvencivel();
        if (vida.vidas === 0) {


          console.log('colidiu');
          somDoJogo.stop();

          textFont(fonteTelaInicial);
          textAlign(CENTER);
          fill(0, 0, 0);

          textSize(30);
          text('GAME OVER', width / 2, height / 3.7);
          textSize(10);
          text('Your score: ' + pontuacao.retorna(), width / 2, height / 3);
          somGameOver.volume(0.1);
          somGameOver.play();
          cenaAtual = 'telaInicial';
          noLoop();
        }
      }
    })
  }
}