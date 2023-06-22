//variáveis bolinha
let xBolinha = 300; 
let yBolinha = 200;
let diametro = 30;
let raio = diametro / 2 ;

//variáveis raquete
let xraquete = 5;
let yraquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let velocidadex = 2;
let velocidadey = 6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  movimentoMinhaRaquete();

 
  
  rect(xraquete, yraquete, raqueteComprimento, raqueteAltura)
       
  circle(xBolinha, yBolinha, diametro)
   xBolinha += velocidadex
   yBolinha += velocidadey
  
  
  if (xBolinha + raio  > width ||
    xBolinha - raio < 0){
    velocidadex *= -1;
  }
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    velocidadey *= -1;
    
  }
  
}

  function movimentoMinhaRaquete(){
    if (keyIsDown(UP_ARROW)){
  yraquete -= 10;
    }
    

  if (keyIsDown(DOWN_ARROW)){
  yraquete += 10;
}
  }