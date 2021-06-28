var canvas=new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;
player_x=45;
player_y=45;
var player_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("fire_player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
    }
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true&&keyPressed=='80'){
        console.log("p and shift is pressed");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("Current_Width").innerHTML=block_image_width;
        document.getElementById("Current_Height").innerHTML=block_image_height;
    }
if(e.shiftKey==true&&keyPressed=='65'){
    console.log("a and shift is pressed");
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("Current_Width").innerHTML=block_image_width;
    document.getElementById("Current_Height").innerHTML=block_image_height;
}
if(keyPressed=='38'){
    up();
    console.log("up");
}
if(keyPressed=='40'){
    down();
    console.log("down");
}
if(keyPressed=='37'){
    left();
    console.log("left");
}
if(keyPressed=='39'){
    right();
    console.log("right");
}
if(keyPressed=='83'){
  new_image('Block_of_Netherite_JE1_BE1.png');
    console.log("s");
}
if(keyPressed=='78'){
    new_image('Block_of_Amethyst_JE3_BE1.png');
      console.log("n");
  }
  if(keyPressed=='68'){
    new_image('Block_of_Diamond.png');
      console.log("d");
  }
  if(keyPressed=='69'){
    new_image('BlockOfEmerald.png');
      console.log("e");
  }
  if(keyPressed=='90'){
    new_image('Obsidian_JE3_BE2.png');
      console.log("z");
  }
  if(keyPressed=='84'){
      new_image('TNTNew.png');
console.log("t");
  }
}
function up (){
    if (player_y>=0){
        player_y=player_y-block_image_height;
        console.log("block image height= "+block_image_height);
        console.log("When up arrow is pressed,x= "+player_x+" , y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down (){
    if (player_y <=600){
        player_y=player_y+block_image_height;
        console.log("block image height= "+block_image_height);
        console.log("When down arrow is pressed,x= "+player_x+" , y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left (){
    if (player_x >=0){
        player_x=player_x-block_image_width;
        console.log("block image width= "+block_image_width);
        console.log("When down arrow is pressed,x= "+player_x+" , y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right (){
    if (player_x <=1000){
        player_x=player_x+block_image_width;
        console.log("block image width= "+block_image_width);
        console.log("When down arrow is pressed,x= "+player_x+" , y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}