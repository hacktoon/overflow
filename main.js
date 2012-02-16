/*###########################################################
Overflow

File: main.js
Description: Arquivo principal do jogo, que inicializa as 
             variaveis, define funcoes globais e cria os objetos
Author: Karlisson de Macedo Bezerra
E-mail: theanimage@gmail.com
License: This Javascript file is part of the Overflow game, 
which is licensed under the General Public License version 3.
#############################################################*/


dom.include("game.js");
dom.include("screen.js");
dom.include("bullet.js");
dom.include("ship.js");
dom.include("alien.js");

const UP = 1;
const DOWN = 2;
const LEFT = 3;
const RIGHT = 4;

/*Cria os objetos principais*/
var game;
var display;
var ship;

/*Array for bullets and enemy ships*/
var aliens = new Array();
var bullets = new Array();
var weapons = new Array(
    { id: "laser", w:20, h:2, capacity: 500, speed: 3, damage: 1},
    { id: "plasma", w:20, h:10, capacity: 300, speed: 6, damage: 2 }
);

function log(text, opt) {
    var logged = dom.get("logger");
    logged.value = text;
    dom.set_class(logged, opt);
}

//Handles the pressed keys-----------------
function handle_key(event) {
    var key = event.keyCode;
    
    //Start/pause
    if (key == 13) {
        if (game.started) 
            game.toggle_pause();
        else 
            game.start();
    }
    
    //Info
    if (key == 105 && !game.started) {
        display.show("info");
    }

    if (game.started) {
        //Direcionais pressionadas
        if (key == 37)
            ship.dirx = LEFT;
        if (key == 38)
            ship.diry = UP;
        if (key == 39) {
            ship.dirx = RIGHT;
        }
        if (key == 40)
            ship.diry = DOWN;
        
        //Espaco pressionado
        if (key == 32)
            ship.attacking = true;
    }
}

/*Funcao chamada ao se liberar alguma tecla*/
function release_key(event) {
    var key = event.keyCode;

    if (ship) {
        if (key == 37 || key == 39)
            ship.dirx = 0;
        
        if (key == 38 || key == 40)
            ship.diry = 0;
       
        if (key == 32) 
            ship.attacking = false;
    }
}


/*Teste de colisao*/
function hittest(obj1, obj2) {

    //Reduzir a area de contato
    var r = 4;
    if(obj1.width <= r * 2 || obj1.height <= r * 2 ||
       obj2.width <= r * 2 || obj2.height <= r * 2 )
        r = 0;

    var m1_x1 = obj1.x + r;
    var m1_x2 = obj1.width + obj1.x - (r * 2);
    var m1_y1 = obj1.y + r;
    var m1_y2 = obj1.height + obj1.y - (r * 2);
    
    var m2_x1 = obj2.x + r;
    var m2_x2 = obj2.width + obj2.x - (r * 2);
    var m2_y1 = obj2.y + r;
    var m2_y2 = obj2.height + obj2.y - (r * 2);

    var x_test = (m1_x2 >= m2_x1) && (m1_x1 <= m2_x2);
    var y_test = (m1_y2 >= m2_y1) && (m1_y1 <= m2_y2);

    return (x_test && y_test);
}

/*A funcao que cria e inicia o jogo*/
function init() {
   
    //Criando o objeto game que controla todo o jogo
    game = new Game();
    display = new Screen();
    
    //Declarando as funcoes de callback
    document.onkeydown = handle_key; 
    document.onkeyup = release_key;
    
}

window.onload = init;
