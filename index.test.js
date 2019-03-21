const convertCurrency = require('./index');

test('convertCurrency 124.67 dollar', () => {
  const result = convertCurrency(124.67);
  expect(result).toEqual('Your change is 1 100 dollar bill, 1 20 dollar bill, 4 1 dollar bill, 2 quarter, 1 dime, 1 nickel, 2 penny');
});

test('convertCurrency 0.99 dollar', () => {
  const result = convertCurrency(0.99);
  expect(result).toEqual('Your change is 3 quarter, 2 dime, 4 penny');
});

test('convertCurrency 1.00 dollar', () => {
  const result = convertCurrency(1.00);
  expect(result).toEqual('Your change is 1 1 dollar bill');
});
