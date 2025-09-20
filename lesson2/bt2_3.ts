//Viết hàm trả về boolean kiểm tra 1 số có phải số nguyên tố

function isPrime(num: number): boolean {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(19));
console.log(isPrime(18));