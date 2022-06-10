import calculator from "../calculator";

test("Calculator add test", () => {
  const sum = calculator.add(1, 2);
  expect(sum).toBe(3);
  const sum1 = calculator.add(-5, 10);
  expect(sum1).toBe(5);
});

test("Calculator subtract test", () => {
  const sum = calculator.subtract(1, 2);
  expect(sum).toBe(-1);
  const sum1 = calculator.subtract(-5, 10);
  expect(sum1).toBe(-15);
});

test("Calculator divide test", () => {
  const sum = calculator.divide(10, 2);
  expect(sum).toBe(5);
  const sum1 = calculator.divide(100, 10);
  expect(sum1).toBe(10);
});

test("Calculator multiply test", () => {
  const sum = calculator.multiply(10, 2);
  expect(sum).toBe(20);
  const sum1 = calculator.multiply(100, 10);
  expect(sum1).toBe(1000);
});
