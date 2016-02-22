

function solution(){

    var arr  = [];

    for(var i = 999; i > 100; i--) {

        for(var n = 999; n > 100; n--){
            var m = n*i;
            if(isPal(m)){
                arr.push(m);
            }
        }

    }

    return Math.max.apply(Math, arr);


}

function isPal(i){
    return i.toString() == i.toString().split("").reverse().join("");
}


console.log(solution())