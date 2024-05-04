let kisses;
//create kisses sprite
let currentDialogue;
let currentExpression;
let currentDialogueIndex = 0; // keeps track of which dialogue we're at
let maxDialogue; // max dialogue amount
let currentSprite;
let displayTextBox = false;
let startButton; // start button variable

let floofie = {};
let player = {};

let characters = {
  floofie: floofie,
  player: player,
}
// characters!!!!!

let expressions = ["angry", "flustered", "happy", "normal", "sad", "sleepy"];
// floofie expressions

let title;
let roomEntranceScene;
let bedroomScene;
// room variables
let titleScreenTheme
let floofieTalkingSound;
// sound fx
let bed;
let carpet;
let moss;
let planter;
let sofaKissesBed;
let table;
//furniture sprites


function preload() {
for (let i = 0; i < expressions.length; i++) {
  floofie[`${expressions[i]}`] = loadImage(`characters/floofie/expressions/${expressions[i]}.png`)
}

  title = loadImage('titleScreen.png');
  roomEntranceScene = loadImage('floofieRoomEntrance.png');
  bedroomScene = loadImage('bedroom_furniture/floofieBedroomBG.png');
  font = loadFont('Minecraft.ttf');
  titleScreenTheme = loadSound('floofieTitleTheme.mp3');
  floofieTalkingSound = loadSound("floofieTalking.mp3");
}

function setup() {
  createCanvas(400, 240); // size of canvas
  background(title);
  startButton = createButton('Start')
  startButton.addClass('startButton')
  startButton.position(125, 208); // sets button position
  startButton.mousePressed(entranceScene); // press mouse button to change scene
  titleScreenTheme.play();
  titleScreenTheme.setVolume(0.25);

}

function dialogue(sprite) {
  // set dialogue
  maxDialogue = sprite.dialogue.length;
  // how long the interaction is
  currentDialogue = sprite.dialogue[currentDialogueIndex];
  //start @ 0
  let currentCharacter = characters[sprite.character];
  //the character currently displayed
  currentExpression = currentCharacter[sprite.expression[currentDialogueIndex]];
  // this is the character's current expression according to the dialogue line current being displayed
  displayTextBox = true;
}

function keyPressed() {
  if (keyCode === RETURN && displayTextBox == true) {
    if (currentDialogueIndex < maxDialogue - 1) {
      currentDialogueIndex++;
    } else {
      currentDialogueIndex = 0;
      displayTextBox = false;
      //
    }
    console.log(currentDialogueIndex);

    dialogue(currentSprite);
    floofieTalkingSound.play();
  }
}

  // loading scenes and start button
function entranceScene() {
  background(roomEntranceScene)
  if (startButton.mousePressed) {
    titleScreenTheme.stop();
    startButton.hide();
    currentDialogueIndex = 0;
    displayTextBox = true;
    currentSprite = introductionInteraction;
    dialogue(currentSprite); // run introduction interaction dialogue
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


// // function kissesFound() {
// // if (kisses.mousePressed = true) {
// //   }
// // }

function draw() {
  // draw the textbox
  // draw the text
  if(displayTextBox) {
      text(currentDialogue, 85, 85, width - 90, 100);
    // show the current dialogue
    image(currentExpression, 5, height - 80);
      // draw the expression
  }

}