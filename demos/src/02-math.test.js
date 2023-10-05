const { sum, multiply, divide, raiseExponent } = require("./02-math");

test("adds 1 + 3 should be 4", () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test("multiply 1 * 3 should be 3", () => {
  const rta = multiply(1, 3);
  expect(rta).toBe(3);
});

test("divide", () => {
  const rta = divide(9, 3);
  expect(rta).toBe(3);
  const rta2 = divide(8, 4);
  expect(rta2).toBe(2);
});

test("divide for zero", () => {
  const rta = divide(9, 0);
  expect(rta).toBeNull();
  const rta2 = divide(8, 0);
  expect(rta2).toBeNull();
});

test("raiseExponent", () => {
  const rta = raiseExponent(2, 3);
  expect(rta).toBe(8);
  const rta2 = raiseExponent(1, 0);
  expect(rta2).toBe(1);
});
