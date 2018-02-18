const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should return greeting from name', () => {
  const greeting = generateGreeting('Maggie');
  expect(greeting).toBe('Hello Maggie!');
})

test('should return greeting for no name', () => {
  const greeting = generateGreeting();
  expect(greeting).toBe('Hello Anonymous!');
})
