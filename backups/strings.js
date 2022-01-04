///// STRINGS 1 \\\\\


// Add your code here

const quoteStart = 'Don\'t judge each day by the harvest you reap ';
const quoteEnd = 'but by the seeds that you plant.';
const finalQuote = quoteStart + quoteEnd;

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = finalQuote;

section.appendChild(para1);


///// STRINGS 2 \\\\\

const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
const substring = 'green eggs and ham';

// Add your code here

const quoteLength = quote.length;
const index = quote.indexOf(substring);
const revisedQuote = quote.slice(0, index+substring.length+1)

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = `The quote is ${ quoteLength } characters long.`;
const para2 = document.createElement('p');
para2.textContent = revisedQuote;

section.appendChild(para1);
section.appendChild(para2);

///// STRINGS 3 \\\\\

const quote = 'I dO nOT lIke gREen eGgS anD HAM';

// Add your code here

let fixedQuote = quote.toLowerCase();
fixedQuote = fixedQuote.replace("green eggs and ham", "squash");
const finalQuote = fixedQuote + "."

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = fixedQuote;
const para2 = document.createElement('p');
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);

///// STRINGS 4 \\\\\

const theorem = 'Pythagorean theorem';

const a = 5;
const b = 8;
const c = 9;

const myString = `Using ${theorem}, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${c}.`;

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);

