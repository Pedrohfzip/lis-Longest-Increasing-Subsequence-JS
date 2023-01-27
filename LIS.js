function LongestIncreasingSequence(arr) { 
  let cont = 0;
  let arr2 = []
  
  for(let i = 0; i < arr.length; i ++){
    
      if(arr[i] < arr[i + 1] && arr[i] > arr[i - 1] || 
        arr[i] > arr[i + 1] && arr[i] > arr[i - 1] ||
        arr[i] < arr[i + 1] && arr[i - 1] == undefined ||
        arr[i] > arr[i - 1] && arr[i + 1] == undefined ||
        arr[i] == arr[i + 1]){

        cont++
        arr2.push(arr[i])
      }
      
  }
  console.log("Quantidade de numeros da sequencia: "+ cont)
  console.log("Numeros da sequencia: "+arr2)
  return arr; 

}
   
// keep this function call here 
console.log(LongestIncreasingSequence(readline()));
