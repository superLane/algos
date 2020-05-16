  let binary = N.toString(2);
  let count =0;
  let max =0;
  let zzz = false;
  console.log(binary); 
  for (i=0; i< binary.length; i++){
     if (binary[i] === "1" && binary[i+1]=== "0"){
       zzz = true;
       if (count > max) {
         max = count;
       }
       if (count > 0) {
         count = 0;
       }
     }
     else if (zzz && binary[i] ==="0"){
       count ++;
     }
     
     else {
       zzz = false;
       if (count > max) {
         max = count;
       }
       count = 0;
     }
     
   }
  console.log(max);