import { parseEquation } from './parser';
import { solveEquation } from './solver';
import * as readline from 'readline';

function solveAndPrintEquation(equation: string) {
  try {
    // Parse the equation
    const parsedEquation = parseEquation(equation);
    
    // Solve the equation
    const solution = solveEquation(parsedEquation);
    
    // Display the results
    console.log(`Reduced form: ${solution.reducedForm}`);
    console.log(`Polynomial degree: ${solution.degree}`);
    
    if (solution.message) {
      console.log(solution.message);
    }
    
    if (solution.solutions) {
      if (solution.solutions.length === 1) {
        console.log(`The solution is:\n${solution.solutions[0]}`);
      } else if (solution.solutions.length > 1) {
        console.log(solution.solutions.join('\n'));
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error('An unknown error occurred');
    }
    process.exit(1);
  }
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length > 0) {
    // If argument provided, use it directly
    solveAndPrintEquation(args[0]);
  } else {
    // If no argument, read from standard input
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Enter your equation: ', (equation) => {
      solveAndPrintEquation(equation);
      rl.close();
    });
  }
}

main(); 