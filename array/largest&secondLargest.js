
function getLargest(arr, n){
    let largest = arr[0];
    for(let i=0; i<n; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}



function getSecondLargest(arr, n){
    const largest = getLargest(arr, n);

    let res=-1;
    for(let i=0; i<n; i++){
        if(arr[i]!==largest){
            if(res == -1){
                res = i;
            }
            if(arr[i] > arr[res]){
                res=i;
            }
        }
    }

    const secondlargest = arr[res];
    return secondlargest;
}

arr = [10, 3, 30, 45, 20];

const secondLargest = getSecondLargest(arr, arr.length);
console.log(secondLargest);
