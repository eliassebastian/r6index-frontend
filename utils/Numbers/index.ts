
export const convertNumberToTwoDecimals = (number: number) => {
    // Check if the number is a float
    if (number % 1 !== 0) {
      // If it's a float, fix it to two decimal places
      return number.toFixed(2);
    }
    // If it's not a float, return the number as it is
    return number;
}