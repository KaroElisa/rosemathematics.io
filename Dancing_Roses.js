Rose Rose;

void setup() {
  size(600, 600);
  Rose = new Rose();
  frameRate(60);
  
  delay(5000);
}

void draw() {
  background(0);
  noFill();
  blendMode(ADD);
  translate(width/2, height/2);
  
  float s1 = 2;
  float s2 = 3;
  float s3 = 3;
  
  
  //OUTER LEAF
    stroke(0, 100, 0);
    strokeWeight(1);
    scale(1);
    Rose.display();
  
  //MIDDLE LEAF
    pushMatrix();
    stroke(0, 100, 0, 70);
    strokeWeight(s2);
    scale(0.9);
    Rose.display();
    popMatrix();
    
  //INNER LEAF
    pushMatrix();
    stroke(0, 100, 0, 70);
    strokeWeight(s3);
    scale(0.82);
    Rose.display();
    popMatrix();
  
  //THE ELLIPSE THAT CLEANS THE LEAVES
    fill(0);
    noStroke();
    ellipse(0, 0, 230, 230);
  
  //OUTER ORANGE PEDALS
    pushMatrix();
    stroke(252, 106, 2);
    strokeWeight(s1);
    scale(0.45);
    Rose.display();
    popMatrix();
  
  //ELLIPSE THAT CLEANS THE RED ROSE
    fill(0);
    noStroke();
    ellipse(0, 0, 50, 50);
    
  //MIDDLE ORANGE PEDALS
    pushMatrix();
    stroke(252, 106, 2, 70);
    strokeWeight(s2);
    scale(0.35);
    Rose.display();
    popMatrix();
    
  //INNER ORANGE PEDALS
    pushMatrix();
    stroke(252, 106, 2, 70);
    strokeWeight(s3);
    scale(0.27);
    Rose.display();
    popMatrix();
    
  //OUTER RED PEDALS 
    pushMatrix();
    stroke(234, 10, 142);
    strokeWeight(s1);
    scale(0.7);
    Rose.display();
    popMatrix();
  
  //MIDDLE RED PEDALS
    pushMatrix();
    stroke(234, 10, 142, 70);
    strokeWeight(s2);
    scale(0.6);
    Rose.display();
    popMatrix();
    
  //INNER RED PEDALS
    pushMatrix();
    stroke(234, 10, 142, 70);
    strokeWeight(s3);
    scale(0.52);
    Rose.display();
    popMatrix();
  
  //ALPHA ELLIPSE
    fill(0, 80);
    noStroke();
    ellipse(0, 0, 130, 130);
  
  //INNER ELLIPSE
    fill(0);
    noStroke();
    ellipse(0, 0, 60, 60);
    
  //OUTER YELLOW PEDALS 
    pushMatrix();
    stroke(255, 211, 0);
    strokeWeight(s1);
    scale(0.2);
    Rose.display();
    popMatrix();
    
class Rose {
 
  float scl = 230; 
 
 void display(){
   
  float n = 5;
  float d = frameCount*0.01;
  //float dc = constrain(d, 0.8, 20);
  float k = n/d;
   
 beginShape();
  
  //value of a changes lines into dots
  //multiplying by the denominator makes sure you loop the right amount of times
  //if you don't multiply by d, you get incompfloate shapes
  for (float a=0; a < TWO_PI * d; a+= 0.001){
    
    //constant R (usually cos(k * theta))
    float r = scl * sin(k*a);

    //calculating what x and y equal on a polar grid
    float x = r * cos(a);
    float y = r * sin(a);
    
    //drawing the points
    vertex(x, y);

  }
  endShape(); 
 }
}

}
