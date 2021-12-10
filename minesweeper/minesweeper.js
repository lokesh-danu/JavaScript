var difficulty="easy";
var n=9,mines=9;
var board=document.getElementById("gameboard");
function change_difficulty(){
    difficulty=document.getElementById("difficulty").value;
    setboard();
    console.log(difficulty);
}
var time=document.getElementById("time");
// time.innerHTML="lokesh";
t=0;
setInterval(()=>{
    t+=1;
    time.innerHTML=t;
},1000);
var tile=document.createElement("div");
tile.classList.add("cell", "b");
function setboard(){
    // board.innerHTML="";
    if(difficulty=="easy"){         // 9*9      10
        n=9;mines=10;
        board.classList.add("easy");
        board.classList.remove("medium");
        board.classList.remove("hard");
    }
    else if(difficulty=="medium"){  //16*16         40
        n=16;mines=40;
        board.classList.add("medium");
        board.classList.remove("easy");
        board.classList.remove("hard");
    }
    else{       //24*24                 99
        n=24;mines=24;
        board.classList.add("hard");
        board.classList.remove("medium");
        board.classList.remove("easy");
    }   
}
function startgame(){
    var result=true;
    var real=new Array (n);
    for(let i=0;i<n;i++){
        real[i]=new Array(n);
    }
    var my=new Array (n);
    for(let i=0;i<n;i++){
        my[i]=new Array(n);
    }
    placemines(real);
    while(result==true){
        makemove();

    }
}
function placemines(arr){
    for(let i=0;i<mines;i++){
        let x=Math.floor(Math.random()*n);
        let y=Math.floor(Math.random()*n);
        arr[x][y]=1;
    }
}
function makemove(){
    var cell=document.querySelectorAll(".cell");
    cell.forEach((element)=>{
        element.addEventListener("click", listener)
    })
}
function playing(){

}

