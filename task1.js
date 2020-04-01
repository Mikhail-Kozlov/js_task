const minDiskCou = 1;
const maxDiskCou = 10;

var diskCou = 5;
var curPositions = 000111;
var secretPositions = 111000;

if (diskCou < minDiskCou || diskCou > maxDiskCou)
    console.error('Количкество дисков должно быть от ' + minDiskCou + 'до' + maxDiskCou);

console.log('Let\'s go');