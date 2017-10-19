
//Detecta si un numero es par o impar
function paridad(numero){
	if(numero%2==0){
		return "par";
	}
	else{
		return "impar";
	}
}

//var x = prompt("Entero");
//var paridad = paridad(x);
//alert(paridad);

//Detecta si la cadena ingresada es MAYUSCULA, minuscula o ambos
function palabras(cadena){
	var Mayusculas = cadena.toUpperCase();
	var minusculas = cadena.toLowerCase();
	if(cadena == Mayusculas){
		alert("Solo son MAYUSCULAS");
	}
	else{
		if(cadena==minusculas){
			alert("Solo son minusculas");
		}
		else{
			alert("MAYUSCULAS & minusculas");
		}
	}
}

//var x = prompt("Cadena");
//palabras(x);

//Determina si la cadena es un palindromo
function palindromo(cadena){
	cadena = cadena.toLowerCase(); //minusculas
	var arreglo = cadena.split(" "); //["aaa", "bbb", ...]
	cadena = arreglo.join("");	//"cadenasinespacios"

	var arreglo = cadena.split(""); //['x', 'x', ...]
	var invertido=[];// = [""];
	//var tamanio=arreglo.length;

	//for (var i=0; i<tamanio;i++){
	for (i in arreglo){
		invertido.unshift(arreglo[i]);
	}
	var comparar = invertido.join("");

	if(cadena==comparar){
		alert("La cadena es palindromo");
	}
	else{
		alert("La cadena no es palindromo");
	}
}

var x = prompt("Cadena");
palindromo(x);
