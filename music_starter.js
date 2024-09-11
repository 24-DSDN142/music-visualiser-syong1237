let radio;
let volume_knob;
let firstRun = true; 
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
 
 
 // If statement to prevent repeat loading of images
 
 if(firstRun){
    radio = loadImage("Radio.png")
    volume_knob = loadImage("Volume Knob Sprite.png")
    bass_treble_knob = loadImage ("Bass and Treble Knob Sprite.png")
    gauge_pointer = loadImage ("Gauge Pointer Sprite.png")

    firstRun = false;
  }
  
  
  background(150)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  angleMode(DEGREES);



 //Background Image
image(radio,50 ,55);



//Volume knob
push();
translate(732,730);

let volumeknob_map = map(vocal,0,100,0,-360);

rotate(volumeknob_map);

image(volume_knob,-96/2,-96/2);

pop();



// Bass Knob

push();
translate(125,708);

let bassknob_map = map(bass,0,100,0,360);

rotate(bassknob_map);

image(bass_treble_knob,-40/2,-40/2);

pop();



// Treble Knob

push();
translate(196,708);

let trebleknob_map = map(drum,0,100,0,360);

rotate(trebleknob_map);

image(bass_treble_knob,-40/2,-40/2);

pop()


// Gauges

  // Gauge pointer 1
push()

translate(270,222)

let gaugepointer_map1 = map(drum,0,100,-25,80) 

rotate(gaugepointer_map1)

image(gauge_pointer,-134,-22)

pop()

  // Gauge pointer 2
push()

translate(510,222)

let gaugepointer_map2 = map(vocal,0,100,-5,80) 

rotate(gaugepointer_map2)

image(gauge_pointer,-134,-22)

pop()

  // Gauge pointer 3
push()

translate(750,222)

let gaugepointer_map3 = map(bass,0,100,-5,80) 

rotate(gaugepointer_map3)

image(gauge_pointer,-134,-22)

pop()







//Visualiser On bottom Screen

    //Position

let bar_x = 138
let bar_Y = 848

  //Size of individual bar

let single_barwidth = 18
let single_barheight = 12

    //Max height of bar movement for each bar

let max_barheight_1 = 4  //bar pair 1
let max_barheight_2 = 6  //bar pair 2
let max_barheight_3 = 8  //bar pair 3
let max_barheight_4 = 8  //bar pair 4

    //Vertical space between each bar when moving

let bar_movement_spacing = 12

    //Mapping 

let vocal_map = map(vocal,0,100,-1,max_barheight_4)

let other_map = map(other,0,100,-6,max_barheight_3)

let drum_map = map(drum,0,100,-1,max_barheight_2)

let bass_map = map(bass,0,100,-1,max_barheight_1)

    //Colours for each track

let vocal_colour = "#ff00c1" //fourth Bar
let bass_colour = "#00b8ff" //First Bar
let drum_colour = "#4900ff" //Second Bar
let other_colour = "#9600ff" //Third Bar

    //Stroke settings 

stroke ("#4dd0e1")
strokeWeight(1)

    //For loops

  fill(bass_colour)
  for(let i = 0; i < bass_map; i ++){
    rect(bar_x, bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)

    rect(bar_x + single_barwidth * 1, bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  
  }



  fill(drum_colour)
  for(let i = 0; i < drum_map; i ++){
    rect(bar_x + single_barwidth * 2, bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  
    rect(bar_x + single_barwidth * 3, bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)

  }



  fill(other_colour)
  for(let i = 0; i < other_map; i ++){
    rect(bar_x + single_barwidth * 4 , bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  
    rect(bar_x + single_barwidth * 5 , bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  
  }


  fill(vocal_colour)
  for(let i = 0; i < vocal_map; i ++){
    rect(bar_x + single_barwidth * 6 , bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)


    rect(bar_x + single_barwidth * 7 , bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  
  }

    
  fill(other_colour)
  for(let i = 0; i < other_map; i ++){
    rect(bar_x + single_barwidth * 8 , bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  
    rect(bar_x + single_barwidth * 9 , bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  
  
  }
  

  fill(drum_colour)
  for(let i = 0; i < drum_map; i ++){
    rect(bar_x + single_barwidth * 10 , bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
 
    rect(bar_x + single_barwidth * 11 , bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  
  }
  

  fill(bass_colour)
  for(let i = 0; i < bass_map; i ++){
    rect(bar_x + single_barwidth * 12 , bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  
    rect(bar_x + single_barwidth * 13 , bar_Y-i * bar_movement_spacing , single_barwidth,single_barheight)
  
  }
 
// A/C Visualizer 

  //Position

let ac_x = 150
let ac_y = 455

  //Size of indvidual bar

let ac_height = 20
let ac_width = 15

    //Vertical space between each bar when moving

let ac_spacing = 20

    //Max height of bar movement for each bar

let ac_max_height = 6
let ac_min_height = -1

  //Variable to allow each bar to rest on the same y value

let ac_max_height_change = 15

  //mapping

let ac_map = map (vocal,0,100, ac_min_height , ac_max_height )

  //Stroke and colour settings

stroke ("#4dd0e1")
strokeWeight(4)
fill("#80deea")

  //For loop

for(let i = 0; i < ac_map; i ++){
  rect(ac_x + i * ac_spacing , ac_y - i * ac_max_height_change/2  , ac_width, ac_height + i * ac_max_height_change)

}
}