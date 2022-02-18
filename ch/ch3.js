function lonelyinteger(ar) {
	ar.sort((a, b) => a - b)
		let s
    ar.map((ele, index) => {
        
        if(index>0 && ar.length > 1){
            if(ele != ar[index-1] && ele != ar[index+1]){
							s = ele
            }
        } else {
					s = ar[0]
				}
				

    })

		return s

}

const r = lonelyinteger([1])

console.log(r);