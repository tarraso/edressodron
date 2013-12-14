(function(){
    var MyContainer = function(stage){
        this.initialize();
    }
    MyContainer.prototype = new createjs.Container();
    MyContainer.initialize = function(){
        this.prototype.initialize();
    }
    MyContainer.update = function(){
        this.prototype.update();
    }

    window.MyContainer = MyContainer;
})();