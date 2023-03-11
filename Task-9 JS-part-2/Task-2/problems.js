// Problem 1: Convert Hours into Seconds
function howManySeconds(hours) {
  return hours * 3600;
}
// Problem 2:Add up the Numbers from a Single Number
// O(1)
function addUp(num) {
	return num*(num+1) / 2
}
//O(n)
function addUp_(num) {
	let sum=0;
  for(let i=1;i<=num;i++)sum+=i;
  return sum;
}

// Problem 3: Matchstick Houses
function matchHouses(step) {
  if (step === 0) return 0;
  else return step * 5 + 1;  // return (step === 0) ? 0 : 5 * step + 1;
}

// Problem 3: Left Shift by Powers of Two
function shiftToLeft(x, y) {
	return x * (2**y); // x * Math.pow(2,y)
}