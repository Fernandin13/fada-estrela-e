var starImg,bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada
var fada,fadaImg;
var vozFada;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    fadaImg = loadAnimation("images/faityImage1.png","images/faityImage2.png");
    vozFada = loadSound("sound/JoyMusic.mp3");
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
    playSoud(vozFada);
    //criar sprite de fada e adicionar animação para fada
    fada = createSprite = (650,30);
    fada.addAnimation(fadaImg);
    fada.scale = 0.5;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw(){
    if(keyStroke == "d"){
        fada.velocityX = 2;
    }
    if(keyStroke == "a"){
        fada.velocityX = -2;
    }
    drawSprites();
}