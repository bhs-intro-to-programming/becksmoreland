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
  return legOne ** 2 + legTwo ** 2;
}

const maxRadius = (width, height) => {
  return (width + height) / 8;
}

const numCircles = (radius, width) => {
  let d = radius * 2;
  return width / d;
}

const offset = (widthPixels, figureWidth) => {
  return (widthPixels - figureWidth)  ;
}

const canSleepIn = (isWeekday, onVacation) => {
  return !isWeekday || onVacation;
}

const canGoToProm = (isSenior, invited, onExclusionList) => {
  return isSenior || invited && !onExclusionList;
}

const getsSpeedingTicket = (mphDriving, isGrouchy) => {
  return mphDriving > 65 && isGrouchy || mphDriving > 70 && !isGrouchy;
}

const moreThanTwiceAsLong = (string1, string2) => {
    return string1.length > string2.length * 2;
}
const aFartherThanB = (number1, number2, number3) => {
  return Math.abs(number1 - number3) > Math.abs(number2 - number3);
}

const firstHalf = (string) => {
  return string.substring(0, Math.floor(string.length / 2));
}

