/*###########################################################
HQuest

File: bullet.js
Description: Classe que controla os projéteis
Author: Karlisson de Macedo Bezerra
E-mail: theanimage@gmail.com
License: This Javascript file is part of the HQuest game, 
which is licensed under the General Public License version 3.
#############################################################*/


function Bullet(scr, shooter) {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.model = dom.add(scr.game);
    
    this.create = function(vector) {
        this.x = shooter.x + 40;
        this.y = shooter.y + 40;
        this.width = shooter.gun.w;
        this.height = shooter.gun.h;
        
        dom.set_class(this.model, shooter.gun.id);
        dom.set_X(this.model, this.x);
        dom.set_Y(this.model, this.y);
        vector.push(this);
    }

    this.set_x = function(value) {
        dom.set_X(this.model, value);
        this.x = value;
    } 
    
    this.set_y = function(value) {
        dom.set_Y(this.model, value);
        this.y = value;
    } 
}

