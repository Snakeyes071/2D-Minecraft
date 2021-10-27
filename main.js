var canvas =new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

blockimagewidth=30;
blockimageheight=30;

var player_object=" ";
var block_image_object=" ";

function player_update() {
    fabric.Image.fromURL("player.png",function (Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    } ); 
    
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image,function (Img){
    block_image_object=Img;
    block_image_object.scaleToWidth(blockimagewidth);
    block_image_object.scaleToHeight(blockimageheight);
    block_image_object.set({
        top:player_y,left:player_x
    });
    canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keypresed=e.keyCode;
    console.log(keypresed);
    if (e.shiftKey==true && keypresed=='80'){
        console.log("P and Shift pressed together");
        blockimagewidth=blockimagewidth+10;
        blockimageheight=blockimageheight+10;
        document.getElementById("current-width").innerHTML=blockimagewidth;
        document.getElementById("current-height").innerHTML=blockimageheight;
    }
    if (e.shiftkey==true && keypresed=='77'){
        console.log("M and Shift pressed together");
        blockimagewidth=blockimagewidth-10;
        blockimageheight=blockimageheight-10;
        document.getElementById("current-width").innerHTML=blockimagewidth;
        document.getElementById("current-height").innerHTML=blockimageheight;
    }
    if (keypresed=='38'){
       up();
       console.log("up");
    }
    if (keypresed=='40'){
        down();
        console.log("down");
    }
    if (keypresed=='39'){
    right();
    console.log("right");
    }
    if (keypresed=='37'){
        left();
        console.log("left");
    }
    if (keypresed=='87'){
    new_image('wall.jpg');
    console.log("w");
    }
    if (keypresed=='71'){
        new_image('ground.png');
        console.log("g");
    }
    if (keypresed=='76'){
    new_image('light_green.png');
    console.log("l");
    }
    if (keypresed=='84'){
        new_image('trunk.jpg');
        console.log("t");
    }
    if (keypresed=='82'){
        new_image('roof.jpg');
        console.log("r");
    }
    if (keypresed=='89'){
        new_image('yellow_wall.png');
        console.log("y");
    }
    if (keypresed=='68'){
        new_image('dark_green.png');
        console.log("d");
    }
    if (keypresed=='85'){
        new_image('unique.png');
        console.log("u");
    }
    if (keypresed=='67'){
        new_image('cloud.jpg');
        console.log("c");
    }
}

function up() {
    if (player_y >= 0) {
        player_y=player_y-blockimageheight;
        console.log("blockimageheight="+blockimageheight);
        console.log("When up arrow key is preesed x is ="+player_x+" & y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
} 

function down() {
    if (player_y <= 500) {
        player_y=player_y+blockimageheight;
        console.log("blockimageheight="+blockimageheight);
        console.log("When Down arrow key is preesed x is ="+player_x+" & y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
} 

function left() {
    if (player_x >= 0) {
        player_x=player_x-blockimageheight;
        console.log("blockimageheight="+blockimageheight);
        console.log("When Left arrow key is preesed x is ="+player_x+" & y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
} 

function right() {
    if (player_x <= 850) {
        player_x=player_x+blockimageheight;
        console.log("blockimageheight="+blockimageheight);
        console.log("When Right arrow key is preesed x is ="+player_x+" & y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
} 

