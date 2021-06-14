var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score = 0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score = 0;
var player2score = 0;

var xPos;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket.png");
  fruit1_img = loadImage("images/apple.png");
  fruit2_img = loadImage("images/banana.png");
  fruit3_img = loadImage("images/melon.png");
  fruit4_img = loadImage("images/orange.png");
  fruit5_img = loadImage("images/pineapple.png");
  fruitGroup = new Group();
}

function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start(); 
}

function draw() {
  background(back_img);

  // Add conditions for gameStates and playerCount

  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }

  if(playerCount === 2){
    game.update(1);
  }
}