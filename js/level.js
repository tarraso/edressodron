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
        this.on.tick("tick", this.update);
    }

    p.reset = function(){
        this.x = 0;
        this.y = 0;
    };
    p.setPlayer = function(player){
        this.player = player;
    }    
    p.Container_update = p.update;
    p.update = function(){
        p.Container_update();
    }
    window.Level = Level;
})();