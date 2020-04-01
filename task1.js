/* Существует некий замок с n вращающихся дисков. На каждом диске написаны цифры с 0 до 9. Чтобы открыть замок нужно поворачивать диски до тех пор, пока они не образуют секретную комбинацию. Существует только одна секретная комбинация. За одно действие можно прокрутить только один диск и только на одну цифру вперед или назад. Требуется посчитать минимальное кол-во действие, для того, чтобы открыть замок. */

console.log('Let\'s go');

const MIN_DISK_COU = 1;
const MAX_DISK_COU = 10;

var diskCou = 6;
var curPositions = 821906;
var secretPositions = 797083;

if (diskCou < MIN_DISK_COU || diskCou > MAX_DISK_COU)
	throw new Error('Количество дисков должно быть от ' + MIN_DISK_COU + ' до ' + MAX_DISK_COU);

console.log('Количество дисков: ' + diskCou);
console.log('Текущая позиция дисков: ' + curPositions);
console.log('Требуемая позиция дисков: ' + secretPositions);

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
console.log('Кол-во движений: ' + moveCounter);