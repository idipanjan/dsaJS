//TODO:: insert element in array
function insetElement(element,arr, position){
    for(let i=arr.length-1; i>=position; i--){
        arr[i+1] = arr[i];
    }
    arr[position] = element;
    return arr;
}

//TODO:: remove element from array
function removeElement(element, arr){
    for(i = 0; i<arr.length; i++){
        if(arr[i] === element){
            break;
        }
    }
  
    for(let j=i; j<arr.length -1 ; j++){
      arr[j] = arr[j+1]
    }
    return arr;
}



let arr = [1,2,3,4,5];
console.log(insetElement(3, arr,3));