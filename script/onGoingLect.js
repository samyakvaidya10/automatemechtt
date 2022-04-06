
//This Function returns current  lecture 
var lec;
function onGoingLec(time,min){
    
    //For 1st lecture
    if (time>=9&&time<10) {
       lec="L1"; 
    }
    //For 2nd lecture
    else if (time>=10&&time<11) {
        lec="L2"; 
     }
     //For tea recess & 3rd lect
    else if (time==11) {
        if(min<15){
            lec="recs"; 
        }else{
            lec="L3";
        }
    }
    //For 3rd & 4th lect
    else if (time==12) {
        if(min<15){
            lec="L3"; 
        }else{
            lec="L4";
        }
    }
    //For 4rd & lunch time
    else if (time==1) {
        if(min<15){
            lec="L4"; 
        }else{
            lec="recb";
        }
    }
    else if (time>=2&&time<3) {
        lec="L5"; 
    }
    else if (time>=3&&time<4) {
        lec="L6"; 
    }else if(time<9&&time>=4){
        if(time<9){
            lec="morning";
        }else{
            lec="done";
        }
     }
     return lec;
}
