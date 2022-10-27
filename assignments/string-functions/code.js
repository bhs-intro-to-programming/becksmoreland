const findFnord = (string) => {
  return string.indexOf("fnord");
}

const stringContains = (string1, string2) => {
  let containsSame = '';
  return string2 === string1.substring(string1.indexOf(string2));
}

const firstAndLast = (string) => {
  return string[0] + string[string.length - 1];
}