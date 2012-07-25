/*Funciones AJAX, para cargar distintas secciones de la web únicamente cargando lo necesario*/
function cargarobjeto(objeto, id,url)
{
if (objeto.readyState == 4) //si se ha cargado completamente
{
document.getElementById(id).innerHTML=objeto.responseText
document.getElementById(id).style.height = "auto";

window.lang.run();

}else //en caso contrario, mostramos un gif simulando una precarga
document.getElementById(id).innerHTML='<img class="center_loader" src="./images/ajax-loader.gif" alt="cargando" />'
}


function Carga(url,id)
{
//Creamos un objeto dependiendo del navegador
var objeto;
if (window.XMLHttpRequest)
{
//Mozilla, Safari, etc
objeto = new XMLHttpRequest();
}
else if (window.ActiveXObject)
{
//Nuestro querido IE
try {
objeto = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
try { //Version mas antigua
objeto = new ActiveXObject("Microsoft.XMLHTTP");
} catch (e) {}
}
}
if (!objeto)
{
alert("No ha sido posible crear un objeto de XMLHttpRequest");
}
//Cuando XMLHttpRequest cambie de estado, ejecutamos esta funcion
objeto.onreadystatechange=function()
{
cargarobjeto(objeto,id,url)
}
objeto.open('GET', url, true) // indicamos con el método open la url a cargar de manera asíncrona
objeto.send(null) // Enviamos los datos con el metodo send
}

/*Activar/Desac efectos de botones del menú*/
function ac(sec){
    var capa = document.getElementById(sec);
        capa.style.display = "block";
        console.log("Activando");

}

function desac(sec){
    var capa = document.getElementById(sec);
    capa.style.display = "none";
        console.log("Desactivando");

}

