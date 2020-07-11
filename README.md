# Node Stats Helpers
[![Build Status](https://travis-ci.com/jeremyqzt/NodeStats.svg?branch=master)](https://travis-ci.com/jeremyqzt/NodeStats) [![Coverage Status](https://coveralls.io/repos/github/jeremyqzt/NodeStats/badge.svg?branch=master)](https://coveralls.io/github/jeremyqzt/NodeStats?branch=master) [![codebeat badge](https://codebeat.co/badges/9ff08632-d4ea-4535-a22c-c6325bb7657f)](https://codebeat.co/projects/github-com-jeremyqzt-nodestats-master)

This is a library that helps with some common stats operations. We support the following:
 * Combinations
   *  Counting number of combinations
   *  Getting an array of k-combinations
   *  Getting all power sets
 * Permutations
    *  Counting number of permutations
    *  Getting an array of k-permutations
    *  Getting an array of all permutations
 * Statical Calculation
    * Mean, Median, Mode
    * Geometric means
    * Standard deviation (sample or population)
    * Z-Score from mean/standard deviation or input
    * Correlation
 * Z-score table (From -3.99 to 3.99)
 * Simple probability calculations

Full Docs can be found at [our git pages](https://jeremyqzt.github.io/NodeStats/).
Example usages are as followed.

## Importing
The libraries can be imported using the following.
```
const {probabilityLib, statsLib, combinationLib, permutationLib} = require('@jeremyqzt/nodestats');
```

## Combination Helper
### Counting number of combinations
Returns the number of pemutations of the given input. The following is 5 choose 3 (5C3) and 10 choose 7 (10C7).
```
console.log(combinationLib.countCombinations(5,3))
//=> 10
console.log(combinationLib.countCombinations(10,7))
//=> 120
```

### Getting the combinations
Returns the combinations of the given input. This utilizes the Forward-Backward Algorithm for generating combinations.
```
console.log(combinationLib.combinations([1,2,3,4,5,6,7,8,9,10],7))
//=> [ Set { 1, 2, 3, 4, 5, 6, 7 },
//     Set { 1, 2, 3, 4, 5, 6, 8 },
//     Set { 1, 2, 3, 4, 5, 6, 9 },
//     Set { 1, 2, 3, 4, 5, 6, 10 },
//     Set { 1, 2, 3, 4, 5, 7, 8 },
//     Set { 1, 2, 3, 4, 5, 7, 9 },
//     ...119 more
console.log(combinationLib.combinations([1,2,3,4,5,6,7,8,9,10],7).length)
//=> 120
```

### Counting number of power sets
Returns the number of combinations of the given input.
```
console.log(combinationLib.countPowerSet(6));
//=> 64
```

### Getting the power sets
Returns the powersets of the given input.
```
console.log(combinationLib.powerSet([1,2,3,4,5]));
//=> [ Set {},
//     Set { 1 },
//     Set { 2 },
//     Set { 1, 2 }, 
//     Set { 3 }, 
//     Set { 1, 3 }, 
//     ...26 more
```

## Permutation Helper

### Factorials
Returns the evaluated factorial of the given input.
```
console.log(permutationLib.factorial(5));
//=> 120
```

### Counting number of permutations
Returns the number of pemutations of the given input. The following is 5P5.
```
console.log(permutationLib.countPermutation(5,5))
//=> 120
console.log(permutationLib.countPermutation(5,1))
//=> 5
```

### Getting the permutations
Returns the pemutations of the given input. This utilizes Heap's Algorithm for generating permutations.
```
console.log(permutationLib.permutation([1,2,3]))
//=> [ [ 1, 2, 3 ],
//     [ 2, 1, 3 ],
//     [ 3, 1, 2 ],
//     [ 1, 3, 2 ],
//     [ 2, 3, 1 ],
//     [ 3, 2, 1 ]
//   ]
```

### Getting N permutations
Returns the N pemutations of the given input. This utilizes a recursive algorithm to generate all permutations of a given length. The Following is 3-length permutations of 5 (5P3).
```
console.log(permutationLib.kPermutations([1,2,3,4,5], 3))
//=> [ [ 1, 2, 3 ],
//     [ 1, 2, 4 ],
//     [ 1, 2, 5 ],
//     [ 1, 3, 2 ],
//     [ 1, 3, 4 ],
//     [ 1, 3, 5 ],
//     ...54 more
console.log(permutationLib.nPermutations([1,2,3,4,5], 3).length)
//=> 60
```

## Probability Helper
### P(X and Y)
Probability of X and Y occuring (Assuming X and Y are independent).
```
console.log(probabilityLib.XandY(0.5, 0.3))
//=> 0.15
```

### P(X or Y)
Probability of X or Y occuring (Assuming X and Y are independent).
```
console.log(probabilityLib.XorY(0.5, 0.3))
//=> 0.65
```

### P(X and ~Y)
Probability of X and NOT Y occuring (Assuming X and Y are independent).
```
console.log(probabilityLib.XandNotY(0.5, 0.3))
//=> 0.35
```

### P(X | Y)
Probability of X occuring given that Y occured (Assuming X and Y are independent).
```
console.log(probabilityLib.XgivenY(0.5, 0.3))
//=> 0.5
```

### P(X | ~Y)
Probability of X occuring given that Y DID NOT occured (Assuming X and Y are independent).
```
console.log(probabilityLib.XgivenNotY(0.5, 0.3))
//=> 0.5
```

## Stats Helper
### Sum of array
Returns a value representing the sum of the input array. Returns 0 if input is invalid.
```
console.log(statsLib.sum([1,2,3,4,5]));
//=> 15
```

### Geometric sum of array
Returns a value representing the factorial of the input array. Returns 0 if input is invalid.
```
console.log(statsLib.geometricSum([1,2,3,4,5]));
//=> 120
```

### Mean of array
Returns a value representing the factorial of the input array. Returns _undefined_ if input is invalid.
```
console.log(statsLib.mean([1,2,3,4,5]));
//=> 3
```

### Geometric mean of array
Returns a value representing the geometric mean of the input array. Returns _undefined_ if input is invalid.
```
console.log(statsLib.geometricMean([1,2,3,4,5]));
//=> 2.605171084697352
```

### Median of array
Returns a value representing the geometric mean of the input array. Returns _NaN_ if input is invalid.
```
console.log(statsLib.median([1,2,3,4,5]));
//=> 3
console.log(statsLib.median([5,3,1,4,2,3,4,5]));
//=> 3.5
```

### Mode of array
Returns a value representing the mode of the input array.
```
console.log(statsLib.mode([1,2,3,4,5]));
//=> [ 1, 2, 3, 4, 5 ]
console.log(statsLib.mode([5,3,1,4,2,3,4,5]));
//=> [ 3, 4, 5 ]
console.log(statsLib.mode([5,3,1,4,2,3,4,5,7,7,7]));
//=> [ 7 ]
```

### Standard deviation of array
Returns a value representing the standard deviation of the input array. Assumes the input array is the population unless otherwise specified. Returns _NaN_ if input is invalid.
```
console.log(statsLib.stdev([5,3,1,4,2,3,4,5,7,7,7], opt = {"population": true}));
//=> 1.966664332071267
console.log(statsLib.stdev([5,3,1,4,2,3,4,5,7,7,7], opt = {"population": false}));
//=> 2.062654952856986
```

### Absolute percentile of array
Returns a value representing the given percentile of the input array. The following example gives the 80th percentile value - which is 5.
```
console.log(statsLib.absolutePercentile(80, [5,3,1,4,2,3,4,5,7,7,7]));
//=> 5
```

### Z-score of an value, mean and standard deviation
Returns a value representing the percentile of a value and a given input. Value does not have to be in the input, a Z-score calculation and lookup occurs. Returns _undefined_ if input is not a number.
```
console.log(statsLib.percentileFromMeanAndStdev(5, 5.5, 3));
//=> 0.43251
console.log(statsLib.percentileFromMeanAndStdev(5, 22, 1.3));
//=> 0.00003
```

### Z-score of a value and array
Returns a value representing the Z-score of the input array.
```
console.log(statsLib.zScore(7, [5,3,1,4,2,3,4,5,7,7,7]));
//=> 1.3405254742109705
console.log(statsLib.zScore(10, [5,3,1,4,2,3,4,5,7,7,7]));
//=> 2.8659510138303506
```

### Percentile given value and input array
Returns a value representing the Z-score of the mean and standard deviaiton. Returns _undefined_ if input is not a number.
```
console.log(statsLib.percentile(13, [1,2,3,4,5,6,7,8,9,10], opt={"population": false}));
//=> 0.99343
console.log(statsLib.percentile(5, [1,2,3,4,5,6,7,8,9,10], opt={"population": true}));
//=> 0.43251
console.log(statsLib.percentile(5.5, [1,2,3,4,5,6,7,8,9,10], opt={"population": true}));
//=> 0.5
```

### Z-score percentile
Returns a value representing the percentile of a given Z-score. Returns _undefined_ if input is not a number.
```
console.log(statsLib.zScorePercentile(3.99));
//=> 0.99997
console.log(statsLib.zScorePercentile(-2.1));
//=> 0.01786
```

### Correlations
Returns a value representing the correlatio between 2 arrays
```
console.log(statsLib.correlation([1,2,3,4,5], [1,2,3,4,5]))
//=> 1
console.log(statsLib.correlation([1,2,3,4,5], [-1,-2,-3,-4,-5]))
//=> -1
console.log(statsLib.correlation([1,4,9,5,3], [-1,-2,-3,-4,-5]))
//=> -0.266500895444513
```