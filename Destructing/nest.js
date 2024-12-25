function extractNameAndStreet(person) {
    // Destructure name and street from the nested object
    const {
        name,
        address: { street }
    } = person;

    return { name, street };
}

// Example usage
const person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    }
};

const result = extractNameAndStreet(person);
console.log(result); // Output: { name: "John Doe", street: "123 Main St" }
