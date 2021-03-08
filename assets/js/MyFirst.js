
'use stric';

// var number = 3;
// var string ="Hello";
// var Boolean = true;
// null;
// undefined;
// var obj = {};

// console.log(4/0);
// console.log('string'*9);

// let something;
// console.log(something)

// let person = {
// 	name: 'John',
// 	age: 25,
// 	isMarried: false

// };

//  console.log(person["name"]);

// let arr = ['plum.png','orange.jpj','apple.bmp'];

// console.log(arr[2]); 

// // alert('Hello World!');

// let answer = +prompt('How old are you?', 'yes');
	

// console.log(typeof(arr));
// console.log(arr[0])
// console.log(typeof(answer));

// console.log("arr"+"-object");
// console.log(4+ +"-object");




// var incr = 10,
// 	decr = 10;


// console.log(incr++);
// console.log(decr--);

// console.log(5%2);
// console.log("2" ====);

let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};





for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", ''),

    if ( (typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b)) !=null && a !='' && b !='' && a.length <50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {

    }
    
}

appData.moneyPerDay = appData.budget /30;

alert("Ежидневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
}

