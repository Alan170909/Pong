var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["929f18a1-acf5-4a91-b8ad-d7aaae9fb840","d4f2e40b-ffda-480a-9c26-2e2a38396254","06f1240a-ba57-46c1-b8e7-139ae22fc74c","4d594e47-9b6f-483c-9a15-0b2d8e8ca038"],"propsByKey":{"929f18a1-acf5-4a91-b8ad-d7aaae9fb840":{"name":"Alan","sourceUrl":null,"frameSize":{"x":310,"y":342},"frameCount":1,"looping":true,"frameDelay":12,"version":"Wt5GX8l7O3ttak_OFpupsxbPyOpCuNvt","loadedFromSource":true,"saved":true,"sourceSize":{"x":310,"y":342},"rootRelativePath":"assets/929f18a1-acf5-4a91-b8ad-d7aaae9fb840.png"},"d4f2e40b-ffda-480a-9c26-2e2a38396254":{"name":"Alien","sourceUrl":"assets/api/v1/animation-library/gamelab/EwmTcHfXSWckxh8lnt67ueK2VKQHkNP7/category_retro/retrocreature_18.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"EwmTcHfXSWckxh8lnt67ueK2VKQHkNP7","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/EwmTcHfXSWckxh8lnt67ueK2VKQHkNP7/category_retro/retrocreature_18.png"},"06f1240a-ba57-46c1-b8e7-139ae22fc74c":{"name":"space","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"4d594e47-9b6f-483c-9a15-0b2d8e8ca038":{"name":"tennisball_1","sourceUrl":"assets/api/v1/animation-library/gamelab/j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA/category_sports/tennisball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA/category_sports/tennisball.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

playSound("assets/10879540603.mp3")
var scene = createSprite(200,200)
scene.setAnimation("space")
var playerPaddle= createSprite(390,200,10,100);
    playerPaddle.shapeColor="#3a61c2";
    var computerPaddle= createSprite(10,200,10,100);
    computerPaddle.shapeColor="#cc5256";
    var ball= createSprite(200,200,10,10);
    ball.shapeColor="lightgreen"
    playerPaddle.setAnimation("Alan");
    playerPaddle.scale=0.2
        computerPaddle.setAnimation("Alien");
    computerPaddle.scale=0.2
    ball.setAnimation("tennisball_1")
    ball.scale=0.05
    
    ball.velocityX =0
    ball.velocityY =0;
 

function draw() {
  background("#467d4b");
   
  
  
  createEdgeSprites();
  background("space")
  if (ball.isTouching(bottomEdge)) {
    playSound("assets/category_hits/8bit_splat.mp3", false)
  }
  
  
  
  if (keyDown("up") || keyDown("w")) {
    playerPaddle.y =  playerPaddle.y -5;
    stopSound("assets/jump.mp3")
    playSound("assets/jump.mp3")
  }
    if (keyWentDown("down") || keyDown("s")) {
    playerPaddle.y=playerPaddle.y +5;
        stopSound("assets/jump.mp3")
    playSound("assets/jump.mp3")
  }
    if (keyDown("space")) {
   ball.velocityX = 4
   ball.velocityY = 3;
   }
   
   computerPaddle.y = ball.y;
   
  ball.bounceOff (topEdge);
  ball.bounceOff (bottomEdge);
  ball.bounceOff (playerPaddle);
  ball.bounceOff (computerPaddle);
  playerPaddle.collide(topEdge);
  playerPaddle.collide(bottomEdge);
  
  if (ball.bounceOff(playerPaddle)) {
      ball.velocityX = ball.velocityY * 1.5;
      ball.velocityY = ball.velocityX * 1.5;
      
  }
drawSprites();
stroke("white");
dibujaRed();
}

function dibujaRed(){
  for (var i = 0; i < 400; i = i+20) {
     line (200, i ,200, i+10 );    
  
  }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
