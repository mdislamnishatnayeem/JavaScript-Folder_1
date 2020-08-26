function getOddAmount(names){
var ignore=[];
var final = [];
for( var i = 0; i< names.length ;i++){
    var s = names[i];
    var count = 1;
    for(var j= i+1;j < names.length; j++){
        if(names[j] == s){
          count++;
        }
    }
    if(count%2 == 1 && ignore.indexOf(s) == -1 && final.indexOf(s) == -1){
    console.log(s);
      final.push(s);
    }
    else{
      ignore.push(s);
    }
  }
 return final;
}
console.log(getOddAmount([34,33,34,76,67,76,4,4,4]));
