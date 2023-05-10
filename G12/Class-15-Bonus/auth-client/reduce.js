console.log("works");

// Reduce recap
const nums = [1, 23, 54, 12, 3, 2, 2];

const sum = nums.reduce((acc, el) => {
  acc += el;
  //   The reduce callback must return always the accumulator otherwise reduce wont work
  return acc;
}, 0);

const evensOdds = nums.reduce(
  (acc, el) => {
    el % 2 === 0 ? acc.evens.push(el) : acc.odds.push(el);

    // This trick is used to make the browser accurate when displaying objects in the console
    console.log(JSON.parse(JSON.stringify(acc)));
    return acc;
  },
  { evens: [], odds: [] }
);

console.log("This is the sum", sum);
console.log("This is the evens array", evensOdds);
