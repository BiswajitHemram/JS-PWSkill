const urlRegex = /^(http|https):\/\/[\w\d\-._~:/?#[\]@!$&'()*+,;=]+$/;

function isValidURL(url) {
    return urlRegex.test(url);
}

const testURL1 = "https://www.example.com";
const testURL2 = "http://example.com/path/to/page";
const testURL3 = "ftp://example.com";

console.log(`URL "${testURL1}" is valid: ${isValidURL(testURL1)}`);
console.log(`URL "${testURL2}" is valid: ${isValidURL(testURL2)}`);
console.log(`URL "${testURL3}" is valid: ${isValidURL(testURL3)}`);
