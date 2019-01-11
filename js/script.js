/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const allStudents = document.querySelectorAll('.student-item'); //or '.student-item')?
const studentsPerPage = 10;

console.log(allStudents);  // to see if I am grabbing the right thing for allStudents
//const pageNum = document.querySelector('.page');

/*** 


   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

const showPage = (list, studentsPerPage, page) => { //,page?
   //const listStudents = list.querySelectorAll ('li'); put up to be used in both showPage and Search functions
   // create a range of 10 students
   const lower = page * studentsPerPage - studentsPerPage;
   const upper = page * studentsPerPage -1; 
//alert ( 'showPage function ran');
   for(let i=0; i < list.length; i++){
      if (i >= lower && i <= upper) { /*  Keep in mind that with a list of 54 students, the last page 
         will only display four. Does the code I have work for this?*/
         list[i].style.display = 'block'; // displays. or 'inherit'?
      } else {
         list[i].style.display = 'none'; //hides.
      }
   }
};


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list, studentsPerPage) => { // or just (list)
   const NumOfPages = Math.ceil(list.length/studentsPerPage);//Determine # of pages - list.length/10;
   const div = document.createElement('div');//create space on DOM to add page buttons
   const ul = document.createElement('ul');//add unorder li to new space for buttons
   const page = document.querySelector('.page');
   page.appendChild(div); // add new div to page
   div.className = 'pagination'; //add class of pagination will magically run the CSS that makes these links look like buttons




   
   for (let i=1; i<=NumOfPages; i++){ // creates link and launches show page function and sends in the i
      const li = document.createElement('li');
      const a = document.createElement('a');

      a.href = '#'; //trying i, was # only showed page 1
      //event listener listens for click that calls show page and sends in the list and the page number and the page number is i)
      a.textContent = i;

      li.appendChild(a);
      ul.appendChild(li);
      }
   div.appendChild(ul);

   //somewhere in here goes the css styling to make these links look like buttons
   }


//add functionality














//create buttons

//add buttons

/* /create space on DOM to add page buttons
//var pagination = document.createElement('div');

//add functionality
page.appendChild(pagination);
pagination.innerHTML='<button></button>';

//add class of pagination
pagination.className = 'pagination';

//add unorder li to new space for buttons
var unorderList = document.createElement('ul');
pagination.appendChild(unorderedList); */

showPage (allStudents, studentsPerPage, 1);
appendPageLinks (allStudents, studentsPerPage);
//search (allStudents, studentsPerPage);


// Remember to delete the comments that came with this file, and replace them with your own code comments.