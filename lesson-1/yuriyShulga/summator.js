const summator = (...args) => {
  const reducer = (accumulator, nextValue) => {
    let accum = parseInt(accumulator, 10);
    if (Number.isNaN(accum)) {
      return nextValue;
    }

    let nextVal = parseInt(nextValue, 10);
    return Number.isNaN(nextVal) ? accum : accum + nextVal;
  };

  return args.reduce(reducer);
};

console.log(summator(NaN, 2, '2kg')); // 4
console.log(summator('3', 8, null, 'parrots')); // 11
