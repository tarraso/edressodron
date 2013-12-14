(function(){
    var Tile = function(){
        this.initialize();
    }

    var p = Tile.prototype = new createjs.Container();
    p.Container_initialize = p.initialize;

    p.initialize = function(x,y){
        p.Container_initialize();
        var shape = new createjs.Shape();
        shape.graphics.beginFill("rgba(50,50,50,1)").rect(0, 0, 50, 50);
        this.addChild(shape)
        this.reset();
        //this.on.tick("tick", this.update);
    }

    p.reset = function(){
        this.x = 0;
        this.y = 0;
        this.width = 50;
        this.height = 50;
    };
    p.Container_update = p.update;
    /*p.update = function(){
        p.Container_update()
    }*/
    window.Tile = Tile;
})();