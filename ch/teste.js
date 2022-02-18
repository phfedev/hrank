function findMedian(arr) {
	let res = arr.length%2
		arr.sort((a, b) => a - b)
		console.log(arr);
    if( res == 0){
            
            let res2 = (arr[(arr.length/2)] + arr[(arr.length/2)+1])/2
					
            return res2
    }
    if(res != 0){
        
        let res3 = arr[Math.round((arr.length/2))-1]
				console.log(res3);
       return res3
    }
}
findMedian([0, 1, 2, 4, 6, 5, 3])
// findMedian([0,1,3,2,4,5,7,8,9,10,12,13,26,22,44,33,67,6,34,54,99,121,133])