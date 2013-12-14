(function(){
    var Level = function(){
        this.initialize();
    }

    var p = Level.prototype = new createjs.Container();
    p.Container_initialize = p.initialize;

    p.initialize = function(){
        p.Container_initialize();
        var shape = new createjs.Shape();
        this.reset();
        this.on("tick", this.update);
    }

    p.reset = function(){
        this.x = 0;
        this.y = 0;
    };
    p.setPlayer = function(player){
        this.player = player;
    }    
    p.update = function(){
        if(Math.random()*200<1){
            var tile = new Tile();
            tile.x = this.player.x;
            tile.y = this.player.y-2000;
            this.addChild(tile);
        }
    }
    window.Level = Level;
})();