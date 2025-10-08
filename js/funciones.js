//funciones

function saluda () {
    console.group('Hello')
}
saluda()
function suma(a, b ){
    return a+b
}
console.log(suma(4, 5))

const resta = function (a, b ){
    return a-b
}
console.log(resta(10, 5))

//arrow funvtions 
const sayHello = () => {
    console.log('Hello')
}

sayHello()

const multiplica = (a, b) => a*b

console.log(multiplica (10, 5))

const duplica = n => n * 2

console.log(duplica(5))

//funciones de su orden superior 
const ejecuta = (funcion, a , b ) => {
    funcion(a, b)
    return funcion(a, b)
}
console.log(ejecuta(suma, 20, 10))
console.log(ejecuta(resta, 20, 10))
console.log(ejecuta(multiplica, 20,10))

