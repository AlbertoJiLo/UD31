//Creamos una función para validar una fecha

function exprFecha(){

    //Creamos una variable donde colocaremos todas las fechas posibles, validando que tengan formato correcto,
    //controlando que febrero no tenga más de 29 días, etc.

    var fechaRegex = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;

    var fechaIntroducida = document.getElementById("fecha").value;
    //Creamos como ejemplo la string de la que extraemos la fecha.

    var nacido = "Nacido el "+fechaIntroducida+" en Donostia"

    //Con un slice extraemos la fecha introducida.

    var fecha = nacido.slice(
        nacido.indexOf("el")+3,
        nacido.lastIndexOf("en")-1,
    );

    //Comprobamos que la fecha cumpla los requisitos

    if(fechaRegex.test(fecha)){
        alert(fecha+" cumple los requisitos de fecha");
    }else{
        alert(fecha+" no cumple los requisitos de fecha");
    }

}

//Creamos una función para validar un mail

function exprMail(){

    var mailDePrueba = document.getElementById("mail").value;

    //Comprobamos que el mail sea válido, usando solo letras, números y .- en el usuario, letras y números en el dominio y
    //letras en un rango de 2 a 3 caracteres en el dominio.

    if (/^[A-Z0-9-.]{1,64}@(?:[A-Z0-9]{1,63}\.)[A-Z]{2,3}$/i.test(mailDePrueba)){
        alert("La dirección de email " + mailDePrueba + " cumple los requisitos.");
    } else {
        alert("La dirección de email es incorrecta ya que no cumple los requisitos.");
    }

}

//Creamos una función para reemplazar ciertos símbolos con un replace

function exprReplace(){

    var text = document.getElementById("text").value;

    //Creamos los regex

    regexText1 = /&/g;
    regexText2 = /"/g;
    regexText3 = /</g;
    regexText4 = />/g;

    textCambiado = text;

    //Reemplazamos los regex con sus respectivos cambios

    textCambiado = textCambiado.replace(regexText1, '&amp;');
    textCambiado = textCambiado.replace(regexText2, '&quot;');
    textCambiado = textCambiado.replace(regexText3, '&lt;');
    textCambiado = textCambiado.replace(regexText4, '&gt;');

    alert(text+" ha cambiado a "+textCambiado);
}

//Creamos una funcióin para validar nombre y apellido y mostrarlos a la inversa

function exprNomapels(){

    var nomApels = document.getElementById("nomapels").value;
    
    //Creamos el regex que comprueba que los apellidos solo puedan tener caracteres latinos, la coma simple y el espacio para separarlos

    var regexNomapels="^[A-ZÑa-zñáéíóúÁÉÍÓÚ' ]+$";

    //Comprobamos que sea válido y si lo es separamos el nombre y el apellido para después mostrarlos a la inversa.

    if(nomApels.match(regexNomapels)==null){
        alert(nomApels +" no es un nombre y apellido válido");
    }else{
        nomApelsArray = nomApels.split(" ");
        nombre = nomApelsArray[0];
        apellido = nomApelsArray[1];

        alert(apellido+", "+nombre);
    }
}

//Creamos una función para borrar una etiqueta script en un codigo html y todo su contenido

function exprBorrarScript(){

    var codigoHtml = document.getElementById("codigohtml").value;

    //Regex que incluye la apertura y el cierre de la etiqueta string y su contenido

    var regexScript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

    //Reemplazamos las posibles etiquetas con una String vacía, con lo que la borramos

    var codigoFinal = codigoHtml.replace(regexScript, "");

    alert(codigoHtml+" ha cambiado a "+codigoFinal);

}
