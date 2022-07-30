function rotLeft(n, k) 
{
var arr = [];
for (var i = 1; i <= n; i++){
arr.push(i)
};
for (var j = 1; j <= k; j++){
arr.shift(arr.push(j))
}
console.log(arr.toString()); 
return arr.toString(); 
}
  
rotLeft(7, 3)