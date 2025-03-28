export function move_object (circle) {
    const drawCircle = document.querySelector(circle);
    //console.log(drawCircle);
    
    let positionX = 0; // Posición inicial en píxeles
    let positionY = 0; // Posición inicial en píxeles
    const step = 10; // Cantidad de píxeles que se moverá

    document.addEventListener("keydown", (event) => {
        //console.log(event.key);
        if (event.key === "ArrowRight") {
            positionX += step;
            drawCircle.style.left = positionX + "px";
        }
        if (event.key === "ArrowLeft") {
            positionX -= step;
            drawCircle.style.left = positionX + "px";
        }
        if(event.key === "ArrowDown") {
            positionY += step;
            drawCircle.style.top = positionY + "px";
        }
        if(event.key === "ArrowUp") {
            positionY -= step;
            drawCircle.style.top = positionY + "px";
        }
    });
}

export function short_Cuts() {
    //console.log("llame a la funcions shortcuts");
    document.addEventListener("keydown", (event) => {
        console.log("estoy recibiendo el evento", event.key);
        if(event.altKey && event.key === "t") {
            alert("cominación exitosa alt + t")
        }
    });
}