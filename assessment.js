function customSort(input) {
    // Count the frequency of characters
    const charCount = {};
    for (const char of input) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Sort the characters based on frequency and alphabetically
    const sortedChars = Object.keys(charCount).sort((a, b) => {
      if (charCount[a] === charCount[b]) {
        return a.localeCompare(b);
      } else {
        return charCount[b] - charCount[a];
      }
    });
  
    // Build the sorted string
    let result = '';
    for (const char of sortedChars) {
      result += char.repeat(charCount[char]);
    }
  
    return result;
  }
  
  const input = "zzzzttteeeqqaao";
  const output = customSort(input);
  console.log(output); // Output: "zzzzeeetttaaqqo"
  