/*###########################################################
Overflow

File: ship.js
Description: The ship class
Author: Karlisson de Macedo Bezerra
E-mail: theanimage@gmail.com
License: This Javascript file is part of the Overflow game, 
which is licensed under the General Public License version 3. 
#############################################################*/


function Ship(scr) {
    
    this.max_power = 100;
    this.power = 100;
    this.width = 100;
    this.height = 50;
    this.ammo = 0;
    this.score = 0;
    
    this.xspeed = 10;
    this.yspeed = 8;
    this.dirx = 0;
    this.diry = 0;
    this.x = 150;
    this.y = 200;
    
    this.model = dom.add(scr.model);
    this.attacking = false;
    this.gun = weapons[0];

    //Ship constructor
    dom.set_class(this.model, "ship");
    dom.set_X(this.model, this.x);
    dom.set_Y(this.model, this.y);

    this.ammo = this.gun.capacity;

    //Ship methods 
    this.set_x = function(value) {
        dom.set_X(this.model, value);
        this.x = value;
    }
    
    this.set_y = function(value) {
        dom.set_Y(this.model, value);
        this.y = value;
    }
    
    this.move = function() {
        if (ship.dirx == LEFT && this.x > 0 )
            this.set_x(this.x - this.xspeed);
    
        if (this.dirx == RIGHT && this.x < scr.width - this.width ) 
            this.set_x(this.x + this.xspeed);

        if (this.diry == UP && this.y > 10 )
            this.set_y(this.y - this.yspeed);
    
        if (this.diry == DOWN && this.y < scr.height - this.height - 10 )
            this.set_y(this.y + this.yspeed);
    }

    this.attack = function() {
        if (this.ammo > 0) {

            /*Criando um projetil, enviando a tela do jogo 
            e o objeto que disparou.*/
            var bullet = new Bullet(scr, ship);

            //Coloca o projetil no vetor de projeteis e envia suas dimensoes
            bullet.create(bullets);

            this.ammo--;
            game.update_panel();
        }
        else
            log("Out of ammo! Recharge!!!", "blink");
    }
}
