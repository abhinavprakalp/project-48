var rama,arjuna,bheeema,ravana,backgroundimg,punch,punchicon,karna,duryodana,punch2;
var RamaSprite,RavanaSprite,punchSprite,p1,arjunaSprite,karnaSprite,p2;
var bheeemaSprite,duryodanaSprite,backgroundMusic;
var f;
var gameState = 0;
var Score=0;
var Villanscore=0;

function preload(){
  rama=loadImage("images/rama.png");
  arjuna=loadImage("images/arjuna.png");
  bheeema=loadImage("images/bheema.png");
  ravana=loadImage("images/ravana.png");
  backgroundimg=loadImage("images/background.png");
  punch=loadImage("images/punch.png");
  punchicon=loadImage("images/icon punch.png");
  karna=loadImage("images/karna.png");
  duryodana=loadImage("images/duryodana.png");
  punch2=loadImage("images/punch - Copy.png");
  backgroundMusic=loadSound("images/music.wav");
}

function setup() {
  createCanvas(600,600);

  RamaSprite=createSprite(100,400,50,100);
  RamaSprite.addImage(rama);

  RavanaSprite=createSprite(500,400,50,100);
  RavanaSprite.addImage(ravana);
  RavanaSprite.scale=0.5;

  arjunaSprite=createSprite(100,400,50,100);
  arjunaSprite.addImage(arjuna);
  arjunaSprite.scale=1.2

  karnaSprite=createSprite(500,400,50,100);
  karnaSprite.addImage(karna);
  karnaSprite.scale=0.8

  bheeemaSprite=createSprite(100,350,50,100);
  bheeemaSprite.addImage(bheeema);

  duryodanaSprite=createSprite(500,350,50,100);
  duryodanaSprite.addImage(duryodana);

  ground=createSprite(300,580,600,10);
  ground.visible = false;

  f= new form();

  RamaSprite.collide(ground);
  RavanaSprite.collide(ground);
  RamaSprite.velocityY=5;
  RavanaSprite.velocityY=5;

  arjunaSprite.collide(ground);
  karnaSprite.collide(ground);
  arjunaSprite.velocityY=5;
  karnaSprite.velocityY=5;

  bheeemaSprite.collide(ground);
  duryodanaSprite.collide(ground);

  punchSprite=createSprite(100,100,50,50);
  punchSprite.addImage(punchicon);
}

function draw() {
  background(255,255,255);
  if(gameState === 0){
    RamaSprite.collide(ground);
    RavanaSprite.collide(ground);
    arjunaSprite.collide(ground);
    karnaSprite.collide(ground);
    f.display();
    f.show();
    backgroundMusic.stop();
  }

  if(gameState === 1){
    f.hide();
    background(backgroundimg);
    RamaSprite.collide(ground);
    RavanaSprite.collide(ground);
    RamaSprite.visible=true;
    RavanaSprite.visible=true;
    arjunaSprite.visible=false;
    karnaSprite.visible=false;
    duryodanaSprite.visible=false;
    bheeemaSprite.visible=false;
    
    if(mousePressedOver (punchSprite)){
      punches();
      a=1;
    }

    if(frameCount % 100===0){
      villanPunches();
    }

    if(Score===300){
      gameState=0;
      Score=0;
      alert("Hero Won");
    }

    if(Villanscore===150){
      gameState=0;
      Villanscore=0;
      alert("Hero Lost");
    }

    backgroundMusic.play();

    drawSprites();
  }

  if(gameState === 2){
    f.hide();
    background(backgroundimg);
    arjunaSprite.collide(ground);
    karnaSprite.collide(ground);
    arjunaSprite.visible=true;
    karnaSprite.visible=true;
    duryodanaSprite.visible=false;
    bheeemaSprite.visible=false;
    RamaSprite.visible=false;
    RavanaSprite.visible=false;
    
    if(mousePressedOver (punchSprite)){
      punches();
      a=1;
    }

    if(frameCount % 100===0){
      villanPunches();
    }

    if(Score===300){
      gameState=0;
      Score=0;
      alert("Hero Won");
    }

    if(Villanscore===150){
      gameState=0;
      Villanscore=0;
      alert("Hero Lost");
    }

    backgroundMusic.play();

    drawSprites();
  }

  if(gameState === 3){
    f.hide();
    background(backgroundimg);
    bheeemaSprite.collide(ground);
    duryodanaSprite.collide(ground);
    duryodanaSprite.visible=true;
    bheeemaSprite.visible=true;
    arjunaSprite.visible=false;
    karnaSprite.visible=false;
    RamaSprite.visible=false;
    RavanaSprite.visible=false;
    
    if(mousePressedOver (punchSprite)){
      punches();
      a=1;
    }

    if(frameCount % 100===0){
      villanPunches();
    }

    if(Score===300){
      gameState=0;
      Score=0;
      alert("Hero Won");
    }

    if(Villanscore===150){
      gameState=0;
      Villanscore=0;
      alert("Hero Lost");
    }

    backgroundMusic.play();

    drawSprites();
  }
}

function punches(){
  p1=createSprite(100,400,20,20);
  p1.scale=0.5
  p1.addImage(punch);
  p1.velocityX=5;
  p1.lifetime = 70;
  p1.rotate=90;
  Score++;
  console.log(Score);
}

function villanPunches(){
  p2=createSprite(400,400,20,20);
  p2.scale=0.5
  p2.addImage(punch2);
  p2.velocityX=-5;
  p2.lifetime = 50;
  Villanscore++;
  console.log(Villanscore);
}