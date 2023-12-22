const a = parseFloat(prompt("ENTER FIRST NUMBER"));
const b = parseFloat(prompt("ENTER SECOND NUMBER"));

if (isNaN(a) || isNaN(b)) {
  alert("Please enter valid numbers.");
} else {
  function add(a, b) {
    return a + b;
  }

  function sub(a, b) {
    return a - b;
  }

  function multi(a, b) {
    return a * b;
  }

  function div(a, b) {
    // Check for division by zero
    return b !== 0 ? a / b : "Cannot divide by zero";
  }

  const ad = add(a, b);
  alert("Sum: " + ad);

  const su = sub(a, b);
  alert("Difference: " + su);

  const mu = multi(a, b);
  alert("Product: " + mu);

  const di = div(a, b);
  alert("Quotient: " + di);
}
