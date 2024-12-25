function findMinMax(arr) {
    // Use Math.max and Math.min with the spread operator
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    return { max, min };
}

// Example usage
const numbers = [5, 2, 7, 1, 9];
const result = findMinMax(numbers);
console.log(result); // Output: { max: 9, min: 1 }
