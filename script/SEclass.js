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

async function main(div){
    
    var lect;

        console.log(url);
        const requestURL = url;
        const request = new Request(requestURL);
        
        const response = await fetch(request);
        const lectName = await response.text();
      
        const seA = JSON.parse(lectName);
        lect=seA;
        //var temp=onGoingLec(time,min);
        var temp="L2";         //testing purpose
        var lecture=lect[(day-1)];

        document.getElementById("result").innerHTML = lecture[temp];
      
      var str=lecture[temp].split(" ");
    
    //  document.getElementById("result").innerHTML = str[i];

      console.log(str);
   
}