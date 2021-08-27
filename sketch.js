let player;
let bgImg;
let playerImg;
let obImg;
let loser;
let obstacles = [];
let wordclassfier;
function preload() {
  loser = loadImage("2.png");
  bgImg = loadImage("1.jpg");
  playerImg = loadImage("player.pnj.png");
  obImg = loadImage("obstcle.js.png");
  let options = {
    probabilityThreshold: 0.85,
  };

  wordclassfier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(800, 400);
  player = new Player();
  wordclassfier.classify(heardword);
}

function heardword(error, results) {
  console.log(results[0].label + "  " + results[0].confidence);
  if (results[0].label == "up") {
    player.jump();
  }
}

function draw() {
  background(bgImg);

  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }

  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs) === true) {
      image(loser, 0, 0, 800, 400);
      noLoop();
    }
  }
  player.show();
  player.move();
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}
