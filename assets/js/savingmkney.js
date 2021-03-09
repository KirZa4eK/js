// function first() {
//     // Some actions
//     setTimeout( function(){
//         console.log(1, "1.");

//     }, 500 );
// }

// function second(){
//     console.log("4.");
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log("3. i just finished 2.13 lesson1 " + lang);
//     callback();
// }

// function done() {
//     console.log("2. i just finished lesseon2.13")
// }

// learnJS("Abracadabra", done);


// let options = {
//     width: 1024,
//     height: 1024,
//     name: "Test" 
// };

// console.log(options.height);
// options.bool = false;
// options.colors = {
//     border: "black",
//     background: "red"
// };

// delete options.bool;


// console.log(options);

// for (let key in options) {
//     console.log('options ' + key + ' имеет значение ' + options[key]);
// }

// console.log(Object.keys(options).length);

// let arr = ["first", 2, 3, "four", 5];

// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift("1")



// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + " (Массив: " + mass + ')');
// });


// console.log(arr);

// let mass = [1,3,4,6,7];
// for (let key in mass) {
//     console.log(key);
// }

// let mass = [1,3,4,6,7];
// for (let key of mass) {
//     console.log(key);
// }

// let ans = prompt("",""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ["aawe", 'zzz', 'pp', 'rqa'],
//     i = arr.join(', ');
// console.log(i);

// let arr = [1,15,4],
//     i = arr.sort();
// console.log(i);

// let arr = [1,15,4],
//     i = arr.sort(compareNum);

// function compareNum(a,b) {
//     return a-b;
// }

// console.log(i);

// let soldier = {
//     health: 400,
//     armor: 100
// };

// let john = {
//     health: 100
// };

// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor);