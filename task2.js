/* Имеется n групп рабочих. Каждая группа состоит из s (1 ≤ si ≤ 4) рабочих. Необходимо перевезти на строительный объект все группы рабочих на машинах. Каждая машина может перевезти только 4х рабочих, при этом группы делить нельзя, каждую группы нужно перевезти целиком. Требуется посчитать минимальное количество машин необходимых для перевозки рабочих. */

console.log('Let\'s go');

const CAR_CAPACITY = 4;

var groupsCount = 8;
var groupsQty = "2 3 4 4 1 2 3 1";

var groupsQtyArr = groupsQty.split(" ")

if (groupsQtyArr.length < groupsCount)
	throw new Error('Количество данных о группах рабочих меньше ' + groupsCount);

console.log('Количество групп: ' + groupsCount);
console.log('Количество рабочих в группе: ' + groupsQty);
console.log('Вместимость транспорта: ' + CAR_CAPACITY);

groupsQtyArr = groupsQtyArr.sort()

if (groupsQtyArr[groupsQtyArr.length - 1] > CAR_CAPACITY)
	throw new Error('Задача не выполнима, есть группа с количеством человек: ' + groupsQtyArr[groupsQtyArr.length - 1] + " что больше, чем вместимость транспорта: " + CAR_CAPACITY);

console.log(groupsQtyArr);

/*
function getClickCou(v1, v2) {
	ret = Math.abs((v1) - (v2));
	if (ret > 5)
		return 10 - ret;
	return ret;
}

var moveCounter = 0;
for (var cou = 1; cou <= diskCou; cou++) {
	moveCounter += getClickCou(curPositions % 10, secretPositions % 10);
	curPositions = curPositions / 10 | 0;
	secretPositions = secretPositions / 10 | 0;
}

console.log('================');
console.log('Кол-во движений: ' + moveCounter);*/