myVariable = "Hello from the global scope!";

setTimeout(() => {
  console.log(myVariable);
}, 1000);

// after 1sec, the global variable will be logged to the console using setTiemout (which also is a global function)
// both the varible and the function aren't decalared using const, var or let.

console.log("Executed");
