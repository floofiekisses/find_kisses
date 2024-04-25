let kisses;
//create kisses sprite

var font;
let startButton; // start button variable

let title;
let roomEntranceScene;
let bedroomScene;
// room variables
let dialogueBox;
// dialogue box variable
let floofieTalkingSound;
let titleScreenTheme;
// sound fx
let bed;
let carpet;
let moss;
let planter;
let sofaKissesBed;
let table;
//furniture

function preload() {
  title = loadImage('titleScreen.png');
  roomEntranceScene = loadImage('floofieRoomEntrance.png');
  bedroomScene = loadImage('bedroom_furniture/floofieBedroomBG.png');
  font = loadFont('Minecraft.ttf');
  font.addClass('font')
  soundFormats('mp3');
  titleScreenTheme = loadSound('floofieTitleTheme.mp3');
  titleScreenTheme.play;
}

function setup() {
  createCanvas(400, 240); // size of canvas
  background(title);
  titleScreenTheme = createAudio('floofieTitleTheme')
  startButton = createButton('Start')
  startButton.addClass('startButton')
  startButton.position(125, 208); // sets button position
  startButton.mousePressed(entranceScene); // press mouse button to change scene
}

  // loading scenes and start button
function entranceScene() {
  background(roomEntranceScene)
  if (startButton.mousePressed) {
    startButton.hide();
    dialogueBox = createButton();
    dialogueBox.position(135, 175)
    dialogueBox.addClass('dialogueBox');
  }
}

// function bedroomScene() {
//   background(bedroomScene);
//   kisses = new Sprite(random(0, 400), random(0,240));
//   kisses.img = 'kissesSprite.png';
//   kisses.layer = num;
//   bed = newSprite();
//   bed.img = 'bedroom_furniture/bed.png';
//   carpet = newSprite();
//   carpet.img = 'bedroom_furniture/carpet.png';
//   moss = new Sprite();
//   moss.img = 'bedroom_furniture/moss.png';
//   planter = newSprite();
//   planter.img = 'bedroom_furniture/planter.png';
//   sofaKissesBed = newSprite();
//   sofaKissesBed.img = 'bedroom_furniture/sofaKissesBed.png';
//   table = newSprite();
//   table.img = 'bedroom_furniture/table.png';
// }

// function runDialogue() {
//   // do the dialog thingy :D
//   if (keyCode === ENTER) {
//   // whatever i need to do i have no idea yet LOL
//   }
// }


// function kissesFound() {
// if (kisses.mousePressed === true) {
//   }
// }

function draw() {

}