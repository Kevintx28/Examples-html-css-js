console.log('_______VARIABLES CON VALOES______________')
const nombre = "raul";
const apellido = "tola";
const edad = 33;

const nombre2 = "kevin"
const apellido2 = "tola"
const edad2 = 20;
console.log(nombre+' '+apellido+ ' - '+edad+'años')
console.log(nombre2+' '+apellido2+ ' - '+edad2+'años')
console.log('_______ARRRAYS______________')

const persona1 = ["raul", "tola", 33];
const persona2 = ["kevin", "tola", 20];

console.log(persona1.join(' ') + "años");
console.log(persona2.join(' ') + "años");

console.log('_______ARRRAYS CON OBJETOS______________')

const personas = [
    {nombre: 'raul', apellido: 'tola', edad: 33}, // -> 0
    {nombre: 'kevin', apellido: 'tola', edad: 20}, // -> 1
    {nombre: 'claudia', apellido: 'yanki', edad: 20}, // -> 2
    {nombre: 'sasha', apellido: 'quispe', edad: 20}, // -> 3
    {nombre: 'miche', apellido: 'taipe', edad: 20}, // -> 4
    {nombre: 'javi', apellido: 'brañezx', edad: 20}, // -> 5
    {nombre: 'ana', apellido: 'heyu', edad: 20}, // -> 6
]
for (let i = 0; i < 7; i++) {
    
    console.log(personas[i].nombre+' '+personas[i].apellido+ ' - '+personas[i].edad+'años')
}

