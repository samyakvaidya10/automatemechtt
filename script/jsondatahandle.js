var url
function SE(div){
   if(div=="A"){
        url= 'https://samyakvaidya10.github.io/simplifiedmechanicaltimetable/TimeTableAccordongToClass/SE_A.json';
   }else{
      url= 'https://samyakvaidya10.github.io/simplifiedmechanicaltimetable/TimeTableAccordongToClass/SE_B.json';
   }
}

function TE(div){
   if(div=="A"){
        url= 'https://samyakvaidya10.github.io/simplifiedmechanicaltimetable/TimeTableAccordongToClass/TE_A.json';
   }else{
      url= 'https://samyakvaidya10.github.io/simplifiedmechanicaltimetable/TimeTableAccordongToClass/TE_B.json';
   }
}

function BE(div){
   if(div=="A"){
        url= 'https://samyakvaidya10.github.io/simplifiedmechanicaltimetable/TimeTableAccordongToClass/BE_A.json';
   }else{
      url= 'https://samyakvaidya10.github.io/simplifiedmechanicaltimetable/TimeTableAccordongToClass/BE_B.json';
   }
}
//Used for retrive key of upcoming lectures
var keysname=["L1","L2","recs","L3","L4","recb","L5","L6"]

async function main(div){

    
   var lect;

       console.log(url);
       const requestURL = url;
       const request = new Request(requestURL);
       
       const response = await fetch(request);
       const lectName = await response.text();
     
       const seA = JSON.parse(lectName);
       lect=seA;
       //var keys="L2";         //testing purpose
    
      
      
      if(time<9&&time>=4){
            if(time<9){
               day=day;
               console.log("In morning");
               document.getElementById("result").innerHTML = "Yet to start...";
            }else{
               day++;
               document.getElementById("result").innerHTML = "Done for the day...";
            }
         }else{
             day=day;  
         }

      var lecture=lect[day-1];

      var keys=onGoingLec(time,min);
      console.log(lecture);
      
      console.log("tt"  +time);
      console.log(keys);
   if(keys=="morning"){

   }else if(keys=="done"){

   }else if(keys=="recs"){
      document.getElementById("result").innerHTML = "TEA BREAK";
   }else if(keys=="recb"){
      document.getElementById("result").innerHTML = "LUNCH BREAK";
   }
   else{
      console.log(keys);
      var show=(lecture[keys]).split(" "); 
      
      let text="";
      for(let i=0;i<show.length;i++){
        text=text+show[i]+"<br>";
      }
      document.getElementById("result").innerHTML = text;
   }
   
   //For upcoming lectures
   if(keys!="L6"){
      var k=keysname.indexOf(keys)+1;
      if(keysname[k]=="recs"){
         document.getElementById("upcoming").innerHTML = "Upcoming: "+"TEA BREAK";
      }else if(keysname[k]=="recb"){
         document.getElementById("upcoming").innerHTML = "Upcoming: "+"LUNCH BREAK";
      }else{
         document.getElementById("upcoming").innerHTML = "Upcoming: "+lecture[keysname[k]];
      }
   }
   //entitreDayy();
   console.log(entiredaytt);
   if(entiredaytt==true){
      let c1=9;
      let c2=0;
      var text1="";
      
      for(let i=0;i<keysname.length;i++){
         if(c1==13){
            c1=1;
         }
         if(i==2){
            c2=15;
            text1=text1+c1+"-"+(c1)+":"+c2+": "+"TEA BREAK"+ "<br>";

         }else if(i==5){
            c2=0;
            text1=text1+(c1)+":"+c2+"-"+(++c1)+":"+c2+" : LUNCH BREAK"+ "<br>";

         }else{
            text1=text1+(c1)+":"+c2+"-"+(++c1)+":"+c2+": "+lecture[keysname[i]]+ "<br>";
            
         }
      }
      document.getElementById("entireday").innerHTML=text1;
    entiredaytt=false;
   }

}




// var day1=(day-1);
// if(time<9&&time>=4){
//    if(time<9){
//       console.log("In morning");
//       document.getElementById("result").innerHTML = "Yet to start...";
//       day1=day1;
//    }else{
//       var lecture=lect[(day)];
//       document.getElementById("result").innerHTML = "Done for the day...";
//    }
// }else{
//       var lecture=lect[(day-1)];

//    }
