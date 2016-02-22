

function solution(max) {

    var sum = 0, t=0;


    for(var i = 1; i <= max; i++){

       sum+= i*i;
        t+=i;

    }
    var ts = t*t;

    return ts - sum;






}
console.log(solution(100))