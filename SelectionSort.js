//selectionSort in js code


function selectionSort(arr){
  var minIdx;
	var temp;
	var len = arr.length;

  for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j < len; j++){
       if(arr[j] < arr[minIdx]){
          minIdx = j;
       }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}
var aral=selectionSort([6,7,8,45,75,23,-6,56,12,9,56]);
              
               

console.log(aral);




//>Console:
//[-6,6,7,8,9,12,23,45,56,56,75]
             
