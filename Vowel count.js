//will count vowel From a sentence   

var all="aeiouAEIOU";
var count=0;
var n="nayeem islam nishat";

for(i=0;i<all.length;i++){
  for (var j=0;j<n.length;j++){
    if(all[i]==n[j]){
      count++;
      }
    }
  }
console.log(count);



//now i will use here function, the code bellow

function vowelc(n){

var all="aeiouAEIOU";
var count=0;
for(i=0;i<all.length;i++){
  for (var j=0;j<n.length;j++){
    if(all[i]==n[j]){
      count++;
      }
    }
  }
  return count;
}

var m=vowelc("nayeema");
console.log(m);
 
