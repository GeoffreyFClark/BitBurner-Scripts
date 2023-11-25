// Unique Paths in a Grid I
// You are attempting to solve a Coding Contract. You have 10 tries remaining, after which the contract will self-destruct.

// You are in a grid with 13 rows and 11 columns, and you are positioned in the top-left corner of that grid. 
// You are trying to reach the bottom-right corner of the grid, but you can only move down or right on each step. 
// Determine how many unique paths there are from start to finish.

// NOTE: The data returned for this contract is an array with the number of rows and columns:
// [13, 11]


/** @param {NS} ns */
export async function main(ns) {
    const rows = 13;
    const cols = 11;

    // initialize 2d array
    let array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < cols; j++) {
            // All cells in top row and left column have 1 unique path
            array[i][j] = 1;
        }
    }

    // calculate number of unique paths to each cell
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            // Unique paths to a cell = unique paths to cell above + unique paths to cell left
            array[i][j] = array[i-1][j] + array[i][j-1];
        }
    }

    ns.tprint(`The number of unique paths to the bottom right cell in a 13 row x 11 column 2D array: ${array[rows-1][cols-1]}`)
}
