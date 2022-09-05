function myFunction(){


var x = (Math.floor(Math.random()*6)+1);
var y = (Math.floor(Math.random()*6)+1);
var locx = "images/dice" + x +".png";
var locy = "images/dice" + y +".png";
document.querySelector(".img1").setAttribute("src", locx);
document.querySelector(".img2").setAttribute("src", locy);

if(x>y){
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 wins";
}
else if(y>x){
        document.getElementsByTagName("h1")[0].innerHTML = "Player 2 wins";
   
}
else{
    document.getElementsByTagName("h1")[0].innerHTML = "Draw";
}

}