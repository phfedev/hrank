'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let [hours, minutes, secondsampm] = s.split(':');

    if (hours === '12') {
    	hours = '00';
    }
    
    let seconds = secondsampm.substring(0, 2)
		let modifier = secondsampm.substring(2, 4)

    if (modifier === 'PM') {
    	hours = parseInt(hours, 10) + 12;
    }

   console.log(`${hours}:${minutes}:${seconds}`);
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = "07:05:45PM";

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}

main()