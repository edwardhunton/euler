var square =
    "08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08 "+
    "49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00 "+
    "81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65 "+
    "52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91 "+
    "22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80 "+
    "24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50 "+
    "32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70 "+
    "67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21 "+
    "24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72 "+
    "21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95 "+
    "78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92 "+
    "16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57 "+
    "86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58 "+
    "19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40 "+
    "04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66 "+
    "88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69 "+
    "04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36 "+
    "20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16 "+
    "20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54 "+
    "01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48";

function getProd(nums){

   // console.log(nums);

    var s = parseInt(nums[0]);

    for(var i in nums){
        var x = parseInt(i);
        if(nums[x+1] !== undefined) {
            s +=  s * parseInt(nums[x + 1]);

        }
    }

    return s;

}

function testUp(arrays, arrayPos, arrayNum, pow){

    var s = 0, nums = [];

    for(var i = arrayNum; i > arrayNum-pow ; i-- ){

        if(arrays[i] !== undefined) {
            if(arrays[i][arrayPos] !== undefined){
                nums.push(arrays[i][arrayPos]);
            }


        }
     }



    if(nums.length === pow){
        //console.log("TU: "+nums);
        return getProd(nums);
    }

    return 0;

}

function testDown(arrays, arrayPos, arrayNum, pow){

    var s = 0, nums = [];

    for(var i = arrayNum; i <  arrayNum+pow; i++ ){

        if(arrays[i] !== undefined) {
            if(arrays[i][arrayPos] !== undefined) {
                nums.push(arrays[i][arrayPos]);
            }
        }
    }

    if(nums.length === pow){
        console.log("TD: "+nums);
        return getProd(nums);
    }

    return 0;

}

function testLeft(arrays, arrayPos, arrayNum, pow){

    var s = 0, nums = [];

    for(var i = arrayPos; i >  arrayPos-pow; i-- ){

        if(arrays[arrayNum] !== undefined) {

            if(arrays[arrayNum][i] !== undefined){
                nums.push(arrays[arrayNum][i]);
            }



        }
    }

    if(nums.length === pow){
        console.log("TL: "+nums);
        return getProd(nums);
    }

    return 0;

}

function testRight(arrays, arrayPos, arrayNum, pow){

    var s = 0, nums = [];

    for(var i = arrayPos; i <  arrayPos+pow; i++ ){

        if(arrays[arrayNum] !== undefined) {

            if(arrays[arrayNum][i] !== undefined) {

                nums.push(arrays[arrayNum][i]);

            }

        }
    }

    if(nums.length === pow){
        console.log("TR: "+nums);
        return getProd(nums);
    }

   return 0;



}

function testDiagonal(arrays, arrayPos, arrayNum, pow){

    var s = 0, nums = [];

    var rd = 0, ru = 0, ld = 0, lu = 0;

    function diagonalRightDown() {

        nums = [];

        for (var i = arrayPos; i < arrayPos + pow; i++) {


            if (arrays[arrayNum] !== undefined) {

                if (arrays[arrayNum][i] !== undefined) {

                    nums.push(arrays[arrayNum][i]);
                }

            }

            arrayNum++;
        }

        if(nums.length === pow){
            console.log("RD"+nums)
            rd = getProd(nums);
        }

    }

    function diagonalRightUp() {

        nums = [];

        for (var i = arrayPos; i < arrayPos + pow; i++) {


            arrayNum--;

            if (arrays[arrayNum] !== undefined) {

                if (arrays[arrayNum][i] !== undefined) {

                    nums.push(arrays[arrayNum][i]);
                }

            }


        }

        if(nums.length === pow){
            console.log("RU"+nums)
            ru = getProd(nums);
        }

    }

    function diagonalLeftUp() {

        nums = [];

        for (var i = arrayPos; i >= arrayPos - pow; i--) {

            arrayNum--;

            if (arrays[arrayNum] !== undefined) {

                if (arrays[arrayNum][i] !== undefined) {

                    nums.push(arrays[arrayNum][i]);
                }

            }


        }

        if(nums.length === pow){
            console.log("LU"+nums)
            lu = getProd(nums);
        }

    }

    function diagonalLeftDown() {

        nums = [];

        for (var i = arrayPos; i > arrayPos - pow; i--) {


            if (arrays[arrayNum] !== undefined) {

                if (arrays[arrayNum][i] !== undefined) {

                    nums.push(arrays[arrayNum][i]);
                }

            }

            arrayNum++;
        }

        if(nums.length === pow){
            console.log("LD"+nums)
            ld = getProd(nums);
        }

    }
    diagonalRightDown();
    diagonalRightUp();
    diagonalLeftDown();
    diagonalLeftUp();


   // console.log(ru);
   // console.log(rd);
  //  console.log(lu);
  //  console.log(ld);

    var all = [ru, rd, lu, ld];

    var biggest = Math.max.apply(Math, all);

    return biggest;




}


function solution(w, h, pow) {

    var sq = square.split(" ");
    var allArrays = [];
    var a = [];
    var c = 1;

    for(var f = 0; f <= w*h; f++){



        a.push(sq[f]);
        if(c%w === 0 ){
            allArrays.push(a);
            a = [];
        }

        c++;



    }

   // var u = false, d = false, l = false, r = true;

    var row = 0;

    var greatest = 0, s, ind = 0;

    for(var i = 1; i <= w*h; i++){

        console.log("i: "+i)

       // if(u){
        if(i%20 === 0){
            row++;
            ind = 0;
        }

          s =  testUp(allArrays, ind, row, pow);

       // console.log("TU: "+s);

        if(greatest < s){
            greatest = s;
        }

       // }

       // if(d){
        s =   testDown(allArrays, ind, row, pow);

        console.log("TD: "+s);

        if(greatest < s){
            greatest = s;
        }
      //  }

       // if(l){
        s =    testLeft(allArrays, ind, row, pow);

        console.log("TL: "+s);

        if(greatest < s){
            greatest = s;
        }
      //  }

        //if(r){
        s =    testRight(allArrays, ind, row, pow);

        console.log("TR: "+s);


        if(greatest < s){
            greatest = s;
        }

        s = testDiagonal(allArrays, ind, row, pow);

        console.log("TDIAG: "+s);

        if(greatest < s){
            greatest = s;
        }

        ind++;
       // }

    }


return greatest;



}
console.log("SOL "+solution(20, 20, 4))