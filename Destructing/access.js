function extractElements(arr) {
    // Destructure the first and second elements
    const [first, second] = arr;
    // Get the last element using array length
    const last = arr[arr.length - 1];

    return [first, second, last];
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const result = extractElements(numbers);
console.log(result); // Output: [1, 2, 5]
