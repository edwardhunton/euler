
function solution(target) {

    var a, b, c;

    for(var a = 0; a <= target; a++){




        for(var b = a+1; b <= target; b++){


            for(var c = b+1; c <= target; c++){

                if(a*a+b*b === c*c && a+b+c===target){
                   return a * b * c;
                }

            }

        }














    }




}
console.log(solution(1000))