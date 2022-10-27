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

const simplePigLatin = (string, number) => {
  return string.substring(number) + string.substring(0, number) + 'ay';
}

const isAllUpperCase = (string) => {
  return string.toUpperCase() === string;
}

const sameIgnoringCase = (string1, string2) => {
  return string1.toLowerCase() === string2.toLowerCase();
}

const firstHalf = (string) => {
  return string.substring(0, string.length / 2);
}

const secondHalf = (string) => {
  return string.substring(string.length / 2);
}

