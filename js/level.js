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
        this.last_generated_y = 1500;
    };
    p.setPlayer = function(player){
        this.player = player;
    }
    p.update = function(){
        if(Math.abs(this.last_generated_y - this.player.y)>=2000){
            var t_x = Math.floor(this.player.x/50.0)*50 - 1000;
            var t_y = Math.floor(this.player.y/50.0)*50 - 2000;
            this.generate(t_x,t_y);
            this.last_generated_y = player.y;
        }
    }
    p.generate = function(x_start,y_start){
        var tile_array = new Array(50);
        var i,j;
        for(i=0; i< 50; i++){
            tile_array[i] = new Array(50);
        }
        var stone_groups = Math.floor(Math.random()*20);
        var grass_groups = Math.floor(Math.random()*5);
        var water_groups = Math.floor(Math.random()*3);
        for(i=0; i < stone_groups; i++){
            for(j=0; j< 10; j++){
                var start_x = Math.round(Math.random()*50);
                var start_y = Math.round(Math.random()*50);
                if(!tile_array[i][j]){
                    break;
                }
            }
            var cur_x = start_x;
            var cur_y = start_y;
            var stone_count = Math.floor(Math.random()*50);
            for(j=0; j<stone_count; j++){
                tile_array[cur_x][cur_y] = "stone";
                cur_x += Math.min(Math.max(0,Math.round(-1 + Math.random()*2)),49)
                cur_y += Math.min(Math.max(0,Math.round(-1 + Math.random()*2)),49)
            }
        }
        for(i=0; i<50; i++){
            for(j=0; j<50; j++){
                if(tile_array[i][j]=="stone"){
                    var tile = new Tile();
                    tile.x = x_start + 50*i;
                    tile.y = y_start - 50*j;
                    this.addChild(tile);
                }
            }
        }
    }
    window.Level = Level;
})();
