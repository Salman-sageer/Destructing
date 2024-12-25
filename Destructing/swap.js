function swapValues(x, y) {
    // Swap values using destructuring
    [x, y] = [y, x];
    return [x, y];
}

// Example usage
let x = 5;
let y = 10;

const swapped = swapValues(x, y);
console.log(swapped); // Output: [10, 5]

// Optionally, assign the swapped values back to x and y
[x, y] = swapped;
console.log(`x: ${x}, y: ${y}`); // Output: x: 10, y: 5
