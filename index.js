function isPalindrome(word) {

  if (word.length <= 1) {
    return true;
  }
  

  if (word[0] !== word[word.length - 1]) {
    return false;
  }
  

  return isPalindrome(word.slice(1, -1));
}


if (require.main === module) {
  // Custom tests
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba")); 
  console.log("=>", isPalindrome("racecar")); 
  console.log("=>", isPalindrome("a"));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot")); // Expecting: false
  console.log("=>", isPalindrome("ab")); // Expecting: false
}

module.exports = isPalindrome;
