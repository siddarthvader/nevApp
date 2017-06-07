// var server='http://192.168.1.79:3000/'
// var server="http://127.0.0.1:3000/";
//var server="http://localhost:3000/"
var server="https://enigmatic-savannah-85059.herokuapp.com/";
var api = {
    email: server + 'email',
    pwd: server + 'pwd',
    validateToken: server + 'validateToken',
    logout: server + 'logout',
    invite: server + 'inviteUser',
    getUsers: server + 'getUsers',
    removeUser: server + 'removeUser',
    history: server + 'history',
    scrapeEPS: server + 'scrapeZacksForEPS',
    addNote: server + 'addNote',
    getNote: server + 'getNote',
    editNote: server + 'editNote',
    deleteNote: server + 'deleteNote',
    deleteTokens: server + 'deleteTokens',
    changePwd: server + 'changePwd',
    currencyData: server + 'currencyData',
    getEquitiesData: server + 'getEquitiesData',
    getFuturesData: server + 'getFuturesData',
    fetchYahooWeightage: server + 'fetchYahooWeightage',
    getQuotes:server+'getQuotes'
}
Object.size = function (obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

Array.prototype.removeDuplicate = function () {
    var prims = { "boolean": {}, "number": {}, "string": {} }, objs = [];

    return this.filter(function (item) {
        var type = typeof item;
        if (type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
};

Array.prototype.getDuplicateValues = function () {
    var cache = {};
    var results = [];
    for (var i = 0, len = this.length; i < len; i++) {
        if (cache[this[i]] === true) {
            results.push(this[i]);
        } else {
            cache[this[i]] = true;
        }

    }
    return results;
}

