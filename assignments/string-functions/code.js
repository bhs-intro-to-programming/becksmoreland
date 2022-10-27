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

const swapFrontAndBack = (string) => {
  return string.substring(string.length / 2) + string.substring(0, string.length/2)
}