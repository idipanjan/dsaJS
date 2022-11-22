// TODO: Searching operation for array [Binary seacrch and linear search]
function linearSearch(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i ] === target){
            return i;
        }
    }

    return -1;
}

function binarySearch(arr, target){
    let start = 0;
    let end = arr.length - 1;

    while(start<= end){
        let mid = start + Math.floor((end-start)/2);
        if(arr[mid] === target){
            return mid;
        }
        else if(target < arr[mid]){
            end = mid-1;
        }
        else if(target > arr[mid]){
            start = mid+1;
        }
    }
    return -1;
}


const arr = [10, 20, 30, 40 , 50];

console.log(binarySearch(arr, 40));