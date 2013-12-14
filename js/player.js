(function(){

    var KEY_LEFT = 37;
    var KEY_RIGHT = 39;
    var Player = function(){
        this.initialize();
    }

    var p = Player.prototype = new createjs.Container();
    p.Container_initialize = p.initialize;

    p.initialize = function(){
        p.Container_initialize();
        var shape = new createjs.Shape();
        shape.graphics.beginFill("red").drawCircle(0,0,10).endFill();
        shape.graphics.beginStroke("black").moveTo(0,0).lineTo(0,-10);
        this.addChild(shape);
        this.reset();
        this.on("tick", this.update);
    }

    p.reset = function(){
        this.width = 100;
        this.height = 100;
        this.x = 512;
        this.y = 500;
        this.velocity_x = 0;
        this.velocity_y = -1;
        this.throttle = 1;
    };

    p.update = function(){
        this.x += this.velocity_x;
        this.y += this.velocity_y;
        if(KeyReader.isKeyPressed(KEY_LEFT)){
            if(this.rotation>-40) this.rotation-=0.5;
        }
        if(KeyReader.isKeyPressed(KEY_RIGHT)){
            if(this.rotation<=40) this.rotation+=0.5;
        }
        this.velocity_x = Math.sin(this.rotation/180*Math.PI)*this.throttle;
        this.velocity_y = -Math.cos(this.rotation/180*Math.PI)*this.throttle

    }
    window.Player = Player;
})();