window.onload = function(){
    var player,stage;

    function init() {
        stage = new createjs.Stage("canvas");
        createjs.Ticker.on("tick", tick);
        createjs.Ticker.setFPS(1);
        world = new World();
        world.x = 0; world.y=0;
        world.width = 1024; world.height = 768;
        stage.addChild(world);
        player = new Player();
        world.addChild(player);
        world.setFollowedObject(player);
        stage.update();
    };

    function tick(event){
        stage.update(event);
    };
    init();
    window.player = player;
    window.stage = stage;

};