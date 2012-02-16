/*###########################################################
Overflow

File: system.js
Description: Classe de abstracao do DOM.
Author: Karlisson de Macedo Bezerra
E-mail: theanimage@gmail.com
License: This Javascript file is part of the Overflow game, 
which is licensed under the General Public License version 3. 
#############################################################*/


function DOM() {
    
    /*Inclui um arquivo javascript no html inserindo a tag style*/
    /*Args: string file - Nome do arquivo a ser incluido */
    this.include = function(file) {
        var script  = document.createElement('script');
        script.src  = file;
        script.type = 'text/javascript';
        
        //isto eh necessario?
        script.defer = true;
        document.getElementsByTagName('head').item(0).appendChild(script);
    }
   
    /*Retorna o elemento HTML atraves de seu ID*/
    /*Args: string ID - ID do elemento */
    this.get = function(ID) {
        if (ID) 
            return document.getElementById(ID);
        else
            log("Erro, ID invalido");
        return;
    }
    
    /*Adiciona um novo elemento e o retorna*/
    /*Args: objeto model - Elemento HTML onde devera ser criado o novo elemento */
    this.add = function(model) {
        var element = document.createElement("div");
        model.appendChild(element);
        return element;
    }

    /*Remove um elemento*/
    /*Args: objeto model  - Elemento de onde o objeto target sera removido
            objeto target - Elemento que sera removido */
    this.remove = function(model, target) {
        model.removeChild(target);
    }

    /*Retorna o atributo left como a posicao X do elemento*/
    /*Args: objeto model - Elemento do qual sera obtido o valor*/
    this.get_X = function(model) {
        return parseInt(model.style.left);
    }
    
    /*Retorna o atributo top como a posicao Y do elemento*/
    /*Args: objeto model - Elemento do qual sera obtido o valor*/
    this.get_Y = function(model) {
        return parseInt(model.style.top);
    }
    
    /*Retorna o atributo width do elemento*/
    /*Args: objeto model - Elemento do qual sera obtido o valor*/
    this.get_width = function(model) {
        return parseInt(model.style.width);
    }
    
    /*Retorna o atributo height do elemento*/
    /*Args: objeto model - Elemento do qual sera obtido o valor*/
    this.get_height = function(model) {
        return parseInt(model.style.height);
    }
   
    /*Atribui ao objeto model a classe prop*/
    /*Args: objeto model - Elemento ao qual sera atribuido a classe
            string prop  - Nome da classe que sera atribuida*/
    this.set_class = function(model, prop) {
        model.setAttribute("class", prop);
    }

    /*Seta o valor do atributo left ao elemento*/
    /*Args: objeto model - Elemento ao qual sera atribuido o valor
            numero value - Valor que sera atribuido*/
    this.set_X = function(model, value) {
        model.style.left = value + "px";
    }
    
    /*Seta o valor do atributo top ao elemento*/
    /*Args: objeto model - Elemento ao qual sera atribuido o valor
            numero value - Valor que sera atribuido*/
    this.set_Y = function(model, value) {
        model.style.top = value + "px";
    }

    /*Seta o valor do atributo width ao elemento*/
    /*Args: objeto model - Elemento ao qual sera atribuido o valor
            numero value - Valor que sera atribuido*/
    this.set_width = function(model, value) {
        model.style.width = value + "px";
    }
    
    /*Seta o valor do atributo height ao elemento*/
    /*Args: objeto model - Elemento ao qual sera atribuido o valor
            numero value - Valor que sera atribuido*/
    this.set_height = function(model, value) {
        model.style.height = value + "px";
    }

    /*Seta a imagem de background do elemento*/
    /*Args: objeto model - Elemento ao qual sera atribuida a imagem
            string bg - url da imagem*/
    this.set_BG = function(model, bg) {
        model.style.backgroundImage = "url(" + bg + ")";
    }

    /*Exibe um elemento*/
    /*Args: objeto model - Elemento que sera exibido*/
    this.show = function(model) {
        model.style.display = "block";    
    }

    /*Oculta um elemento*/
    /*Args: objeto model - Elemento que sera ocultado*/
    this.hide = function(model) {
        model.style.display = "none";    
    }
}

var dom = new DOM();
