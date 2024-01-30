//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.

function findMinValue(array) {
    let minValue = array[0]
    for (i=1; i<array.length; i++){
        if (array[i]<minValue){
            minValue = array[i]
        } 
    }
    return minValue
}
//Sort each array in decending order.
function sortArray(array1) {
    let sortedArray =[]
    while (array1.length !==0){
        let smallValue = findMinValue(array1); 
        //console.log(smallValue)
        sortedArray.push(smallValue);
        //console.log(array1.indexof(smallValue))
       array1.splice(array1.indexOf(findMinValue(array1)),1);
        
    }
    return sortedArray;
}

console.log(sortArray([5, 10, 2, 42]))
