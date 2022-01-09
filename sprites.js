var mountainImages = [ 'imgs/scene/mountains01.jpg', 'imgs/scene/mountains02.png', 'imgs/scene/mountains03.jpg', 'imgs/scene/mountains04.jpg'];
var cloudImages = ['imgs/scene/cloud01.jpg', 'imgs/scene/cloud2.jpg']
var brickImages = [ 'imgs/blocks/blocks001.png', 'imgs/blocks/blocks002.png', 'imgs/blocks/blocks003.png'];
var coinsImags = [ 'imgs/blocks/coin01.png', 'imgs/blocks/coin05.png' ];
var pipeImages = [ 'imgs/scene/tube.png' ];
var platformImages = [ 'imgs/scene/platform.png' ];
var enemyMushroomImage = [ 'imgs/enemy/enemyMushroom01.png','imgs/enemy/enemyMushroom02.png'];

var spriteNumber={
mountain: 6,
cloud: 10,
brick: 5,
pipe: 5,
coin: 10,
enemyMushroom: 5,
}

function setSprites() {
setSpriteGroups();
loadStaticObjects( mountains, mountainImages, spriteNumber.mountain ,1.5, gameConfig.screenX, gameConfig.screenY-35, gameConfig.screenY-35);
loadStaticObjects( clouds, cloudImages, spriteNumber.cloud, 0, gameConfig.screenX, 20, gameConfig.screenY*0.5 );
loadStaticObjects( bricks, brickImages, spriteNumber.brick, gameConfig.screenX*0.1, gameConfig.screenX*0.9, gameConfig.screenY*0.1, gameConfig.screenY*0.7 );
loadStaticObjects( pipes, pipeImages, spriteNumber.pipe, 50, gameConfig.screenX, gameConfig.screenY-20, gameConfig.screenY+10 );
loadAnimatedObjects( coins, coinsImags, 'shine', spriteNumber.coin, "get", false, 0, gameConfig.screenX, gameConfig.screenY*0.35, gameConfig.screenY*0.75 );
loadAnimatedObjects( enemyMushrooms, enemyMushroomImage, 'move', spriteNumber.enemyMushroom, 'live', true, gameConfig.screenX*0.5, gameConfig.screenX, gameConfig.screenY*0.35, gameConfig.screenY*0.75 );
loadPlatforms();
}

function setSpriteGroups() {
bricks = new Group();
enemyMushrooms = new Group();
clouds = new Group();
mountains = new Group();
pipes = new Group(); 
coins = = new Group();
platforms = new Group();
}

function loadStaticObjects( group, imageArray, spriteNumber, randomPosStartX, randomPosEndX, randomPosStartY, randomPosEndY) 
{
for(var i = 0; i < spriteNumber; i++) 
{
var randomNumber = floor((random()*10)%imageArray.length);
var img = loadImage(imageArray[randomNumber]);

group[i] = createSprite(random(randomPosStartX, randomPosEndX), random(randomPosStartY, randomPosEndY));
group[i].addImage(img);
};
};

function loadAnimatedObjects( group, imageArray, animationName, spriteNumber, spriteStatusName, spriteStatusValue,  randomPosStartX, randomPosEndX, randomPosStartY, randomPosEndY) {
  for(var i = 0; i < spriteNumber; i++) {
    
group[i] = createSprite(random(randomPosStartX, randomPosEndX), random(randomPosStartY, randomPosEndY));
group[i].addAnimation(animationName, imageArray[0], imageArray[1]);
group[i].scale = 1.5;
group[i][spriteStatusName] = spriteStatusValue;
};
};

function loadPlatforms() {

}