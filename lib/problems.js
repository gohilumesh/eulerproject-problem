// Problem no 6
const sumSquareDiff = (max) => {
  if (!max || max < 1 || max > 100) {
    console.log('please enter max value between 1 to 100');
    return 0;
  }
  let sumOfSquares = 0;
  let squareOfSums = 0;

  for (let i = 1; i <= max; i += 1) {
    sumOfSquares += (i * i);
    squareOfSums += i;
  }
  return (squareOfSums * squareOfSums) - sumOfSquares;
};

// Problem no 18 or 67, solution is same
const maxPathSum = () => {
  const triangle = [
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
  ];
  const size = triangle.length;

  for (let y = size - 2; y >= 0; y -= 1) {
    for (let x = 0; x <= y; x += 1) {
      triangle[y][x] += Math.max(triangle[y + 1][x], triangle[y + 1][x + 1]);
    }
  }
  return triangle[0][0];
};


const isPalindromic = (n) => {
  const s = `${n}`;
  const size = s.length / 2;
  for (let i = 0; i < size; i += 1) {
    if (s[i] !== s[s.length - i - 1]) {
      return false;
    }
  }
  return true;
};

const isLychrel = (n) => {
  let iterations = 50;
  let data = n;
  do {
    const reversedN = `${data}`.split('').reverse().join('');
    data += parseInt(reversedN, 10);
    iterations -= 1;
  } while (!isPalindromic(data) && iterations);

  if (iterations === 0 || !isPalindromic(data)) {
    return true;
  }

  return false;
};

// Problem 55
const countLychrelNumbers = (num) => {
  if (!num || num < 1 || num > 10000) {
    console.log('please enter num value between 1 to 10000');
    return 0;
  }
  let count = 0;
  for (let i = 0; i < num; i += 1) {
    if (isLychrel(i)) {
      count += 1;
    }
  }
  return count;
};

module.exports = {
  sumSquareDiff,
  maxPathSum,
  countLychrelNumbers,
};
