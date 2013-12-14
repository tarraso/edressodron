(function(){

    var KEY_LEFT = 37;
    var KEY_RIGHT = 39;

    MAX_SPEED = 50;
    MAX_ROTATION_SPEED = 2;
    ROTATION_FRICTION = 0.95;

    var Player = function(){
        this.initialize();
    }

    var p = Player.prototype = new createjs.Container();
    p.Container_initialize = p.initialize;

    p.initialize = function(){
        p.Container_initialize();
        var shape = new createjs.Shape();
        shape.graphics.beginFill("red").drawRect(-25,-50,50,100).endFill();
        this.addChild(shape);
        this.reset();
        this.on("tick", this.update);
    }

    p.reset = function(){
        this.width = 100;
        this.height = 200;
        this.x = 512;
        this.y = 500;
        this.velocity_x = 0;
        this.velocity_y = -1;
        this.throttle = 10;
        this.rotation_speed = 0;
    };

    p.update = function(){
        this.x += this.velocity_x;
        this.y += this.velocity_y;
        if(KeyReader.isKeyPressed(KEY_LEFT)){
            this.rotation_speed-=0.1;
            this.rotation_speed = Math.max(this.rotation_speed,-MAX_SPEED);
        }
        if(KeyReader.isKeyPressed(KEY_RIGHT)){
            this.rotation_speed+=0.1;
            this.rotation_speed = Math.min(this.rotation_speed,+MAX_SPEED);
        }
        this.rotation_speed *= ROTATION_FRICTION
        this.rotation += this.rotation_speed;
        this.velocity_x = Math.sin(this.rotation/180*Math.PI)*this.throttle;
        this.velocity_y = -Math.cos(this.rotation/180*Math.PI)*this.throttle

    }
    window.Player = Player;
})();