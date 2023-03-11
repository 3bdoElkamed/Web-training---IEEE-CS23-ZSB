console.log("-------------- Assignment 1 ---------------------");
let numberOne=10 ,numberTwo=20;
  console.log(numberOne + "" +numberTwo);              // Normal Concatenate => 1020
  console.log(typeof(numberOne + "" +numberTwo));      // Normal Concatenate => String
  console.log(`${numberOne}${numberTwo}`);            // Template Literals Way => 1020
  console.log(typeof(`${numberOne}${numberTwo}`));  // Template Literals Way => String
    
  console.log(numberOne + "\n" +numberTwo);         
  /*
    Normal Concatenate
      10
      20
  */
  
  console.log(`${numberOne}
${numberTwo}`);                           
  /*
    Template Literals Way
      20
      10
  */
  
/////////////////////////////////////////////////////////////////
console.log("-------------- Assignment 2 ---------------------");

console.log(elzero.innerHTML);     // object
console.log(typeof elzero);       // object

////////////////////////////////////////////////////////////////
console.log("-------------- Assignment 3 ---------------------");

console.log(`\`I'm In
\\\\
Love \\\\ """ '''
++ With ++
\\"""\\"""
"""JavaScript""\`\` `);


////////////////////////////////////////////////////////////////
console.log("-------------- Assignment 4 ---------------------");

let a = 21;
let b = 20;

console.log("_"+a+"_"+b+a+"_"+b+a+"_"+b+a+"_"+b+"_");   // _21_2021_2021_2021_20_
// We can use repeat function
console.log("_"+a + (("_"+b+a).repeat(3))+"_" +b+ "_");   // _21_2021_2021_2021_20_

