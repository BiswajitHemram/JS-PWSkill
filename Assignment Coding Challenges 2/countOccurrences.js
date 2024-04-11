function count(text) {
    const countMap = new Map();
    for (const word of text) {
        if (countMap.has(word)) {
            countMap.set(word, countMap.get(word) + 1);
        } else {
            countMap.set(word, 1);
        }
    }
    return countMap;
}

const text = "You are building a word count generator that will take a large string of text as input and output the words and the number of times they are present in the string";

const textLower = text.toLowerCase().split(/\s+/);
console.log(count(textLower));
