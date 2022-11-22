


//Naive approach
//  TC - O(n) || SC - O(n)
/*
function removeduplicate(arr, n){
    let temp = [];
    temp[0] = arr[0];
    let res = 1;
    for(let i = 0; i<n; i++){
        if(arr[i] !== temp[res-1]){
            temp[res] = arr[i];
            res++;
        }
    }
    return temp;
}
*/

//Efficient approach
//  TC - O(n) || SC- O(1)
function removeduplicate(arr, n){
    let res = 1;
    for(let i=0; i<n; i++){
        if(arr[i]!=arr[res-1]){
            arr[res] = arr[i];
            res++;
        }
    }
    return  res;
}


let arr = [10, 20, 20, 30, 30, 30]

const index= removeduplicate(arr, arr.length);
for(let i=0; i<index; i++){
    console.log(arr[i]);
}


//for naive apprach
// const newArr=removeduplicate(arr, arr.length);
// console.log(newArr);