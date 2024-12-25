function getUniqueItems(arr) {
    // Use a Set to store unique elements
    const uniqueSet = new Set(arr);

    return uniqueSet;
}

// Example usage
const numbers = [1, 2, 3, 4, 3, 2, 1, 5, 6];
const uniqueNumbers = getUniqueItems(numbers);

console.log(uniqueNumbers); // Output: Set { 1, 2, 3, 4, 5, 6 }
