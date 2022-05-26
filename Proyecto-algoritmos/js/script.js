document.getElementById('player').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 60;
necesarios = 30;

matriz= new Array();

for(let x=0;x<=5;x++){
    matriz[x]= new Array();
    for(let y=0;y<=5;y++){
        matriz[x][y]=x+y;
    }
}
function llenarMatriz(){
    document.getElementById("matriz").innerHTML = matriz;

}


function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   randNum =  Math.round(Math.random()*500); 
   randNum2 =  Math.round(Math.random()*500);
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";
   if (puntos == 30) {
    alert("ganaste");
   }
}



function restarTiempo() {
	tiempo--;
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 
	if (tiempo == 0) {
		alert("perdiste maestro");
		tiempo = 0;
		puntos = 0;
	}
}

setInterval(restarTiempo,1000);