

function solution(max){

   var a = [1,2], count = 2, fib;

    for(var x = 1; a[x] < max; x++){

       fib =  a[x-1]+a[x];
        if(fib > max){
            return count;
        }
        a.push(fib);
        if(fib%2 === 0 && fib < max){

            count+=fib;

        }

    }







}


console.log(solution(4000000))