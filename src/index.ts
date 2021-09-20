import { testData, testData2, testData3, testData4 } from './data/data';

/*
Task #1
Сделать функцию поиска значений в массиве.

Синтаксис: array_find(arr: array, search: string|regex): string|number[]|null
Пример:
let result = array_find(testData, '/^raf.*!/i') // ["Rafshan"]
let result2 = array_find(testData, "Rafshan") // ["Rafshan"]
*/

const array_find = (arr: any[], search: string | RegExp): string | number[] | null => {
    return arr.find(elem => elem.toString().match(search)) || null;
};

// console.log(array_find(testData, /^raf.*/i));
// console.log(array_find(testData, 'Rafshan'));

/*
Task #2
Сделать функцию подсчета среднего значения, с возможностью исключения не числовых значений

Синтаксис: array_avg(arr: array[, skipNaN: bool = false]): number
Пример:
    let result = array_avg(testData2) // ~265
let result2 = array_avg(testData) // ~420
let result3 = array_avg(testData, true) // ~191
*/

const array_avg = (arr: any[], skipNaN = false): number => {
    let arrLength = arr.length;

    return arr.reduce((acc, el) => {
        if(skipNaN) {
            if(typeof el === 'number') {
                return acc += el;
            }
            return acc;
        } else if (typeof el === 'number' && !Number.isNaN(el)) {
            return acc += el;
        }
        arrLength -= 1;

        return acc;
    }, 0) / arrLength;
};

// console.log(array_avg(testData2)) // ~265
// console.log(array_avg(testData)) // ~420
// console.log(array_avg(testData, true)) // ~191

/*
Task #3
Сделать функцию которая разбивает массив на подмассивы указанной длинны.

Синтаксис: array_chunk(arr: array, count: number): any[]
Пример:
let result = array_chunk(testData2, 2) // [[1, 2], [1990, 85], [24, 5], [7, 8.1]]
*/

const array_chunk = (arr: any[], count: number): any[] => {
    const newArr = [];

    while(arr.length) {
        newArr.push(arr.splice(0, count));
    }

    return newArr;
};

// console.log(array_chunk(testData2, 2)); // [[1, 2], [1990, 85], [24, 5], [7, 8.1]];

/*
Task #4
Сделать функцию которая обрезает массив до указанного значения.

Синтаксис: array_skip_until(arr: array, value: any): any[]
Пример:
let result = array_skip_until(testData, 2) // [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
let result2 = array_skip_until(testData, "Rafshan") // ["Rafshan", "ashan@example.com", true, false]
let result3 = array_skip_until(testData, "asd") // []
*/

const array_skip_until = (arr: any[], value: any): any[] => {
    const item = arr.findIndex(el => el === value);

    if(item !== -1) {
        return [...arr].splice(item, arr.length);
    }
    return [];
};

// console.log(array_skip_until(testData, 2)) // [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
// console.log(array_skip_until(testData, "Rafshan")) // ["Rafshan", "ashan@example.com", true, false]
// console.log(array_skip_until(testData, "asd")) // []

/*
Task #5
Сделать функцию для проверки существования значения в не нормализированном списке данных.

Синтаксис: array_contains(arr: array, search: string|regex): bool
Пример:
let result = array_contains(testData4, '/^raf.*!/i') // true
let result2 = array_contains(testData4, '/^azaza.*!/i') // false
*/

const array_contains = (arr: any[], search: string | RegExp) => {
    return arr.some(el => {
        if(el instanceof Object) {
            return Object.values(el).some(item => item.toString().match(search));
        }
        return el.toString().match(search);
    });
};

// console.log(array_contains(testData4, /^raf.*/i)) // true
// console.log(array_contains(testData4, /^azaza.*/i)) // false
