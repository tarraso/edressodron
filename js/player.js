(function(){

    var KEY_LEFT = 37;
    var KEY_RIGHT = 39;

    var MAX_SPEED = 50;
    var MAX_ROTATION_SPEED = 2;
    var ROTATION_FRICTION = 0.9;
    var ROTATTIONA_A = 0.5;
    var PERPENDICULAR_FRICTION_FACTOR = 1e-2;
    var QUAD_SPEED_FACTOR = 1e-3;
    var CAR_ACCELERATION = 0.5;


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
            this.rotation_speed-= ROTATTIONA_A;
            this.rotation_speed = Math.max(this.rotation_speed,-MAX_SPEED);
        }
        if(KeyReader.isKeyPressed(KEY_RIGHT)){
            this.rotation_speed+=ROTATTIONA_A;
            this.rotation_speed = Math.min(this.rotation_speed,+MAX_SPEED);
        }
        this.rotation_speed *= ROTATION_FRICTION
        this.rotation += this.rotation_speed;
        var car_v_x = Math.sin(this.rotation/180*Math.PI)*this.throttle;
        var car_v_y = - Math.cos(this.rotation/180*Math.PI)*this.throttle;
        var perp_x = this.velocity_x | 1;
        var perp_y = -(car_v_x*perp_x)/car_v_y;
        var perp_l = Math.sqrt(perp_x*perp_x + perp_y*perp_y);
        perp_x = perp_x/perp_l; perp_y = perp_y/perp_l;
        var m = (this.velocity_x*perp_x + this.velocity_y*perp_y);
        var fr_x = perp_x*m;
        var fr_y = perp_y*m;

        var quad_speed = Math.pow(this.velocity_x,2) + Math.pow(this.velocity_y,2);
        var a_x = car_v_x * CAR_ACCELERATION - this.velocity_x*quad_speed*QUAD_SPEED_FACTOR + fr_x*PERPENDICULAR_FRICTION_FACTOR;
        var a_y = car_v_y * CAR_ACCELERATION - this.velocity_y*quad_speed*QUAD_SPEED_FACTOR + fr_y*PERPENDICULAR_FRICTION_FACTOR;
        this.velocity_x += a_x;
        this.velocity_y += a_y;
        console.log(fr_x>0,fr_y>0);
    }
    window.Player = Player;
})();