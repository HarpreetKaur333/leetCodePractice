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
 * Complete the 'getWinnerTotalGoals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING competition
 *  2. INTEGER year
 */
const axios = require('axios');

// Base URL for the API
const baseUrl = 'https://jsonmock.hackerrank.com/api/football_matches';


async function getWinnerTotalGoals(competition, year) {
let totalGoals = 0;
    let winner = '';
    
    // First, fetch the competition data to get the winner team
    try {
        const competitionUrl = `https://jsonmock.hackerrank.com/api/football_competitions?name=${competition}&year=${year}`;
        const competitionResponse = await axios.get(competitionUrl);
        if (competitionResponse.data.data.length > 0) {
            winner = competitionResponse.data.data[0].winner;
            console.log(`Winner team: ${winner}`);
        } else {
            console.error("No data found for the given competition and year.");
            return 0;
        }
    } catch (error) {
        console.error("Error fetching competition data:", error);
        return 0;
    }

    // Fetch matches where the winner played as team1 (home team)
    try {
        let currentPage = 1;
        let totalPages = 1;

        // Fetch matches where winner is team1
        while (currentPage <= totalPages) {
            const homeUrl = `${baseUrl}?competition=${competition}&year=${year}&team1=${winner}&page=${currentPage}`;
            const homeResponse = await axios.get(homeUrl);

            totalPages = homeResponse.data.total_pages;
            homeResponse.data.data.forEach(match => {
                totalGoals += parseInt(match.team1goals, 10);
            });

            currentPage++;
        }

        // Reset pagination for matches where winner is team2 (visiting team)
        currentPage = 1;
        totalPages = 1;

        // Fetch matches where winner is team2
        while (currentPage <= totalPages) {
            const awayUrl = `${baseUrl}?competition=${competition}&year=${year}&team2=${winner}&page=${currentPage}`;
            const awayResponse = await axios.get(awayUrl);

            totalPages = awayResponse.data.total_pages;
            awayResponse.data.data.forEach(match => {
                totalGoals += parseInt(match.team2goals, 10);
            });

            currentPage++;
        }

        return totalGoals;
    } catch (error) {
        console.error('Error fetching match data:', error);
        return 0;
    }
}

async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const competition = readLine();

    const year = parseInt(readLine().trim(), 10);

    const result = await getWinnerTotalGoals(competition, year);

    ws.write(result + '\n');

    ws.end();
}
