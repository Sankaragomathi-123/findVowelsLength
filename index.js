function findVowelsLengthReverse(str) {
  let vowelsLetter = {};
  let sumCount = 0;
  const replaceText = str.replace("hero", "vaillan");
  console.log(replaceText, "replaceText");

  for (let i = 0; i < replaceText.length; i++) {
    const char = replaceText[i];
    if ("aeiouAEIOU".includes(char)) {
      if (vowelsLetter[char]) {
        vowelsLetter[char]++;
      } else {
        vowelsLetter[char] = 1;
      }
    }
  }
  const value = Object.values(vowelsLetter);
  for (let i = 0; i < value.length; i++) {
    console.log(value[i], "nit");
    sumCount += value[i];
  }
  console.log(sumCount, "sumCount");
  return sumCount;
}

const text = "My dad is super hero";

console.log(findVowelsLengthReverse(text));
