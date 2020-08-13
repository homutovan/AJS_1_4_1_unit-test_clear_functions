import healthHandler from '../app';

test.each([
  [60, 'healthy'],
  [50.01, 'healthy'],
  [50, 'wounded'],
  [49.99, 'wounded'],
  [25, 'wounded'],
  [15.01, 'wounded'],
  [15, 'wounded'],
  [14.99, 'critical'],
  [5, 'critical'],
  [0, 'critical'],
])(('Check health status for health value=%s, expects: %s'),
  (health, expected) => {
    const result = healthHandler({ name: 'Маг', health });
    expect(result).toBe(expected);
  });

test('checking a function without arguments', () => {
  expect(() => {
    healthHandler();
  }).toThrow('character not found');
});

test('checking a function for bad character', () => {
  expect(() => {
    healthHandler({ name: 'Маг' });
  }).toThrow('character is bad');
});
