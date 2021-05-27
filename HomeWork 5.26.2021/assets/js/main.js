//FILTER
function filterArray(number) {
    return number > 5;
}

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
}

const arr = [1, 2, 5, 6, 12, -12, -5, 0, 10, 15, 20];
console.log(arr.filter(filterArray));
console.log(arr.filter(isEven));



//MAP

function divideByTwo(num) {
    return num / 2;
}

const mapArr = [10, 5, 20, 16, -18, 50];
console.log(mapArr.map(divideByTwo));



//SOME, EVERY
const mixArr = [10, 1, false, undefined, 'string', [], {}];

function getBoolean(value) {
    if (typeof value === 'string') {
        return true;
    }
}
console.log(mixArr.some(getBoolean));
console.log(mixArr.every(getBoolean));


//REVERSE
const array = [10, 20, 65, 'Baku', false, true, {}, 45]
console.log(array.reverse());



//FIND
function getMarka(car) {
    return car.marka === 'Bmw';
}

const cars = [
    {
        marka: 'Bmw',
        model: '530',
        price: 25000
    },
    {
        marka: 'Toyota',
        model: 'Prado',
        price: 35000
    }
];

console.log(cars.find(getMarka))




