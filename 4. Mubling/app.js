function accum(s) {
    // your code
    s = s.toLowerCase();
    var count = -1;
    var str = "";
    for(var i of s) {
        count++;
        i.repeat(count);
        str += i[0].toUpperCase() + i.repeat(count) + "-";
    }
    str = str.substr(0, str.length - 1);
    return str;
    // Решения других программистов
    // return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));





