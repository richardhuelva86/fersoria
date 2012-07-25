var i=0;
var array = ["./images/foto1.jpg","./images/foto2.jpg","./images/foto3.jpg","./images/foto4.jpg"];

function rotar(){
if(document.getElementById("foto")!=null)
{
	document.getElementById("foto").src=array[i];
	i=(i+1)%array.length;
	setTimeout("rotar()",10000);
}
}

