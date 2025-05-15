const {checkInput,getRandomRange,guess} = require('../src/fun.js');

test('If the input is invalid or not in th right range should return a report', () => {
    expect(checkInput(1.1, 50)).toBe("Please enter a integer number between 1 and 100 or enter 0 to quit.");
    expect(checkInput(101, 50)).toBe("Please enter a integer number between 1 and 100 or enter 0 to quit.");
    expect(checkInput(-1, 50)).toBe("Please enter a integer number between 1 and 100 or enter 0 to quit.");
    expect(checkInput("a", 50)).toBe("Please enter a integer number between 1 and 100 or enter 0 to quit.");
});

test('If the input is 0 should return exit', () => {
    expect(checkInput(0, 50)).toBe("exit");
});

test('If the input is less than the guess number should return "Too low!"', () => {
    expect(checkInput(30, 50)).toBe("Too low!");
});

test('If the input is greater than the guess number should return "Too high!"', () => {
    expect(checkInput(70, 50)).toBe("Too high!");
});

test('If the input is equal to the guess number should return "Correct!"', () => {
    expect(checkInput(50, 50)).toBe("Correct!");
});

test('getRandomRange should return a number between min and max', () => {
    const min = 1;
    const max = 100;
    const randomNumber = getRandomRange(min, max);
    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
});






