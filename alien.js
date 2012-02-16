/*###########################################################
HQuest

File: alien.js
Description: The aliens classes
Author: Karlisson de Macedo Bezerra
E-mail: theanimage@gmail.com
License: This Javascript file is part of the HQuest game, 
which is licensed under the General Public License version 3. 
#############################################################*/


function Alien(scr) {
    
    this.x = 0;
    this.y = 0;
    this.model = dom.add(scr);
    this.width = 60;
    this.height = 35;
    this.xspeed = 10;
    this.yspeed = 5;
    this.power = 5;
    
    dom.set_class(this.model, "bug");
    
    //Alien methods 
    this.set_x = function(value) {
        dom.set_X(this.model, value);
        this.x = value;
    }
    
    this.set_y = function(value) {
        dom.set_Y(this.model, value);
        this.y = value;
    }
}
/*
function Bug(display) {
}

function Hooper(display) {
    this.display = display;
    this.model.setAttribute("class", "hooper");
    this.width = 84;
    this.height = 45;
    this.xspeed = 15;
    this.yspeed = 10;
    this.power = 8;
}*/
