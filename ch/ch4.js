function diagonalDifference(arr) {
	console.table(arr)
	console.log(arr.length);
	console.log();
	let total = 0
	let eixoA = 0
	let eixoB = 0
	arr.map( (line, index) => {
		console.log("line: ",line);
		console.log("index: ",index);
		// console.log("len line: ", line.length);
		eixoA += line[index]
		eixoB += line[line.length - index-1]
		let sum = line[line.length - index-1] - line[index] 
		console.log("ele1: ", line[index]);
		console.log("ele2: ", line[line.length - index -1]);
		console.log(sum);
		total += sum
		
	})
	console.log("Tot A: ", eixoA);
	console.log("Tot B: ", eixoB);
	console.log(eixoB-eixoA);
	
	console.log(total);
}
let t = [[1,2,3,4,5],[5,33,7,8,6],[9,10,11,12,7],[13,14,15,16,8],[1,2,3,4,5]]
diagonalDifference(t)