
function isPrime(n){

    var isPrime = true;

    for(var i = 2; i <= Math.sqrt(n); i++){

        if( n % i == 0) {
            isPrime = false;
        }

    }

    return isPrime;



}


function solution(max) {

    var c = 0, i = 2, p = [];


    do {

        if(isPrime(i)){

            c++;
            p.push(i);

        }


        if(c < max){
            i++;
        }


    } while(c < max){

        return i;

    }





}
console.log(solution(10001))