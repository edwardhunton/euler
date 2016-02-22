

function solution(max){

    var count = 0;


    for(var i = max; i > 0; i--){

        if(i%3 === 0 || i%5 === 0){

            count+=i;

        }

    }

    return count;



}


console.log(solution(999))