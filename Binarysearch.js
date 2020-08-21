//binary search in arranged array 


function binarySearchIterative(arr, val){
	var start = 0;
	var end = arr.length-1;
	var mid;
	var midVal;

	 while(end >= start){
		 mid = Math.floor((start+end)/2);

		 midVal = arr[mid];

		 if(midVal==val){
			 return mid;
		 }


		 if(val < midVal){
				end = mid - 1;
		 }

		 if(val > midVal){
			 start = mid + 1;
		 }
	}
	return -1;
}

var m=binarySearchIterative([1,2,3,4,5], 5);
var a=binarySearchIterative([45,66,76,77,78,90,92],66);
var y=binarySearchIterative([1,2,3,4,5], 55);
	
	
	

console.log(m +"th number position");
console.log(a+ "th numbe position ");
console.log(y +" th number position");
