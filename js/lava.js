(function(){
    var Lava = function(){
        this.initialize()
    }

    var p = Lava.prototype = new createjs.Container();
    
    Lava.prototype.Container_initialize = p.initialize;
    Lava.prototype.initialize = function(){
        this.Container_initialize();
        var shape = new createjs.Shape();
        shape.graphics.beginFill("red").rect(0, 0, 2000, 1000);
        this.addChild(shape);
        this.on("tick", this.update);
        this.reset();
    }

    Lava.prototype.reset = function(){
        this.y = 1000;
    };
    
    Lava.prototype.update = function(){
        this.y-=10;
        this.x= player.x-600;
    }
    window.Lava = Lava;
})();