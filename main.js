var canvas =  new fabric.Canvas('myCanvas');
console.log(canvas);
var width = 30;
var height = 30;
player_x = 100;
player_y = 100;
console.log("width is " + width + " height is " + height);
var player_object = "";
var block_image = "";
function player_update() {
    fabric.Image.fromURL("player.png", function Img() {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}
function newImage(get_Image, function(Img){
    block_image = Img;
    block_image.scaleToWidth(width);
    block_image.scaleToHeight(height);
    block_image.set({
        top: player_y,
        left: player_x
    });
    canvas.add(block_image);
})


