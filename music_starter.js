
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
   
 

   // vocal bar is red
   let vocal_circle = map(vocal,0,100,400,1500)
   fill(200, 0, 0);
   ellipse(500,500,vocal_circle,vocal_circle)
   fill(0);
   ;
 
   let drum_circle = map(drum,0,100,300,1000)
   // drum bar is green
   fill(0, 200, 0);
   ellipse(500,500,drum_circle,drum_circle)
   fill(0);
   

   let bass_circle = map(bass,0,100,200,500)
   // bass bar is blue
   fill(50, 50, 240);
   ellipse(500,500,bass_circle,bass_circle)
   fill(0);
   ;
 
   let other_circle = map(other,0,100,50,400)
   // other bar is white
   fill(200, 200, 200);
   ellipse(500,500,other_circle,other_circle)
   fill(0);
  ;
 

}