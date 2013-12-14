(function(){
    var Tile = function(){
        this.initialize();
    }

    var p = Tile.prototype = new createjs.Container();
    p.Container_initialize = p.initialize;

    p.initialize = function(){
        p.Container_initialize();
        var shape = new createjs.Shape();
        this.reset();
        //this.on.tick("tick", this.update);
    }

    p.reset = function(){
        this.x = 0;
        this.y = 0;
    };
    p.Container_update = p.update;
    p.update = function(){
        p.Container_update()
    }
    window.Tile = Tile;
})();