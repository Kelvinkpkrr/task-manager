const { calcTip } = require("../src/math");

test("should calculate total with tip", () => {
  const total = calcTip(100, 0.1);
  expect(total).toBe(110);
});

test("should calculate total with default tip", () => {
  const total = calcTip(100);
  expect(total).toBe(125);
});
