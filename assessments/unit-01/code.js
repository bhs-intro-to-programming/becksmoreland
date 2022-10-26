// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

// Write your code here ...

const averageWeight = (totalWeight, numOfItems) => {
  return totalWeight / numOfItems;
}

const hypotenuse = (legOne, legTwo) => {
  return Math.sqrt(legOne ** 2 + legTwo ** 2);
}

const maxRadius = (width, height) => {
  return (width + height) / 8;
}

const numCircles = (radius, width) => {
  let d = radius * 2;
  return width / d;
}

const offset = (widthPixels, figureWidth) => {
  return (widthPixels - figureWidth) / 2;
}

const canSleepIn = (isWeekday, onVacation) => {
  return !isWeekday || onVacation;
}

const canGoToProm = (isSenior, invited, onExclusionList) => {
  return (isSenior || invited) && !onExclusionList;
}

const getsSpeedingTicket = (mphDriving, isGrouchy) => {
  return mphDriving > 65 && isGrouchy || mphDriving > 70 && !isGrouchy;
}

const moreThanTwiceAsLong = (string1, string2) => {
    return string1.length > string2.length * 2;
}
const aFartherThanB = (numberA, numberB, numberC) => {
  return Math.abs(numberA - numberC) > Math.abs(numberB - numberC);
}

const firstHalf = (string) => {
  return string.substring(0, Math.floor(string.length / 2));
}

const secondHalf = (string) => {
  return string.substring (Math.floor(string.length / 2), string.length);
}

const upDown = (string) => {
  return string.toUpperCase() + string.toLowerCase();
}

const everyOther = (string) => {
  for (x === 1; x <= string; x++) {
    if (x % 2 === 0) {
      string[x].toUpperCase();
    } else {
      string[x].toLowerCase();
    }
  }
}

const upDownLastCharacter = (string) => {
  return string[string.length - 1].toUpperCase() + string[string.length - 1].toLowerCase();
}

const yesIfEven = (number) => {
  if ((number + 2) % 2 === 0) {
    return 'yes';
  } else {
    return 'no'
  }
}

