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
        if(typeof(this.followed)!="undefined"){
            this.regX = this.followed.x + OFFSET_X;
            this.regY = this.followed.y + OFFSET_Y;
        }
    }
    window.World = World;
})();