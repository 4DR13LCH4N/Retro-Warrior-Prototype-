const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var canW;
var canH;
var engine;
var world;
//Variables for PC (Kate)
var kateIdle;
var kateJump;
var kateWalk;
var kateSword;
var kateShield;
var kateHammer;
var kateCharge;
//Variables for NPC
var bg;

function preload() {
  loadImage
}

function setup() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(isMobile){
    canW = displayWidth;
    canH = displayHeight;
    createCanvas(displayWidth+80, displayHeight);
  } else {
    canW = windowWidth;
    canH = windowHeight;
    createCanvas(windowWidth, windowHeight);
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
}