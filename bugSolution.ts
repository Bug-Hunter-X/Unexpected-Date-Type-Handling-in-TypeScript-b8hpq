function greet(person: string, date: Date): string {
  const dateString = date.toDateString(); // Explicitly assign to a variable
  console.log(`Hello, ${person}, today is ${dateString}`);
  return `Hello, ${person}, today is ${dateString}`;
}

let message = greet("John Doe", new Date());
console.log(message); 
// Consider adding error handling or alternative date formatting as needed for production-ready code.