// call default params for a function in a more convenient way

function newFunction(name, age, country){
    var name = name || 'samuel';
    var age = age || '24';
    var country = country || 'col';
    console.log(name, country, age);
}

//es6

function newFunction2(name = 'Samuel', age = 24, country = 'COL'){
    console.log(name, age, country);
}

// template literals

newFunction();
newFunction2('samuel', 42, 'MX');
newFunction2();

// template literals es6

let hello = "hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//test: you can type within this new format
let epicPhrase2 = `${hello} ${world} you are the man`;
console.log(epicPhrase2);

//multiple lines es5

let lorem = "hola que hace joven un requisa porfavor \n"
+"otra requisita porfavor"
console.log(lorem);
//es6
let lorem2 = `otra requisita aqui caballero
y una mas aqui ilustrisimo`;
console.log(lorem2);

// destructuracion de elementos es5

let person = {
    'name': 'oscar',
    'age': 25,
    'country': 'MX'
}

console.log(person.name, person.age);

// es6

let { name, age, country } = person;
console.log(name, age, country);

// spread operator

let team1 = ['oscar', 'julian', 'ricardo'];
let team2 = ['valeria', 'jesica', 'camila'];
let education = ['david', ...team1, ...team2];

console.log(education);
//es5
let name1 = 'tito';
let age2 = 26;

Obj = {name1: name1, age2: age2};
//es6
obj2 = {name1, age2};
console.log(obj2);