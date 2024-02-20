function findVowelsLengthReverse(str) {
  let vowelsLetter = {};
  const replaceText = str.replace("hero", "vaillan");

  for (let i = 0; i < replaceText.length; i++) {
    const char = replaceText[i];
    if ("aeiouAEIOU".includes(char)) {
      console.log(char, "char");

      vowelsLetter[char] = i;
    }
  }
  return vowelsLetter;
}

const text = "My dad is super hero";

console.log(findVowelsLengthReverse(text));
