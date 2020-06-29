let imagemCenario;
let imagemNuvens;
let imagemMontanha;
let imagemPersonagem;
let imagemVida;

let fita;

let somDoJogo;
let somPulo;
let somStart;
let somGameOver;

let cenario;
let nuvens;
let montanha;
let personagem;
let vida;

let inimigo;
let jerryAndando;
let jerryGolf;
let jerryBola;
let mrPBH;

let colisao;
let jogo;
let cenaAtual = 'telaInicial';
let cenas;
let telaInicial;
let botaoGerenciador;

let gameOver;
let pontuacao;

let inimigoAtual = 0;

const matrizPersonagemMove = [
      [0, 0],
      [256, 0],
      [0, 256],
      [256, 256],
      [0, 512], 
      [256, 512],
    ];
const matrizPersonagemPula = [
      [0, 768],
      [256, 768],
      [0, 1024],
      [256, 1024],
    ];
const matrizJerryBola = [
  [0, 0],
  [256, 0],
  [0, 256],
  [256, 256]
];
const matrizJerryGolf = [
  [0, 0],
  [256, 0],
  [0, 256],  
  [256, 256],
  [0, 512],
  [256, 512],
  [0,  768]
];
const matrizJerryAndando = [
  [0, 0],
  [256, 0],
  [0, 256],
  [256, 256]
];
const matrizMrPBH = [
  [0, 0],
  [256, 0],
  [512, 0],
  [768, 0],
  
  [0, 256],  
  [256, 256],
  [512, 256],
  [768, 256],
  
  [0, 512],
  [256, 512],
  [512, 512],
  [768, 512],
  
  [0,  768],
  [256, 768],
  [512, 768],
  [768, 768],
  
  [0,  1024],
  [256, 1024],
];

const inimigos = [];