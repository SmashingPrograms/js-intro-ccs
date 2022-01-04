const {num1, num2, num3, num4} = {11, 1, 6, 18}
console.log(num1)
(function() {
    ///// VARIABLES 1 \\\\\

    // Add your code here

    let myName1;
    myName1 = "Billy";
    let myAge = 22;

    // Don't edit the code below here!

    section.innerHTML = ' ';
    const para1 = document.createElement('p');
    para1.textContent = myName1;
    const para2 = document.createElement('p');
    para2.textContent = myAge;
    section.appendChild(para1);
    section.appendChild(para2);
})();

///// VARIABLES 2 \\\\\

// Add your code here

let myName2 = 'Paul';
myName2 = "Billy";

// Don't edit the code below here!

section.innerHTML = ' ';
const para = document.createElement('p');
para.textContent = myName2;
section.appendChild(para);


///// VARIABLES 3 \\\\\

// Add your code here

let myName3 = 'Default';
myName3 = 'Chris';

let myAge3 = '42';

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
const para2 = document.createElement('p');
para1.textContent = myName3;
para2.textContent = `In 20 years, I will be ${myAge3 + 20}`;
section.appendChild(para1);
section.appendChild(para2);
