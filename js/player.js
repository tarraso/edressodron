(function(){
    var Player = function(){
        this.initialize();
    }

    var p = Player.prototype = new createjs.Container();
    p.Container_initialize = p.initialize;

    p.initialize = function(){
        p.Container_initialize();
        var shape = new createjs.Shape();
        shape.graphics.beginFill("red").drawCircle(0,0,10);
        this.addChild(shape);
        this.reset();
        //this.on.tick("tick", this.update);
    }

    p.reset = function(){
        this.width = 100;
        this.height = 100;
        this.x = 512;
        this.y = 500;
        this.velocity_x = 0;
        this.velocity_y = -0.001;
        angle = - Math.Pi * 0.5;
    };
    p.Container_update = p.update;
    p.update = function(){
        p.Container_update()
        //this.x += velocity_x;
        //this.y += velocity_y;
    }
    window.Player = Player;
})();