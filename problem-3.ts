function countWordOccurrences(sentence: string, word: string): number {
  // Convert both the sentence and the word to lowercase to ignore case
  const lowerCaseSentence = sentence.toLowerCase();
  const lowerCaseWord = word.toLowerCase();

  // Split the sentence into words
  const words = lowerCaseSentence.split(" ");

  // Count the occurrences of the word
  let count = 0;
  for (const w of words) {
    if (w === lowerCaseWord) {
      count++;
    }
  }

  return count;
}

console.log(countWordOccurrences("I am Sakib", "Sakib"));
