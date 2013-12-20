(function(){
    var Lava = function(){
        this.initialize()
    }

    var p = Lava.prototype = new createjs.Container();
    
    Lava.prototype.Container_initialize = p.initialize;
    Lava.prototype.initialize = function(){
        this.Container_initialize();
        var shape = new createjs.Shape();
        shape.graphics.beginFill("red").rect(0, 0, 5000, 1000);
        this.addChild(shape);
        this.on("tick", this.update);
        this.reset();
    }

    Lava.prototype.reset = function(){
        this.y = 1000;
    };
    
    Lava.prototype.update = function(){
        this.y-=13;
        this.x= player.x-2500;

        if(this.y<player.y){
            reset_all();
        }
    }
    window.Lava = Lava;
})();