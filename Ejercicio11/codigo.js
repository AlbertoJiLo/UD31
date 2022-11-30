//Creamos una función para generar dos dados aleatorios y sumarlos.

function numerosRandom(){

    //Creamos un array para guardar el número de veces que sale un resultado
    var numArray = [0,0,0,0,0,0,0,0,0,0,0];
    var num1;
    var num2;

//Creamos un for para realizar todo el proceso 36000 veces.

for(var i=0; i<36000; i++){

    //Generamos dos números aleatorios.

    num1=Math.floor(Math.random() * 6) +1;
    num2=Math.floor(Math.random() * 6) +1;

    //Sumaremos los dos números

        var numfinal = num1+num2;


    //Dependiendo del resultado guardaremos en la posición del array correspondiente que ha salido dicho resultado.

        switch (numfinal){
            case 2:
                numArray[0] =  numArray[0]+1;
                break;
            case 3:
                numArray[1] =  numArray[1]+1;
                break;
            case 4:
                numArray[2] =  numArray[2]+1;
                break;
            case 5:
                numArray[3] =  numArray[3]+1;
                break;
            case 6:
                numArray[4] =  numArray[4]+1;
                break;
            case 7:
                numArray[5] =  numArray[5]+1;
                break;
            case 8:
                numArray[6] =  numArray[6]+1;
                break;
            case 9:
                numArray[7] =  numArray[7]+1;
                break;
            case 10:
                numArray[8] =  numArray[8]+1;
                break;
            case 11:
                numArray[9] =  numArray[9]+1;
                break;
            case 12:
                numArray[10] =  numArray[10]+1;
                break;
        }
}

let registro = document.getElementById("registro");

//Listamos el número de veces que ha salido un resultado agarrando los valores del array.
   registro.innerHTML=("Veces que el resultado de dos dados ha sumado:<br> 2: "+numArray[0]+ 
   "<br>3: "+numArray[1]+
   "<br>4: "+numArray[2]+
   "<br>5: "+numArray[3]+
   "<br>6: "+numArray[4]+
   "<br>7: "+numArray[5]+
   "<br>8: "+numArray[6]+
   "<br>9: "+numArray[7]+
   "<br>10: "+numArray[8]+
   "<br>11: "+numArray[9]+
   "<br>12: "+numArray[10]);
}

numerosRandom();