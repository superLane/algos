function getStr(message, k) {
  let newStr = "";
  let str = message.split(" ");
  for (i = 0; i < str.length; i++) {
    wordLength = str[i].length;
    if (newStr.length + wordLength <= k) {
      newStr += str[i] + " ";
    }
    else {
      break;
    }
    
  }
  console.log(newStr.trim());
}

getStr("Codility we test coders", 14);
