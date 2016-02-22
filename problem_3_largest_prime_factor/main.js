

function solution(num){

    var a = [], r = Math.sqrt(num);

   for(var i = 2; i < r; i++){


       if(num%i === 0 && i < r){

           if(a.length > 0){

               var m = false;

               for(var x in a){

                   if(i%a[x] === 0){
                      m = true;
                   }



               }

               if(m === false) {
                   a.push(i);
               }

           } else {
               a.push(i);
           }






       }
   }

    return a;







}


console.log(solution(600851475143))