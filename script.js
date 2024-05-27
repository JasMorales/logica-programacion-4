function generarFibonacci () {
    let numeroInput = document.getElementById("numeroInput").value;
    let numero = parseInt(numeroInput);

    if (isNaN(numero) || numero < 1) {
        alert("Ingresa un NUMERO valido");
        document.getElementById("resultado").innerText = "";
        return;
    }
    let fibonacciSerie = obtenerSerieFibonacci(numero);
    document.getElementById("resultado").innerText = fibonacciSerie.join(", ");

}

function obtenerSerieFibonacci (n) {
    let serie = [];
    let a=0, b=1, temp;

    for (let i=0; i<n; i++){
        serie.push(a);
        temp = a+b;
        a=b;
        b=temp;
    }
    return serie;
}