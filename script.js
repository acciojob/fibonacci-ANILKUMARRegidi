 function fibonacci(num) {
    let prev = 0;
    let current = 1;
  
    for (let i = 2; i <= num; i++) {
      let fib = prev + current;
      prev = current;
      current = fib;
    }
  
    return prev; // Return the Fibonacci number at num - 1 index
  }
  const result = fibonacci(num);
  console.log(result);
  module.exports = fibonacci;
  