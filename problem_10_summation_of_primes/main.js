function isPrime(n){


    var isPrime = true;

    for(var i = 2; i <= Math.sqrt(n); i++){

        if( n % i == 0) {
            isPrime = false;
        }

    }

    return isPrime;


}



function solution(cap) {

    var all = 0;

    for(var i = 2; i <cap; i++){
        if(isPrime(i)){
            all+=i;
        }
    }

    return all;



}
console.log(solution(2000000))