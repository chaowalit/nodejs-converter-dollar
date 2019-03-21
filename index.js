const dollarBillConfig = [100, 50, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
const convertToText = ['100 dollar bill', '50 dollar bill', '20 dollar bill', '10 dollar bill', '5 dollar bill',
  '1 dollar bill', 'quarter', 'dime', 'nickel', 'penny'];

const outputToString = (convertToCount) => {
  const str = { text: 'Your change is ' };
  let checkFirstItem = true;
  convertToCount.forEach((val, index) => {
    let loopStr = '';
    if (checkFirstItem && val > 0) {
      loopStr = `${val} ${convertToText[index]}`;
      checkFirstItem = false;
    } else if (val > 0) {
      loopStr = `, ${val} ${convertToText[index]}`;
    }
    str.text += loopStr;
  });
  return str.text;
};

const convertCurrency = (input) => {
  let dollar = input;
  const convertToCount = [];
  dollarBillConfig.forEach((val) => {
    const resultInt = parseInt((dollar / val), 10);
    dollar -= ((resultInt * val));
    dollar = dollar.toFixed(2);
    convertToCount.push(resultInt);
  });
  return outputToString(convertToCount);
};

module.exports = convertCurrency;
