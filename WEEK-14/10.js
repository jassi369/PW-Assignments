function wordCounter(sentence) {
    const words = sentence.split(/\s+/);
    const wordMap = new Map();

    for (const word of words) {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1);
        } else {
            wordMap.set(word, 1);
        }
    }

    return wordMap;
}

const Sentence = "please please submit your assignment on time your assignments are important";
const result = wordCounter(Sentence);

console.log(result);
