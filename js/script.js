const arr = [1, 2, 3, -1, -2, -3]
function positivNum(arrUser) {
 const exampleArr = []
 if(arrUser.length === 0) {
   return alert("error");
 } else {
   for (i = 0; i < arrUser.length; i++) {
     if(arrUser[i]  > 0) {
     exampleArr.push(arrUser[i]);
    }
   }
 }
 if (exampleArr.length !== 0) {
  return alert(exampleArr);
 } else {
  return alert("null");
 }

}
positivNum(arr);
