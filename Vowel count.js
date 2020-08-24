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
