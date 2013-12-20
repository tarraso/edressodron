(function(){
    var Level = function(){
        this.initialize();
    }

    var p = Level.prototype = new createjs.Container();
    p.Container_initialize = p.initialize;

    Level.prototype.initialize = function(){
        p.Container_initialize();
        var shape = new createjs.Shape();
        this.reset();
        this.on("tick", this.update);
    }

    Level.prototype.reset = function(){
        this.x = 0;
        this.y = 0;
        this.last_generated_y = 1500;
        this.removeAllChild();
    };
    Level.prototype.setPlayer = function(player){
        this.player = player;
    }
    Level.prototype.update = function(){
        if(Math.abs(this.last_generated_y - this.player.y)>=2000){
            var t_x = Math.floor(this.player.x/50.0)*50 - 1000;
            var t_y = Math.floor(this.player.y/50.0)*50 - 2000;
            this.generate(t_x,t_y);
            this.last_generated_y = player.y;
        }
    }
    Level.prototype.generate = function(x_start,y_start){
        var tile_array = new Array(50);
        var set_tile = function(x, y, type ){
            if((x>=0)&&(y>=0)&&(x<50)&&(y<50)){
                tile_array[x][y] = type;
            }
        }
        var i,j;
        for(i=0; i< 50; i++){
            tile_array[i] = new Array(50);
        }
        var stone_groups = Math.floor(Math.random()*10);
        var grass_groups = Math.floor(Math.random()*8);
        var water_groups = Math.floor(Math.random()*6);
        for(i=0; i < stone_groups; i++){
            var cur_x = Math.min(Math.floor(Math.random()*50), 49);;
            var cur_y = Math.min(Math.floor(Math.random()*50), 49);;
            var stone_count = Math.floor(Math.random()*50);
            for(j=0; j<stone_count; j++){
                set_tile(cur_x,cur_y,"stone");
                cur_x += Math.min(Math.max(0,Math.round(-1 + Math.random()*2)),49);
                cur_y += Math.min(Math.max(0,Math.round(-1 + Math.random()*2)),49);
            }
        }
        for(i=0; i< grass_groups; i++){
            var cur_x = Math.round(Math.random()*50);
            var cur_y = Math.round(Math.random()*50);
            var grass_count = Math.floor(Math.random()*200);
            for(j=0; j<grass_count; j++){
                set_tile(cur_x,cur_y,"grass");
                cur_x += Math.min(Math.max(0,Math.round(-2 + Math.random()*4)),49)
                cur_y += Math.min(Math.max(0,Math.round(-2 + Math.random()*4)),49)
            }
        }
        for(i=0; i< water_groups; i++){
            var cur_x = Math.round(Math.random()*50);
            var cur_y = Math.round(Math.random()*50);
            var generate_water_tiles = function(cur_x,cur_y,amount){
                set_tile(cur_x,cur_y,"water");
                if((amount>0)&&(cur_x>0)&&(cur_x<49)&&(cur_y>0)&&(cur_y<49)){
                    generate_water_tiles(cur_x-1,cur_y-1,amount-Math.random()*5);
                    generate_water_tiles(cur_x-1,cur_y+1,amount-Math.random()*5);
                    generate_water_tiles(cur_x+1,cur_y-1,amount-Math.random()*5);
                    generate_water_tiles(cur_x+1,cur_y+1,amount-Math.random()*5);
                    generate_water_tiles(cur_x-1,cur_y,amount-Math.random()*5);
                    generate_water_tiles(cur_x+1,cur_y,amount-Math.random()*5);
                    generate_water_tiles(cur_x,cur_y-1,amount-Math.random()*5);
                    generate_water_tiles(cur_x,cur_y+1,amount-Math.random()*5);
                }                    
            }
            generate_water_tiles(cur_x, cur_y, Math.random()*5);
        }
        for(i=0; i<50; i++){
            for(j=0; j<50; j++){
                if(typeof(tile_array[i][j])!=="undefined"){
                    var tile = new Tile(x_start + 50*i, y_start - 50*j, tile_array[i][j]);
                    this.addChild(tile);
                }
            }
        }
    }
    window.Level = Level;
})();
