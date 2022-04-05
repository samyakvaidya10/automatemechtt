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
    SE(div);
}
console.log(div);
document.getElementById("result1").innerHTML = div;
