function math(){
    return 11;
}
function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return math;
}

function returnsAnAnonymousFunction(){
    return function (){
        1 + 1;
    }
}