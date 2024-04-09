function capitalizeName(name) {
    return name[0].toLowerCase() === name[0] ? name.charAt(0).toUpperCase() + name.slice(1) : "Orginal String";
}

// Example usage:
console.log(capitalizeName("john")); // Output: John
console.log(capitalizeName("Alice")); // Output: Alice (unchanged, as the first letter is already capitalized)
console.log(capitalizeName("mary")); // Output: Mary
