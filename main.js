var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
        block_Image = Img;
 
         block_Image.scaleToWidth(1077);
         block_Image.scaleToHeight(607);
         block_Image.set({
             top:0,
             left:0
         });
 
 canvas.add(block_Image);
 
     });
}

function playSound(){
    x.play();
}
