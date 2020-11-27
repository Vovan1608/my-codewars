function digitalRoot(n) {
	// Делаем хотябы одну проверку
	do{
		// Преобразуем число в строку
		numNAsStr = String(n);
		// Преобразуем строку в массив
		strAsArr = numNAsStr.split('');
		// Счетчик
		sumOfDig = 0;
		// Проходим по массиву и считаем сумму чисел
		for(i = 0; i < strAsArr.length; i++){
			sumOfDig +=  +(strAsArr[i]); // +(strAsArr[i]) - преобр в число
		}
		// Переприсваиваем
		n = sumOfDig;
	}while(n > 9);
    return sumOfDig;
}

// Решение других товарищей
//function digitalRoot(n) {
//  return (n - 1) % 9 + 1;
//}
console.log(digitalRoot(561));