

function cambiarBanderas(){
    let elemento = document.getElementById("banderaSelect").value;
    if(elemento == 1){
        let elemento= document.getElementById("ejercicio1");
        elemento.style.display = "block";
                document.getElementById("ejercicio2").style.display = "none";
                document.getElementById("ejercicio3").style.display = "none";
                document.getElementById("ejercicio4").style.display = "none";
                document.getElementById("ejercicio5").style.display = "none";
                

    } else if(elemento == 2){
        let elemento= document.getElementById("ejercicio2");
        elemento.style.display = "block";
        document.getElementById("ejercicio1").style.display = "none";
        document.getElementById("ejercicio3").style.display = "none";
        document.getElementById("ejercicio4").style.display = "none";
        document.getElementById("ejercicio5").style.display = "none";
    } else if(elemento == 3){
        let elemento= document.getElementById("ejercicio3");
        elemento.style.display = "block";
        document.getElementById("ejercicio1").style.display = "none";
        document.getElementById("ejercicio2").style.display = "none";
        document.getElementById("ejercicio4").style.display = "none";
        document.getElementById("ejercicio5").style.display = "none";
    } else if(elemento == 4){
        let elemento= document.getElementById("ejercicio4");
        elemento.style.display = "block";
        document.getElementById("ejercicio1").style.display = "none";
        document.getElementById("ejercicio2").style.display = "none";
        document.getElementById("ejercicio3").style.display = "none";
        document.getElementById("ejercicio5").style.display = "none";
    }if(elemento == 5){
        let elemento= document.getElementById("ejercicio5");
        elemento.style.display = "block";
        document.getElementById("ejercicio1").style.display = "none";
        document.getElementById("ejercicio2").style.display = "none";
        document.getElementById("ejercicio3").style.display = "none";
        document.getElementById("ejercicio4").style.display = "none";
    }
}