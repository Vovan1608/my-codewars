function getSum(a, b) {
    if(a === b) {
        return a;
    }else{
        if(a > b) {
            var c = b;
            b = a;
            a = c;
        }
        var sum = 0;
        for(var i = a; i <= b; i++) {
            sum += i;
        }
    }
    return sum;
}

console.log(getSum(-1, 2));