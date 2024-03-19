let jump = new Tone.Synth({
  oscillator: {
    type: "square",
  },
  envelope: {
    attack: 0.15,
    decay: 0.15,
    sustain: 0.5,
    release: 1,
  },
}).toDestination();

let lfo = new Tone.LFO({
  frequency: 1,
  type: "triangle",
  min: 600,
  max: 800,
}).start();

lfo.connect(jump.oscillator.frequency);

let fall;
function preload() {
  fall = loadImage("jump.jpg");
}

function setup() {
  createCanvas(600, 400);
  background(128);
  fall.resize(200, 300);
}

let mouseClickedd = false;
function draw() {
  if (mouseClickedd) {
    image(fall, 200, 50);
  }
}

function mouseClicked() {
    mouseClickedd = true;
    jump.triggerAttackRelease("G5", "8t", "0.3");
}
