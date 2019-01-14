/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
 // slack helpers Geena Fong   and Steven Weeks 

// global variables 


const allStudents = document.querySelectorAll('.student-item'); 
console.log(allStudents);
const studentsPerPage = 10;
const div = document.createElement('div');//create space on DOM to add page buttons
div.classList.add('pagination');//add class of pagination will magically run the CSS that makes these links look like buttons
//console.log(allStudents);  // to see if I am grabbing the right thing for allStudents
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
   const upper = page * studentsPerPage - 1;    // create a range of 10 students
   const lower = upper -9; 
   /*const upper = page * studentsPerPage;
   const lower = upper -10;*/
   /*const lower = page * itemsPerPage - itemsPerPage;
   const upper = page * itemsPerPage - 1;

//alert ( 'showPage function ran'); */

   for(let i=0; i < list.length; i++){
      if (i >= lower && i <= upper) { 
         list[i].style.display = 'block'; // displays. or 'inherit'?
      } else {
         list[i].style.display = 'none'; //hides.
      }
   }
}


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list, studentsPerPage) => { // or just (list)
   const NumOfPages = Math.ceil(list.length/studentsPerPage);//Determine # of pages - list.length/10;
   const ul = document.createElement('ul');//add unorder li to new space for buttons
   const page = document.querySelector('.page');
   page.appendChild(div); // add new div to page
  // div.appendChild(ul); // trying to take this out of the loop below to see if it fixes this.
   for (let i=1; i<=NumOfPages; i++){ // creates link and launches show page function and sends in the i
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.addEventListener('click', () => { //event listener listens for click that calls show page and sends in the list and the page number and the page number is i)
         showPage(list, studentsPerPage, i);
       });
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


// Remember to delete the comments that came with this file, and replace them with your own code comments