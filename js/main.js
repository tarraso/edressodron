window.onload = function(){

    function init() {
        stage = new createjs.Stage("canvas");
        createjs.Ticker.on("tick", tick);
        createjs.Ticker.setFPS(60);
        world = new World();
        world.x = 0; world.y=0;
        world.width = 1024; world.height = 768;
        stage.addChild(world);
        player = new Player();
        world.setFollowedObject(player);
        level = new Level();
        level.setPlayer(player);
        world.addChild(level);
        world.addChild(player)
        lava = new Lava();
        world.addChild(lava);
        KeyReader.initialize();
    };

    function tick(event){
        stage.update(event);
    };
    init();

};