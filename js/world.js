(function(){
    var OFFSET_X = -500;
    var OFFSET_Y = -500;

    var World = function(x,y){
        this.regX = x | 0;
        this.regY = y | 0;
        this.initialize()
    }

    var p = World.prototype = new createjs.Container();
    
    p.Container_initialize = p.initialize;
    p.initialize = function(){
        p.Container_initialize();
        this.reset();
        this.on("tick", this.update)
    }

    p.reset = function(){
        this.regX = 0;
        this.regY = 0;
    }
    p.setFollowedObject = function(followed){
        this.followed = followed;
    }
    p.update = function(event){
        var followed = this.followed;
        var velocity = Math.sqrt(followed.velocity_x*followed.velocity_x+followed.velocity_y*followed.velocity_y);
        var scale = Math.max(0.3, Math.min(1, 1/velocity));
        this.scaleX = this.scaleY = scale;
        this.regX = this.followed.x + OFFSET_X/scale;
        this.regY = this.followed.y + OFFSET_Y/scale;
    }

    window.World = World;
})();