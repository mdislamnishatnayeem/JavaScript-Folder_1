//insertion sort in js code
// তাস কাড সাজিয়ে রাখার system


function insertionSort(items) {

    for (var i=0; i < items.length; i++) {

        var currentItem = items[i];
        var j = i -1;

        while (j >= 0 && items[j] > currentItem) {
            items[j+1] = items[j];
            j--;
        }

        items[j+1] = currentItem;
    }

    return items;
}

var nn= insertionSort([45,64,24,644,67,-56,-43,6,75,78,56,75]);
console.log(nn);



