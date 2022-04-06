var today=new Date();
var time=today.getHours();
var min=today.getMinutes();
var day=today.getDay();
var div="I";
var entiredaytt=false;
function divA(){
    document.getElementById("a").style.fontSize="large";
    document.getElementById("b").style.fontSize="small";
    document.getElementById("se").style.fontSize="small";
    document.getElementById("te").style.fontSize="small";
    document.getElementById("be").style.fontSize="small";
    div="A";
}
function divB(){
    document.getElementById("b").style.fontSize="large";
    document.getElementById("a").style.fontSize="small";
    document.getElementById("se").style.fontSize="small";
    document.getElementById("te").style.fontSize="small";
    document.getElementById("be").style.fontSize="small";
    div="B";
    
}
function getSE(){
    document.getElementById("se").style.fontSize="large";
    document.getElementById("te").style.fontSize="small";
    document.getElementById("be").style.fontSize="small";
    document.getElementById("entireday").style.display="none";

    SE(div);
}
function getTE(){
    document.getElementById("te").style.fontSize="large";
    document.getElementById("se").style.fontSize="small";
    document.getElementById("be").style.fontSize="small";
    document.getElementById("entireday").style.display="none";
    TE(div);
}
function getBE(){
    document.getElementById("be").style.fontSize="large";
    document.getElementById("te").style.fontSize="small";
    document.getElementById("se").style.fontSize="small";
    document.getElementById("entireday").style.display="none";
    BE(div);
}
function entireDay(){
    document.getElementById("entireday").style.display="block";
    entiredaytt=true;
    main(div);
}





