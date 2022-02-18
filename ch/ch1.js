'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let positivo = 0;
    let negativo = 0;
    let zeros = 0;
    arr.map(ele => {
        if(ele > 0){
            positivo++
        }
        if(ele < 0){
            negativo++
        }
        if(ele == 0){
            zeros++
        }
    })

    console.log((positivo/(arr.length)).toFixed(6))
    console.log((negativo/(arr.length)).toFixed(6))
    console.log((zeros/(arr.length)).toFixed(6))
}

function main() {
    // const n = parseInt(readLine().trim(), 10);

    // const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
		const arr = [-4, 3, -9, 0, 4, 1]

    plusMinus(arr);
}

main()
