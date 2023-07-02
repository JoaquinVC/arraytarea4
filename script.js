const palabras = ['pepe','buen dia', 'hola', 'soy juan', 'hola'];
let contadorHola = 0

for (let i = 0; i < palabras.length; i++){
    if(palabras[i] == 'hola'){
        contadorHola++
    }
}

alert("La cantidad de veces que aparece el string 'hola' son: " + contadorHola)

const notas = [8, 9, 4];
let suma = 0;

for (let i = 0; i < notas.length; i++) {
    suma = notas[i] + suma ; 
}

let promedio = suma / notas.length

alert(`El promedio final es: ${promedio}`);

const mensajes = ['hola a todos', 'buenas', 'me gusta JS'];
let total = 0;

for (let i = 0; i < mensajes.length; i++) {
    console.log('La cantidad de caracteres de el mensaje: "' + mensajes[i] + '"es: ' + mensajes[i].length);
    total = mensajes[i].length + total;
}

if (total < 20 ) {
    alert('el usuario recién empieza')
} 
else if (total < 50) {
    alert('el usuario es nuevo')
} else {
    alert('el usuario es recurrente')
}