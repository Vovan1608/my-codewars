function addBinary(a,b) {
    // var sum = a + b;
    // var binary = [];
    // while(sum > 0){
    //     if(sum % 2 == 1 || sum == 1){
    //         binary.unshift("1");
    //     }else{
    //         binary.unshift("0");
    //     }
    //     sum = parseInt( sum / 2);
    // }
    // return binary.join("");
    // решение других программистов
    // метод toString может принимать аргумент 
    // определяющий основание системы счисления для 
    // преобразования. Система счисления может быть от 2 до 32. 
    // В нашем случае к двоичной системе (2).
    return (a + b).toString(2);
}

console.log(addBinary(1, 2));