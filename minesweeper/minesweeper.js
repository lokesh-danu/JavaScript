var difficulty="easy";
var real,result,cell;
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
    startgame();  
}
function startgame(){
    result=true;
    real=new Array (n);
    for(let i=0;i<n;i++){
        real[i]=new Array(n);
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            real[i][j]=0;
        }
    }
    for(let i=0;i<mines;i++){
        let x=Math.floor(Math.random()*n);
        let y=Math.floor(Math.random()*n);
        real[x][y]=-1;
    }
    // placemines(real);
    makemove();
}

function makemove(){
    cell=document.querySelectorAll(".cell");
    cell.forEach((element)=>{
        element.addEventListener("click", input);
    })
}
function input(){
    let x=this.dataset.i;
    let i,j;
    i=Math.floor(x/n);
    j=x%n;
    console.log(i,j);
    if(real[i][j]==-1){
        alert("you lost");
        setboard();
    }
    else{
        openall(real,i,j);
    }
}
function openall(arr,i,j){
    let count=countmines(arr, i, j);
    if(count==0){
        if(i-1>=0&&j-1>=0){
            openall(arr, i-1, j-1);
        }
        if(i-1>=0){
            openall(arr, i-1, j);
        }
        if(i-1>=0&&j+1<n){
            openall(arr, i-1, j+1);
        }
        if(j-1>=0){
            openall(arr, i, j-1);
        }
        if(j+1<n){
            openall(arr, i, j+1);
        }
        if(i+1<n&&j-1>=0){
            openall(arr, i+1, j-1);
        }
        if(i+1<n){
            openall(arr, i+1, j);
        }
        if(i+1<n&&j+1<n){
            openall(arr, i+1, j+1);
        }
        
    }
    else{
        let x=n*i+j;
        cell[x-1].innerHTML=count;
        cell[x-1].classList.add("white");
    }
}
function countmines(arr,i,j){
    let count=0;
    if(i-1>=0&&j-1>=0&&arr[i-1][j-1]==-1){
        count++;
    }
    if(i-1>=0&&arr[i-1][j]==-1){
        count++;
    }
    if(i-1>=0&&j+1<n&&arr[i-1][j+1]==-1){
        count++;
    }
    if(j-1>=0&&arr[i][j-1]==-1){
        count++;
    }
    if(j+1<n&&arr[i][j+1]==-1){
        count++;
    }
    if(i+1<n&&j-1>=0&&arr[i+1][j-1]==-1){
        count++;
    }
    if(i+1<n&&arr[i+1][j]==-1){
        count++;
    }
    if(i+1<n&&j+1<n&&arr[i+1][j+1]==-1){
        count++;
    }
    return count;
}

