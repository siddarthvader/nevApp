var server="http://127.0.0.1:3000/";

var api={
    email:server+'email',
    pwd:server+'pwd',
    validateToken:server+'validateToken'
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
