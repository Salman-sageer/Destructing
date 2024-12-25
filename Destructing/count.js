function countWordOccurrences(text) {
    // Normalize the text to lowercase and split it into words
    const words = text.toLowerCase().split(" ");

    // Create a Map to store the words and their counts
    const wordCountMap = new Map();

    // Iterate over the words array
    words.forEach(word => {
        // Update the count for each word in the map
        if (wordCountMap.has(word)) {
            wordCountMap.set(word, wordCountMap.get(word) + 1);
        } else {
            wordCountMap.set(word, 1);
        }
    });

    return wordCountMap;
}

// Example usage
const text = "This is a test This test is simple";

// Call the function and store the result
const result = countWordOccurrences(text);

// Print the word counts
for (const [word, count] of result.entries()) {
    console.log(`${word}: ${count}`);
}
