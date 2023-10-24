export const roundNumber = (value: string | number, charAmount = 1) => {
  const numberValue = Number(value);
  if (numberValue) {
    return Number(numberValue.toFixed(charAmount));
  }
  return numberValue;
};

export const getNumberFromString = (string: string) =>
  parseInt(string.match(/\d+/)[0]);
