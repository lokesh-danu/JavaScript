var tile=document.querySelectorAll(".tile");
var image=document.querySelectorAll((".tile>img"))
var scorex=0;
var scoreo=0;
var click=0;
var scx=document.querySelector("#p1 .score");
var sco=document.querySelector("#p2 .score");
var hideall =()=>{
    image.forEach( (el) => {el.classList.add("hide");});
}
hideall();
turn="X";
var x=[];
var o=[];
tile.forEach((el)=> el.addEventListener("click",game));

function game(){
    if(this.dataset.fill=="false"){
        this.dataset.fill="true";
        click+=1;
        play(this);
    }
}
function play(el){
    if(turn=="X"){
        let temp=el.querySelectorAll(".x");
        temp[0].classList.remove("hide");
        x.push(parseInt(el.dataset.i));
        if(check(x)==true){
            alert(`Player : ${turn} has WON the Game`);
            scorex+=1;
            console.log(scx.innerHTML);
            scx.innerHTML=scorex;
            reset();
        }
        turn="O";
    }
    else{
        let temp=el.querySelectorAll(".o");
        temp[0].classList.remove("hide");
        o.push(parseInt(el.dataset.i));
        if(check(o)==true){
            alert(`Player : ${turn} has WON the Game`);
            scoreo+=1;
            sco.innerHTML=scoreo
            reset();
        }
        turn="X";
    }
    if(click==9){
        alert("Draw");
        reset();
    }
}
function check(a=[]){
    for (let i = 0; i < a.length; i++) {
        if(a[i]%2!=0&&a[i]!=5){
            for(let j=i+1;j<a.length;j++){
                if(a[j]%2!=0&&a[j]!=5){
                    let x=a[i]+a[j];x/=2;
                    if(search(a, x)==true)return true;
                }
            }
        }
        else{
            if(search(a,5)==true){
                if(a[i]==2&&search(a, 8)==true)return true;
                if(a[i]==4&&search(a, 6)==true)return true;
            }
        }
    }
    return false;
}
function search( a=[],num){
    for(let i=0;i<a.length;i++){
        if(a[i]==num)return true;
    }
    return false;
}
function reset(){
    hideall();
    x=[];
    o=[];
    turn="PLAYER-O";
    tile.forEach((el)=>{el.dataset.fill="false"});
    click=0;
}
var btn=document.querySelector(".reset button");
btn.addEventListener("click", gamereset);
function gamereset(){
    scorex=0;
    scoreo=0;
    scx.innerHTML=scorex;
    sco.innerHTML=scoreo;
    reset();
}