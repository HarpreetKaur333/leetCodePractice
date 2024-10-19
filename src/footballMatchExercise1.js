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
 * Complete the 'getNumDraws' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER year as parameter.
 */
const axios = require('axios');

// Base URL for the API
const baseUrl = 'https://jsonmock.hackerrank.com/api/football_matches';

async function getNumDraws(year) {
    let totalDraws = 0;
    let currentPage = 1;
    let totalPages = 1;

    // Continue fetching data from all pages
    while (currentPage <= totalPages) {
        try {
            // API endpoint with the current page number
            const url = `${baseUrl}?year=${year}&page=${currentPage}`;

            // Send GET request to the API using axios
            const response = await axios.get(url);

            // Destructure data from the response
            const { total_pages, data } = response.data;

            // Update total number of pages
            totalPages = total_pages;

            // Iterate over each match and check if it was a draw
            data.forEach(match => {
                if (match.team1goals === match.team2goals) {
                    totalDraws++;
                }
            });

            // Move to the next page
            currentPage++;
        } catch (error) {
            console.error('Error fetching data:', error);
            break;
        }
    }

    // Return the total number of draws
    return totalDraws;
}

// // Main function to handle input/output
// (async () => {
//     const year = parseInt(process.argv[2], 10); // Read the year from the command line argument

//     if (isNaN(year)) {
//         console.error('Please provide a valid year as input');
//         process.exit(1);
//     }

//     // Call the function and print the result
//     const result = await getNumDraws(year);
//     console.log(result);
// })();
async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine().trim(), 10);

    const result = await getNumDraws(year);

    ws.write(result + '\n');

    ws.end();
}
