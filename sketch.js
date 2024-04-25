//create kisses sprite
let expression = ["floofie_expressions/floofienormal.png","floofie_expressions/floofiesad.png","floofie_expressions/floofieangry.png", "floofie_expressions/floofiehappy.png", "floofie_expressions/floofiesleepy.png", "floofie_expressions/floofieflustered.png"];
// array of floofie expressions

let font;
let startButton; // start button variable

let title;
let roomEntranceScene;
let bedroomScene;
// room variables
let dialogueBox;
// dialogue box variable

function preload() {
  title = loadImage('titleScreen.png');
  roomEntranceScene = loadImage('floofieRoomEntrance.png');
  bedroomScene = loadImage('bedroom_furniture/floofieBedroomBG.PNG');
  font = loadFont('Minecraft.ttf');
}

function setup() {
  createCanvas(400, 240); // size of canvas
  background(title);
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

class FloofieDialogue {
  constructor(dialogue) {
      this.dialogue = dialogue
    }
  }


var FloofieDialogue1 = new FloofieDialogue
// this is the floofie dialogue class (idk what im doing please help)




function draw() {
  
}