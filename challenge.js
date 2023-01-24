function stones(n, a, b) {
  // Write your code here
  let sum, arr = [];
  for(let i = 0; i < n; i++){
      sum = 0
      sum += i*a + (n-1 - i)*b
      arr.push(sum)
      
  }
  let set = new Set(arr)
  return Array.from(set).sort((a, b) => a- b);    
}