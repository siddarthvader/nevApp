// var server='http://192.168.1.79:3000/'
// var server="http://127.0.0.1:3000/";
// var server="http://localhost:3000/"
var server="https://enigmatic-savannah-85059.herokuapp.com/";
var api={
    email:server+'email',
    pwd:server+'pwd',
    validateToken:server+'validateToken',
    logout:server+'logout',
    invite:server+'inviteUser',
    getUsers:server+'getUsers',
    removeUser:server+'removeUser',
    history:server+'history'
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
