// https://habr.com/ru/post/351874/
//1.
// var str ='fgfggg';
// console.log(str[0]);

// 2.
// var mat = 2 + 3 - 1;
// console.log(mat);

// 3.
// «Почему плохо писать прямо в прототипы базовых типов?»
// Array.prototype.sort = function () {}
// var t = [2, 1, 22];
// t.sort()

// Ожидаемый результат — [1, 2, 22], а вернется undefined. 
// Мы рассчитываем, что стандартные методы сработают согласно документации, но какой-то разработчик можем переопределить метод, и он вернет совершенно неожиданный результат.
// Именно поэтому библиотека prototype.js уступила jQuery. 

//4. Дана функция, она принимает в качестве аргументов строки '*', '1', 'b', '1c', реализуйте ее так, что бы она вернула строку '1*b*1c'
/*
function getStr() {
    return [].slice.call(arguments, 1).join(arguments[0]
    )
    }
    console.log(getStr)

// 5 Дано дерево, надо найти смму всех вершин
Рекурсия
var sum = 0;

function getSum(obj) {
    sum += obj.valueNode;
    if (obj.next != null) {
        for (var i = 0; i < obj.next.length; i++) {
            getSum(obj.next[i]);
        }
    }
}
*/

// CodeWars

// 8 kyu Function 1 - hello world

// Make a simple function called greet that returns the most-famous "hello world!".

function greet() {
    return "hello world!";
  }
  


//

function rentalCarCost(days) {
    const costPerDay = 40;
    const discount = days >= 7 ? 50 : days >= 3 ? 20 : 0;
    
    return days * costPerDay - discount;
}


// задача 3 

function greet (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest'
}


//  задача 4

function stockList(ListOfBooks, listOfCat) {
    if (!listOfBooks.length || !listOfCat.length)
    return " ";

    const bookByCategory = {};

    listOfBooks.forEach(el => {
        const[category, amount] = el.split(' ');
        const catCode = category[0];

        booksbyCategory[catCade] = (booksbyCategory[catCode] || 0) + Number(amount);
    });

    return listOfCat.map(el => {
        return `(${el} : ${bookByCategory[el] || 0})`
    }).join(' - ');
}