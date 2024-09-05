let radio;
let firstRun = true; 
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
    radio = loadImage("Radio.png")

    firstRun = false;
  }
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  //Background Image
image(radio, 0,0)





























  //Visualiser On bottom Screen
let bar_x = 145
let bar_Y = 810

let single_barwidth = 14
let single_barheight = 14 

let max_barheight_1 = 2
let max_barheight_2 = 4
let max_barheight_3 = 6
let max_barheight_4 = 8

let bar_movement_spacing = 15

let vocal_map = map(vocal,0,100,0,max_barheight_4)

let other_map = map(other,0,100,0,max_barheight_3)

let drum_map = map(drum,0,100,0,max_barheight_2)

let bass_map = map(bass,0,100,0,max_barheight_1)


let vocal_colour = "#ffa4bf"
let bass_colour = "#ffffff"
let drum_colour = "#f3e0aa"
let other_colour = "#9fc5e8"

  fill(bass_colour)
  for(let i = 0; i < bass_map; i ++){
    rect(bar_x, bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  }

  fill(bass_colour)
  for(let i = 0; i < bass_map; i ++){
    rect(bar_x + single_barwidth * 1, bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  }

  fill(drum_colour)
  for(let i = 0; i < drum_map; i ++){
    rect(bar_x + single_barwidth * 2, bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  }

  fill(drum_colour)
  for(let i = 0; i < drum_map; i ++){
    rect(bar_x + single_barwidth * 3, bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  }

  fill(other_colour)
  for(let i = 0; i < other_map; i ++){
    rect(bar_x + single_barwidth * 4 , bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  }

  fill(other_colour)
  for(let i = 0; i < other_map; i ++){
    rect(bar_x + single_barwidth * 5 , bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  }

  fill(vocal_colour)
  for(let i = 0; i < vocal_map; i ++){
    rect(bar_x + single_barwidth * 6 , bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  }

  fill(vocal_colour)
  for(let i = 0; i < vocal_map; i ++){
    rect(bar_x + single_barwidth * 7 , bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  }

  fill(other_colour)
  for(let i = 0; i < other_map; i ++){
    rect(bar_x + single_barwidth * 8 , bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  }
  
  fill(other_colour)
  for(let i = 0; i < other_map; i ++){
    rect(bar_x + single_barwidth * 9 , bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  }

  fill(drum_colour)
  for(let i = 0; i < drum_map; i ++){
    rect(bar_x + single_barwidth * 10 , bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  }
  fill(drum_colour)
  for(let i = 0; i < drum_map; i ++){
    rect(bar_x + single_barwidth * 11 , bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  }

  fill(bass_colour)
  for(let i = 0; i < bass_map; i ++){
    rect(bar_x + single_barwidth * 12 , bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  }

  fill(bass_colour)
  for(let i = 0; i < bass_map; i ++){
    rect(bar_x + single_barwidth * 13 , bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  }
 

  //  // vocal bar is red
  //  let vocal_circle = map(vocal,0,100,400,1500)
  //  fill(200, 0, 0);
  //  ellipse(500,500,vocal_circle,vocal_circle)
  //  fill(0);
  //  ;
 
  //  let drum_circle = map(drum,0,100,300,1000)
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  ellipse(500,500,drum_circle,drum_circle)
  //  fill(0);
   

  //  let bass_circle = map(bass,0,100,200,500)
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  ellipse(500,500,bass_circle,bass_circle)
  //  fill(0);
  //  ;
 
  //  let other_circle = map(other,0,100,50,400)
  //  // other bar is white
  //  fill(200, 200, 200);
  //  ellipse(500,500,other_circle,other_circle)
  //  fill(0);
  // ;
}