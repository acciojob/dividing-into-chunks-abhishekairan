const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = []
	let subresult = []
	let sum = 0
	for (let a of arr) {
		sum += a
		if(sum>n){
			result.push(subresult)
      subresult = []
			sum=a
		}
		subresult.push(a)
	}
  if(subresult.length>0){
    result.push(subresult)
  }
  return result
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
