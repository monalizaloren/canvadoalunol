
canvas = document.getElementById("???"); //nome do canvas
ctx= canvas.getContext("2d");

color = "????";  //escolha a cor 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = ???; //largura da linha
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", ???);// nome da função quando o mouse for clicado

function myMousedown(e)
{
    
    color = document.getElementById("???").value; // nome da variável que guarda a cor
    console.log(color);
    
    
     mouseX = e.clientX - canvas.offsetLeft;
     mouseY = e.clientY - canvas.offsetTop;

    ???(mouseX , mouseY);    // nome da função que desenha um círculo
}

function circle(mouseX , mouseY)
{
ctx.beginPath();
ctx.strokeStyle = ???;
ctx.lineWidth = ???;
ctx.arc(mouseX ,mouseY, 40 ,0 , 2*Math.PI);
ctx.stroke();
}



function ???() //nome da função que limpa a area
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

	
