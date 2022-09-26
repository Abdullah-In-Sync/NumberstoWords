const numArr = {
  0: ["", ""],
  1: ["One", "ten"],
  2: ["two", "twenty"],
  3: ["three", "thirty"],
  4: ["four", "fourty"],
  5: ["five", "fifty"],
  6: ["six", "sixty"],
  7: ["seven", "seventy"],
  8: ["eight", "eighty"],
  9: ["nine", "ninety"],
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
};

const allArg = process.argv;
allArg.splice(0, 2);

// Main function where all the arguments will be converted into string
const numberToString = (allArg) => {
  const argsArr = allArg;
  argsArr.forEach((arg) => {
    const numberInWords = argNumberToString(arg);
    console.log(numberInWords);
  });
};

// Function which convert One Argument Only
const argNumberToString = (arg) => {
  const num = parseInt(arg).toString();
  const numsArr = num.split("");

  //if array length is one (one digit number)
  if (numsArr.length === 1) {
    return oneDigitNumber(numsArr);
  }

  //if array length is two (two digit number)
  if (numsArr.length === 2) {
    return twoDigitNumber(numsArr);
  }

  //if array length is three (three digit number)
  if (numsArr.length === 3) {
    return threeDigitNumber(numsArr);
  }

  //if array length is greater than three (more than three digit number)
  return moreThanThreeDigit(num);
};

//Fuction for One Digit Number
const oneDigitNumber = (numsArr) => {
  return numArr[numsArr][0];
};

//Fuction for Two Digit Number
const twoDigitNumber = (numsArr) => {
  return numArr[numsArr[0]][1] + " " + numArr[numsArr[1]][0];
};

//Fuction for three Digit Number
const threeDigitNumber = (numsArr) => {
  if (numsArr[1] == 0)
    return numArr[numsArr[0]][0] + " hundred " + numArr[numsArr[2]][0];
  return (
    numArr[numsArr[0]][0] +
    " hundred " +
    numArr[numsArr[1]][1] +
    " " +
    numArr[numsArr[2]][0]
  );
};

//Fuction for more than three Digit Number
const moreThanThreeDigit = (num) => {
  let number = Number(num);
  const numberArr = [];
  while (number != 0) {
    const lastThreeDigit = number % 1000;
    numberArr.push(lastThreeDigit);
    number = Math.floor(number / 1000);
  }

  //if length of array is two ( therefore the number should be of thousands)
  if (numberArr.length === 2) {
    const firstIndex = argNumberToString(numberArr[1]);
    const secondIndex = argNumberToString(numberArr[0]);

    return firstIndex + " thousands " + secondIndex;
  }

  //if length of array is three ( therefore the number should be of millions)
  if (numberArr.length === 3) {
    const firstIndex = argNumberToString(numberArr[2]);
    const secondIndex = argNumberToString(numberArr[1]);
    const thirdIndex = argNumberToString(numberArr[0]);

    //if there is a zero in place of second Index
    if (secondIndex == "") return firstIndex + " Thousands " + thirdIndex;

    return firstIndex + " Million " + secondIndex + " Thousands " + thirdIndex;
  }

  //if length of array is four ( therefore the number should be of billion)
  if (numberArr.length === 4) {
    const firstIndex = argNumberToString(numberArr[3]);
    const secondIndex = argNumberToString(numberArr[2]);
    const thirdIndex = argNumberToString(numberArr[1]);
    const fourthIndex = argNumberToString(numberArr[0]);

    //if There any Index is null
    if (!secondIndex && !thirdIndex)
      return firstIndex + " Billion " + fourthIndex;
    if (!secondIndex)
      return firstIndex + " Billion " + thirdIndex + " Thousand " + fourthIndex;
    if (!thirdIndex)
      return firstIndex + " Billion " + secondIndex + " Million " + fourthIndex;
    return (
      firstIndex +
      " Billion " +
      secondIndex +
      " Million " +
      thirdIndex +
      " Thousand " +
      fourthIndex
    );
  }

  //if length of array is five ( therefore the number should be of trillion)
  if (numberArr.length === 5) {
    const firstIndex = argNumberToString(numberArr[4]);
    const secondIndex = argNumberToString(numberArr[3]);
    const thirdIndex = argNumberToString(numberArr[2]);
    const fourthIndex = argNumberToString(numberArr[1]);
    const fifthIndex = argNumberToString(numberArr[0]);

    //if There any Index is null
    if (!secondIndex && !thirdIndex && !fourthIndex)
      return firstIndex + " Trillion " + fifthIndex;
    if (!secondIndex && !thirdIndex)
      return (
        firstIndex + " Trillion " + fourthIndex + " Thousand " + fifthIndex
      );
    if (!secondIndex)
      return (
        firstIndex +
        " Trillion " +
        secondIndex +
        " Billion " +
        thirdIndex +
        " Million " +
        fifthIndex
      );
    if (!thirdIndex)
      return (
        firstIndex +
        " Trillion " +
        secondIndex +
        " Billion " +
        fourthIndex +
        " Thousand " +
        fifthIndex
      );


    return (
      firstIndex +
      " Trillion " +
      secondIndex +
      " Billion " +
      thirdIndex +
      " Million " +
      fourthIndex +
      " Thousand " +
      fifthIndex
    );
  }
};

numberToString(allArg);
