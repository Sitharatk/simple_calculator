var cvs = document.getElementById("canvas").getContext("2d")

var sposx=80;
var sposy=80;
var nposx=0;
var nposy=0;
var fposx=140;
var fposy=140;
var snaketail = [];
var snakesize = 1;
var score = 0;
var gamestatus="ready";


window.onload = function(){
    document.addEventListener("keydown",inputControl);
    game = setInterval( mainGame,300);
}



function mainGame(){
    document.getElementById("game-status").innerHTML=gamestatus;
    document.getElementById("score").innerHTML=score;

    //move snake
    sposx+=nposx;
    sposy+=nposy;

    // control snake movment

    if(sposx>400){
        sposx=0;
    }
    if(sposy>400){
        sposy=0;
    }
    if(sposx<0){
        sposx=400;
    }
    if(sposy<0){
        sposy=400;
    }
    
    


    cvs.fillStyle="black";
    cvs.fillRect(0,0,400,400);

    for(var cl=0; cl<400; cl+=20){
        cvs.moveTo(cl,0);
        cvs.lineTo(cl,400);
    }
    cvs.stroke();
    for(var rw=0; rw<400; rw+=20){
        cvs.moveTo(0,rw);
        cvs.lineTo(400,rw);
    }
    cvs.strokeStyle="grey";
    cvs.stroke();

    

    //fruit

    cvs.fillStyle="red";
    //cvs.fillRect(fposx,fposy,20,20);
    cvs.fillRect(fposx,fposy,20,20);
    //snake

    cvs.fillStyle="yellow";
    for(var i=0;i<snaketail.length;i++){
        cvs.fillRect(snaketail[i].x,snaketail[i].y,20,20); 

        //if snake touches tail


        if(sposx == snaketail[i].x && sposy== snaketail[i].y && snakesize>1){
            clearInterval(game);
            gamestatus="Game over ";
            document.getElementById("game-status").innerHTML=gamestatus;
        }
    } 
    


    //if snake eats fruit
    if(sposx == fposx && sposy == fposy){
        snakesize++;
        score+=10;
        fposx=Math.floor(Math.random()*20)*20;
        fposy=Math.floor(Math.random()*20)*20;
    }

    snaketail.push({x:sposx, y:sposy});
    while(snaketail.length>snakesize){
        snaketail.shift();
    }

    
}

function inputControl(e){
    console.log(e.keyCode);
    console.log(e.key);

    switch(e.keyCode){
        case 38:
            nposy-=20
            nposx=0;
            break;
            //up
        case 40:
            nposy+=20
            nposx=0;
            break;
            

            //down
        case 39:
            nposx+=20;
            nposy=0;
            break;
            //right
        case 37:
            nposx-=20
            nposy=0;
            break;
            //left

            
    }
    
    if(e.keyCode == 37|| e.keyCode == 38||e.keyCode == 39||e.keyCode == 40){
        gamestatus="Game Started ";
        document.getElementById("game-status").innerHTML=gamestatus;
    }

}