
// Check if number is a float
const isFloat = (num: number) => num % 1 !== 0;

// Convert number to two decimals if it is a float
export const convertNumberToTwoDecimals = (number: number) => {
    return isFloat(number) ? number.toFixed(2) : number;
}

// Calculate step value for range slider based on min and max values and type of values
export const calculateStepValue = (min: number, max: number) => {
    const isMinOrMaxFloat = isFloat(min) || isFloat(max);
    if (!isMinOrMaxFloat) return 1;

    const granularity = 100; // Adjust granularity for floats
    const numberOfSteps = (max - min) * granularity;
    const stepValue = (max - min) / numberOfSteps;

    return parseFloat(stepValue.toFixed(2));
}