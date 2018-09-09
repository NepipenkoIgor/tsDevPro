const summator = (...args) => {
  if (args.length === 0) {
    throw new Error('No arguments');
  }

  const allStrings = () => args.every(arg => typeof arg === 'string');
  const allNumbers = () => args.every(arg => !Number.isNaN(parseInt(arg, 10)));
  const reducer = (acum, nextVal) => acum + nextVal;
  const getSum = () => args.reduce(reducer);

  return allStrings(args) || allNumbers(args) ? getSum(args) : new Error('Wrong args!');
};

console.log(summator(1, 2, 2)); // 5
console.log(summator('3', '8', ' ', 'parrots')); // 38 parrot
