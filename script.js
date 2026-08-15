class Contador {

    valor = 0;

    sumar() {
        this.valor = this.valor + 1;
    }
}
let miContador = new Contador();

let numero = document.getElementById("numero");
let boton = document.getElementById("boton");
let inicio = document.getElementById("inicio");
let contador = document.getElementById("contador");

  inicio.onclick = function() {

    inicio = "none";
    contador.style.display = "block";
 }

boton.onclick = function() {
    miContador.sumar();
    numero.innerHTML = miContador.valor;
    
 if (miContador.valor >= 1) {

    window.alert("felicidades, has hecho un click");
    } 
};