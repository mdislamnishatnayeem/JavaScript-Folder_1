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




/*আমার এক বড় ভাইয়া আমাকে এই আরেক্টি সহজ পধধতি 
অবল্মবন করে code টি লিখটে help করেছিল,যদিও আমার 
অ জথেস্ত অবদান  রয়েছে।।।।।।। নিচে কডটি*/


var arr = [23,24,25,25,23,24,23,23,23,65];
var arax = [];

for(var i=0; i<arr.length; i++)
{
	var one = arr[i];
	var count = 0;
	
	for(var j=0; j<arr.length; j++)
	{
		if(arr[i]==arr[j])
			count++;
	}
	
	
	if(count%2==1)
		if(!arax.includes(one))
			arax.push(one);
	
	
}

console.log(arax);
