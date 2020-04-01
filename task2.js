/* Имеется n групп рабочих. Каждая группа состоит из s (1 ≤ si ≤ 4) рабочих. Необходимо перевезти на строительный объект все группы рабочих на машинах. Каждая машина может перевезти только 4х рабочих, при этом группы делить нельзя, каждую группы нужно перевезти целиком. Требуется посчитать минимальное количество машин необходимых для перевозки рабочих. */

console.log('Let\'s go');

const CAR_CAPACITY = 4;

// =============== put task params here =============== //
var groupsCount = 12;
var groupsQty = "4 1 4 2 1 2 3 1 3 1 3 1";
// =============== put task params here =============== //

var groupsQtyArr = groupsQty.split(" ")

if (groupsQtyArr.length < groupsCount)
	throw new Error('Количество данных о группах рабочих меньше ' + groupsCount);

if (groupsQtyArr.length > groupsCount)
	console.warn('Данных о группах больше, чем заявленное количество групп: ' + groupsQtyArr.length + ' vs ' + groupsCount + ". Будут использованы первые " + groupsCount + "позиций");

groupsQtyArr = groupsQtyArr.slice(0, groupsCount)

console.log('Количество групп: ' + groupsCount);
console.log('Количество рабочих в группах: ' + groupsQty);
console.log('Вместимость транспорта: ' + CAR_CAPACITY);

groupsQtyArr = groupsQtyArr.sort(function(a, b) {return b - a;})

if (groupsQtyArr[0] > CAR_CAPACITY)
	throw new Error('Задача не выполнима, есть группа с количеством человек: ' + groupsQtyArr[0] + " что больше, чем вместимость транспорта: " + CAR_CAPACITY);

function getMaxGroup(maxValue, arr) {
	return arr.filter(
		function(qty) {return qty <= maxValue;}
	).sort(
		function(a, b) {return b - a;}
	)[0];
}


function removeElemByVal(elemVal, arr) {
	for( var i = 0; i < arr.length; i++){ 
		if ( arr[i] == elemVal) { 
			arr.splice(i, 1);
			break;
		}
	}
	return arr;
}


var sendedTransport = 0;
var restVal = CAR_CAPACITY;
while (groupsQtyArr.length > 0) {
	while(restVal > 0 && groupsQtyArr.length > 0) {
		var reduceVal = getMaxGroup(restVal, groupsQtyArr);
		restVal -= reduceVal;
		groupsQtyArr = removeElemByVal(reduceVal, groupsQtyArr)
	}
	sendedTransport += 1;
	restVal = CAR_CAPACITY;
}

console.log('================');
console.log('Кол-во поездок: ' + sendedTransport);