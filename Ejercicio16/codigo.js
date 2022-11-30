var horas = document.querySelector("th#horas");
var minutos = document.querySelector("th#minutos");
var segundos = document.querySelector("th#segundos");

setInterval(() => {
    var tiempo = new Date();
    horas.innerHTML = tiempo.getHours();
    minutos.innerHTML = tiempo.getMinutes();
    segundos.innerHTML = tiempo.getSeconds();
}, 1000);
