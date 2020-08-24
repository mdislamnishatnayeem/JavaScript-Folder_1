//will count word frome a sentence
//problem-if i give a space at the very fast
//of the sentence then it count one more
//here is the problem

var andolon="Rokto   jokhon    diyeci tokhin aro debo.  kintu   ";
var count=0;
var n=andolon.length;
  
for(var i=0;i<andolon.length;i++){
 if(andolon[i]==" "){
    count++;
  if(andolon[i+1]==" "){
     count--;
     }
  }
}
    
if(andolon[n-1]==" "){
  count--;
 }
count++;
console.log(count);



//now i will make it function. The code bellow


function gonona(andolon){

var count=0;
var n=andolon.length;
  
for(var i=0;i<andolon.length;i++){
 if(andolon[i]==" "){
    count++;
  if(andolon[i+1]==" "){
     count--;
     }
  }
}
  
 
    
if(andolon[n-1]==" "){
  count--;
 }
count++;
   return count;
}


var lol=gonona("nayeem islam nishat");
console.log(lol);
