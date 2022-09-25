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

// arrow functions



// promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('hey todo bem')
        } else {
            reject('ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(console.error())


    class calculator {
        constructor(){
            this.valueA = 0;
            this.valueB = 0;
        }
        sum(valueA, valueB){
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA + this.valueB;
        }
    }

    const calc = new calculator();
    console.log(calc.sum(2, 2));

    const Hello = require('./exportar');

    console.log(Hello());

    function* fibonacci(){
        var fn1 = 1;
        var fn2 = 1;
        while (true){  
          var actual = fn2;
          fn2 = fn1;
          fn1 = fn1 + actual;
          var reset = yield actual;
          if (reset){
              fn1 = 1;
              fn2 = 1;
          }
        }
      }
      
      var secuencia = fibonacci();
      console.log(secuencia.next().value);     // 1
      console.log(secuencia.next().value);     // 1
      console.log(secuencia.next().value);     // 2
      console.log(secuencia.next().value);     // 3
      console.log(secuencia.next().value);     // 5
      console.log(secuencia.next().value);     // 8
      console.log(secuencia.next().value);     // 13
      console.log(secuencia.next(true).value); // 1
      console.log(secuencia.next().value);     // 1
      console.log(secuencia.next().value);     // 2
      console.log(secuencia.next().value);     // 3