// Task
// Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

// To judge the number n. If n is one of the above five constants, return one of these string:

// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"
// Other values should return "Input number is xxx". xxx means this number.

// For example:

// whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
// whatNumberIsIt(100) should return "Input number is 100"
// What you need to think about is how to judge it correctly and effectively and don't forget isNaN().


// SOLUTION:

function whatNumberIsIt(n){
    // Проверка на положительную бесконечность
    if (n === Number.POSITIVE_INFINITY) {
        return "Input number is Number.POSITIVE_INFINITY";
    }
    
    // Проверка на отрицательную бесконечность
    if (n === Number.NEGATIVE_INFINITY) {
        return "Input number is Number.NEGATIVE_INFINITY";
    }
    
    // Проверка на NaN - используется функция isNaN()
    if (isNaN(n)) {
        return "Input number is Number.NaN";
    }
    
    // Проверка на максимальное значение числа
    if (n === Number.MAX_VALUE) {
        return "Input number is Number.MAX_VALUE";
    }
    
    // Проверка на минимальное значение числа
    if (n === Number.MIN_VALUE) {
        return "Input number is Number.MIN_VALUE";
    }
    
    // Если ни одно из условий не выполнено, возвращаем стандартное сообщение
    return `Input number is ${n}`;
}
