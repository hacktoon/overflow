/*###########################################################
HQuest

File: game.js
Description: A engine do jogo
Author: Karlisson de Macedo Bezerra
E-mail: theanimage@gmail.com
License: This Javascript file is part of the HQuest game, 
which is licensed under the General Public License version 3. 
#############################################################*/

dom.include("timer.js");

function Game() {
    
    this.timer;

    this.paused = false;
    this.started = false;

    this.level = 1;
    //this.zones = new Array();
    
    this.update_panel = function() {
        dom.get("power").value = ship.power;
        dom.get("ammo").value = ship.ammo;
        dom.get("score").value = ship.score;
    }
    
    /*Remove os projéteis do vetor*/
    this.remove_bullet = function(i) {
        var len = bullets.length - 1;
        var tmp;
        
        dom.remove(display.game, bullets[i].model);
        tmp = bullets[i];
        bullets[i] = bullets[len];
        bullets[len] = tmp;
        bullets.pop();
    }
    
    /*Funcao que atualiza o vetor de projeteis*/
    this.update_bullets = function() {
        for (var b in bullets) {
            var bullet = bullets[b];
            var xpos = bullet.x; 
            var ypos = bullet.y; 
            
            //O laser saiu da tela?
            if (xpos < display.width - 40 ) {
                bullet.set_x(xpos + 30);
                
                for (a in aliens) {
                    var alien = aliens[a];
                    
                    if (hittest(bullet, alien)) {
                        ship.score += 20;
                        this.destroy_alien(a);
                        this.remove_bullet(b);
                        this.update_panel();
                    }
                }
            }
            else
                this.remove_bullet(b);
        }
    }    
    
    /*Cria aliens aleatoriamente*/
    this.create_alien = function() {
        var alien = new Alien(display.game);
        
        alien.set_x(display.width - 20);
        alien.set_y((Math.random() * display.height - 60) + 30);

        aliens.push(alien);
    }
    
    /*Remove o alien do vetor e remove o elemento*/
    this.destroy_alien = function(i) {
        var len = aliens.length - 1;
        var tmp;
        
		dom.remove(display.game, aliens[i].model);  //aqui ele deve passar apenas o objeto
        aliens[i] = undefined;

        tmp = aliens[i];
        aliens[i] = aliens[len];
        aliens[len] = tmp;
        aliens.pop();
    }

    /*Atualiza o vetor de aliens*/
    this.update_aliens = function() {
        for (var a in aliens) {
            var alien = aliens[a];
            var xpos = alien.x;
            var ypos = alien.y;
           
            //Teste de colisao com a nave
            if (hittest(ship, alien)) {
                if (ship.power - 20 <= 0) {
                    ship.power = 0;
                    log("Game Over", "blink");
                }
                else
                    ship.power -= 20;
                this.destroy_alien(a);
                this.update_panel();
            }

            //Se o alien ainda nao saiu da area visivel
            if (xpos >= -10 ) {
                
                //Enquanto o alien nao ultrapassar a nave, ele nao para de segui-la
                if (xpos >= ship.x) {
                    alien.set_x(xpos - 6);
                    
                    if (ypos < ship.y - 10)
                        alien.set_y(ypos + 2);
                    else if (ypos > ship.y + 10)
                        alien.set_y(ypos - 2);
                }
                else {
                    //se o alien ultrapassou a nave, acelera
                    alien.set_x(xpos - 10);
                }
            }
            else
                this.destroy_alien(a);
        }
    }
    
    /*O loop principal do jogo, chamado no objeto timer*/
    this.update = function() {
        ship.move();
        
        if (this.timer.count == 3 && aliens.length < 8) {
            this.create_alien();
        }

        if (ship.attacking) {
            if (this.timer.count % 7 == 0)
                ship.attack();
        }

        this.update_bullets();
        this.update_aliens();
    }
    
    /*Funcao que inicia o jogo*/
    this.start = function() {
        this.started = true;

        //Iniciando o timer do jogo
        this.timer = new Timer(this, this.update);
        this.timer.start();
    
        //Exibindo a tela do jogo
        display.toggle("game"); //screen.game();
        
        //Criando a nave
        ship = new Ship(display);

        //Atualizando o painel com os dados
        this.update_panel();
        dom.get("logger").value = "";
        
    }
   
    this.toggle_pause = function() {
        if (this.paused) {
            display.hide("pause");
            this.paused = false;
            this.timer.start();
        } else {
            display.show("pause");
            this.paused = true;
            this.timer.stop();
        }
    }

    /*Funcao que reinicializa as variaveis do jogo*/
    this.reset = function() {
        this.level = 1;
        this.started = false;
        this.paused = false;
    }
    
}
