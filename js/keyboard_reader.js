(function(){
    var keys_array = {}
    KeyReader = {
        initialize: function(){
            window.addEventListener("keydown",this.keyDownHandler);
            window.addEventListener("keyup", this.keyUpHandler);
        },
        keyDownHandler: function(evt){
            keys_array[evt.keyCode] = 1;
        },
        keyUpHandler: function(evt){
            if(keys_array[evt.keyCode]){
                delete keys_array[evt.keyCode]
            }

        },
        isKeyPressed: function(key_code){
            if(keys_array[key_code]){
                return true;
            }
            else
            {
                return false;
            }
        }
    };
    window.KeyReader = KeyReader;
})()