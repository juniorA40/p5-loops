function setup(){
    createCanvas(600,400);
    background(0);
    
}

function draw(){
    strokeWeight(4);
    stroke(255);
    
    var x = 0;
    while(x<650){
        fill(255,0,0);
         ellipse(x,255, 25, 25);
    x = x + 50;
    }
    
    for(var x = 0; x < 650; x = x + 10){
        fill(0,0,255);
        ellipse(x, 100, 25,25);
    }
    
}
  
    
    