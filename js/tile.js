(function(){
    var Tile = function(x,y,type){
        this.initialize(x,y,type);
    }

    var p = Tile.prototype = new createjs.Container();
    p.Container_initialize = p.initialize;

    p.initialize = function(x,y,type){
        p.Container_initialize();
        var shape = new createjs.Shape();
        this.type = type;
        var color;
        if(this.type == "stone"){
            color = "rgba(50,50,50,1)";
        }
        if(this.type == "water"){
            color = "rgba(50,50,255,1)";
        }
        if(this.type == "grass"){
            color = "rgba(50,255,50,1)";
        }
        shape.graphics.beginFill(color).rect(0, 0, 50, 50);
        this.addChild(shape)
        this.reset();
        this.x = x;
        this.y = y;
        //this.on.tick("tick", this.update);
    }

    p.reset = function(){
        this.width = 50;
        this.height = 50;
    };
    p.Container_update = p.update;
    /*p.update = function(){
        p.Container_update()
    }*/
    window.Tile = Tile;
})();