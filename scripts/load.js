function preload(){
  //cenario
  imagemCenario = loadImage('imagens/cenario/golf.png'); 
  imagemNuvens = loadImage('imagens/cenario/ceu-nuvens.png'); 
  imagemMontanha = loadImage('imagens/cenario/montanha.png'); 
  
  //personagens
  imagemPersonagem = loadImage('imagens/personagem/MrMeeseeks.png');
  imagemJerryGolf = loadImage('imagens/inimigos/JerryGolf.png');
  imagemJerryAndando = loadImage('imagens/inimigos/JerryAndando.png');
  imagemJerryBola = loadImage('imagens/inimigos/JerryBola.png');
  imagemMrPBH = loadImage('imagens/inimigos/mrPBH.png');
  
  imagemVida = loadImage('imagens/assets/MrMeeseeksLife.png');
  
  //tela inicial
  imagemTelaInicial = loadImage('imagens/cenario/golf.png');
  fonteTelaInicial = loadFont('imagens/assets/LoveloBlack.otf');
  
  //json
  fita = loadJSON('fita/fita.json');
  
  //sons
  somDoJogo = createAudio('sons/musicaJogo.mp3');
  somPulo = loadSound('sons/somPulo.wav');
  somStart = createAudio('sons/somStart.mp3');
  somGameOver = createAudio('sons/cant-take.mp3');
}