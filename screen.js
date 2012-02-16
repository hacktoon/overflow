/*###########################################################
Overflow

File: screen.js
Description: The screen configuration
Author: Karlisson de Macedo Bezerra
E-mail: theanimage@gmail.com
License: This Javascript file is part of the Overflow game, 
which is licensed under the General Public License version 3. 
#############################################################*/

function Screen() {
    
    this.model = dom.get("screen");
    this.width = 900;
    this.height = 600;
    this.bg = "bg/space4.jpg";
   
    //Guarda a tela atual
    this.current = "splash";
    
    this.game = dom.get("game");

    this.show = function(scr) {
        var model = dom.get(scr);
        dom.show(model);
    }
    
    this.hide = function(scr) {
        var model = dom.get(scr);
        dom.hide(model);
    }

    this.toggle = function(scr) {
        dom.hide(dom.get(this.current));
        this.current = scr;
        dom.show(dom.get(scr));

    }

    this.set_BG = function(bg) {
        var obj = dom.get(this.current);
        dom.set_BG(obj, bg);   
        this.bg = bg;
    }
}
