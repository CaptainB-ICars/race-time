canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=150;
car1_height=80;
car1_x=10;
car1_y=10;
car1_image="mclaren.png";
car2_width=150;
car2_height=80;
car2_x=10;
car2_y=100;
car2_image="jesko.png";
background_image="racing.jpg";



function add(){
    background_imageTag=new Image();
    background_imageTag.onload=uploadbackground;
    background_imageTag.src=background_image;

    car1_imageTag=new Image();
    car1_imageTag.onload=uploadcar1;
    car1_imageTag.src=car1_image;

    car2_imageTag=new Image();
    car2_imageTag.onload=uploadcar2;
    car2_imageTag.src=car2_image;
}





function uploadbackground(){
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}



function uploadcar1(){
    ctx.drawImage(car1_imageTag,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_imageTag,car2_x,car2_y,car2_width,car2_height);
}



window.addEventListener("keydown",my_keydown);
    function my_keydown(e)
{
    keyPressed=e.keyCode;
    if(keyPressed=='38')
    {
        up();
    }

    
    if(keyPressed=='40')
    {
        down();
    }


    if(keyPressed=='37')
    {
        left();
    }

    
    if(keyPressed=='39')
    {
        right();
    }



    keyPressed=e.keyCode;
    if(keyPressed=='87')
    {
        up2();
    }

    keyPressed=e.keyCode;
    if(keyPressed=='83')
    {
        down2();
    }

    keyPressed=e.keyCode;
    if(keyPressed=='68')
    {
        right2();
    }

    keyPressed=e.keyCode;
    if(keyPressed=='65')
    {
        left2();
    }
}



function up()
{
    if(car1_y>=0)
    {car1_y=car1_y-10;
        uploadbackground();
        uploadcar1();
    }
}



function down()
{
    if(car1_y<=700)
    {
        car1_y=car1_y+10;
        uploadbackground();
        uploadcar1();
        
    }
}



function left()
{
    if(car1_x>=0)
    {
        car1_x=car1_x-10;
        uploadbackground();
        uploadcar1();
        
    }
}



function right()
{
    if(car1_x<=700)
    {
        car1_x=car1_x+10;
        uploadbackground();
        uploadcar1();
        
    }
}


function up2()
{
    if(car2_y>=0)
    {car2_y=car2_y-10;
        uploadbackground();
        uploadcar2();
    }
}



function down2()
{
    if(car2_y<=700)
    {
        car2_y=car2_y+10;
        uploadbackground();
        uploadcar2();
        
    }
}



function left2()
{
    if(car2_x>=0)
    {
        car2_x=car2_x-10;
        uploadbackground();
        uploadcar2();
        
    }
}



function right2()
{
    if(car2_x<=700)
    {
        car2_x=car2_x+10;
        uploadbackground();
        uploadcar2();
        
    }
}