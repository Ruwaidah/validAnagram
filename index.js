const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
  const strCheck = { firstStr: {}, secondStr: {} };
  for (let i = 0; i < str1.length; i++) {
    strCheck.firstStr[str1[i]] = strCheck.firstStr[str1[i]] + 1 || 1;
    strCheck.secondStr[str2[i]] = strCheck.secondStr[str2[i]] + 1 || 1;
  }
  for (let i = 0; i < str1.length; i++) {
    if (!strCheck.secondStr[str1[i]]) return false
    if (strCheck.firstStr[str1[i]] !== strCheck.secondStr[str1[i]])
      return false;
  }
  return true;
};

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));

