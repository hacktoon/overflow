/*###########################################################
HQuest

File: timer.js
Description: Timer object
Author: Karlisson de Macedo Bezerra
E-mail: theanimage@gmail.com
License: This Javascript file is part of the HQuest game, 
which is licensed under the General Public License version 3.
#############################################################*/


function Timer(obj, method) {
    
    var ID = undefined;
    var delay = 30;
    
    this.count = 0;
    this.range = 12;
	this.obj = obj;
	this.method = method;
    
    this.tick = function(t) {
        t.count <= t.range ? t.count++ : t.count = 0;
        t.method.apply(t.obj);
    }
    
    this.start = function() {
        this.count = 0;
        this.ID = setInterval(this.tick, delay, this);
    }
    
    this.stop = function() {
        clearInterval(this.ID);
        this.count = 0;
    }
}
