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

