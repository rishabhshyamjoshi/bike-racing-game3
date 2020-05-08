var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var  bikes, bike1, bike2;
var bike1imge,bike2image;

function preload(){
  ground = loadImage("images/track.jpg");
  track = loadImage("images/ground.jpg")

  bike1image = loadImage("images/bike.jpg");
  bike2image = loadImage("images/bike1.png");

  bikes = [bike1, bike2];
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();

  bike1 = createSprite(100,200);
  bike1.addImage(bike1imge);
  bike2 = createSprite(300,200);
  bike2.addImage(bike2image);
  
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(255,255,255);
  


  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  drawSprites();
}
