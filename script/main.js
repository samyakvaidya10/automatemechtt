var today=new Date();
var time=today.getHours();
var min=today.getMinutes();
var day=today.getDay();
var div="I";
function divA(){
    document.getElementById("a").style.fontSize="large";
    document.getElementById("b").style.fontSize="small";
    div="A";
}
function divB(){
    document.getElementById("b").style.fontSize="large";
    document.getElementById("a").style.fontSize="small";
    div="B";
    
}
function getSE(){
    document.getElementById("se").style.fontSize="large";
    document.getElementById("te").style.fontSize="small";
    document.getElementById("be").style.fontSize="small";
    SE(div);
}
function getTE(){
    document.getElementById("te").style.fontSize="large";
    document.getElementById("se").style.fontSize="small";
    document.getElementById("be").style.fontSize="small";
    TE(div);
}
function getBE(){
    document.getElementById("be").style.fontSize="large";
    document.getElementById("te").style.fontSize="small";
    document.getElementById("se").style.fontSize="small";
    BE(div);
}
console.log(day);




