const indexing = (string, string2) => {
  string.indexOf(string2);
}
 
const findFnord = (string) => {
  return string.indexOf("fnord");
}

const stringContains = (string1, string2) => {
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

const upDown = (string) => {
  return string.toUpperCase() + string.toLowerCase();
}

const everyOther = (string) => {
  string[0] + string [2] + string [4];
}

const firstName = (string) => {
  return string.substring(0, string.indexOf(' '))
}

const lastName = (string) => {
  return string.substring(string.indexOf(' ') + 1)
}

const concatenate = (string, string2) => {
  return string + string2;
}

const firstCharacter = (string) => {
  return string[0];
}

const lastCharacter = (string) => {
  return string[string.length - 1];
}

const allButFirst = (string) => {
  return string.substring(1);
}

const firstThree = (string) => {
  return string.substring(0, 3);
}

const allButFirstAndList = (string) => {
  return string.substring(1, string.length - 1);
}

const lastThree = (string) => {
  return string.substring(string.length - 3);
}

const capitalize = (string) => {
  return string[0].toUpperCase() + string.substring(1).toLowerCase();
}

const capitalizeFirstThree = (string) => {
  return string.substring(0, 3).toUpperCase() + string.substring(3).toLowerCase();
}