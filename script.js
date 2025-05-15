const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = []
	let subresult = []
	let sum = 0
	for (let a of arr) {
		if(sum>=n){
			result.push(subresult)
			subresult = []
			sum=0
		}
		subresult.push(a)
		sum += a
	}
  return result
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
