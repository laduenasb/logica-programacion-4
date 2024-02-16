// Se accede al elemento div para mostrar la secucencia fibonacci con un numero dado

let div_fibonacci = document.getElementById("secuencia");

// Se pide al usuario que ingrese un número positivo mayor a 0

let numero;

do {
	numero = prompt("Ingresa un número positivo mayor a 0: ");
	// Si lo ingresado no es un numero muestra la alerta y vuelve a pedir al usuario que ingrese el número
	if(isNaN(numero) || parseInt(numero)<0){
		alert("Lo que escribiste no es un numero valido, ingresa un número positivo mayor a 0.");
	}
} while(isNaN(numero) || parseInt(numero)<0);

numero = parseInt(numero);

// Se crean los primeros dos elementos de la secuencia

let a = 0;
let b = 1;
if(numero == 1){
	console.log(a);
}
if(numero == 2){
	console.log(`${a}, ${b}`);
}
let secuencia = `${a}, ${b}`;
let p = 0; // Numero actual en la secuencia
if(numero>2){
	for(let i=0;i<numero-2;i++){ // se resta 2 debido a que ya se conocen los dos primeros numeros de la secuencia
		p = a + b; // la suma de los numeros anteriores
		a = b; // se actualiza al numero numero a
		b = p; // ahora b es p
		secuencia+=`, ${p}`;
	}	
}

div_fibonacci.innerHTML=`${numero} numeros en la secuencia Fibonacci: ${secuencia}`;
