class contador {
    constructor(valor = 0) {
        this.valor = valor;
    }

    sumar(cantidad = 1) {
        this.valor += cantidad;
    }
}


let Micontador = new contador(0);


let numero = document.getElementById("numero");
let boton = document.getElementById("boton");


boton.addEventListener("click", function() {
    Micontador.sumar();                   
    numero.innerHTML = Micontador.valor; 
     if (Micontador.valor >= 1) {

    window.alert("felicidades, has hecho un click");
    } 

});
