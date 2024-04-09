const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

function isValidLinkedInProfileURL(url) {
    return linkedinRegex.test(url);
}


const testURL1 = "https://www.linkedin.com/in/johndoe123";
const testURL2 = "https://www.linkedin.com/in/jane_smith";
const testURL3 = "https://www.linkedin.com/in/jo-hn";
const testURL4 = "https://www.linkedin.com/in/john_doe"; 

console.log(`URL "${testURL1}" is a valid LinkedIn profile URL: ${isValidLinkedInProfileURL(testURL1)}`);
console.log(`URL "${testURL2}" is a valid LinkedIn profile URL: ${isValidLinkedInProfileURL(testURL2)}`);
console.log(`URL "${testURL3}" is a valid LinkedIn profile URL: ${isValidLinkedInProfileURL(testURL3)}`);
console.log(`URL "${testURL4}" is a valid LinkedIn profile URL: ${isValidLinkedInProfileURL(testURL4)}`);
