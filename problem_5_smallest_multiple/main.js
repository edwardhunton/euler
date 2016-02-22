

function solution(max) {

    var i = max, a = false;

    do {

        var mod = true;

        for (var n = 2; n <= max; n++) {

            if (i % n === 0) {
                mod = true
            } else {
                mod = false;
                break;
            }

        }

        if(mod === true){
            a = true;
        } else {
            i++;
        }
    }

    while (a ===  false)
    {

        return i;

    }

}
console.log(solution(20))