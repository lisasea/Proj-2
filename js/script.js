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

const allStudents = document.querySelectorAll('.student-list'); //or '.student-item')?
const listStudents = list.querySelectorAll ('li');
const studentsPerPage = 10;
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
   const upper = page * studentsPerPage + 9; 

   for(let i=0; i < listStudents.length; i++){
      if (i >= lower && i <= upper) { /*  Keep in mind that with a list of 54 students, the last page 
         will only display four. Does the code I have work for this?*/
         listStudents[i].style.display = 'block'; // displays. or 'inherit'?
      } else {
         listStudents[i].style.display = 'none'; //hides.
      }
   }
};


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list, studentsPerPage) => { // or just (list)
   const pageNum = Math.ceil(listStudents.length/studentsPerPage);//Determine # of pages - allStudents.length/10;
   const div = document.createElement('div');//create space on DOM to add page buttons
   const ul = document.createElement('ul');//add unorder li to new space for buttons
   page.appendChild(div); // add new div to page
   div.innerHTML='<button></button>'; // is this right?
   div.className = 'pagination'; //add class of pagination




   
   for (let i=1; i<=pageNum; i++){
      const li = document.createElement('li');
      const a = document.createElement('a');

      a.href = '#'; 
      a.textContent = i;

      li.appendChild(a);
      ul.appendChild(li);
      }
   div.appendChild(ul);
   }


//add functionality

const link1 = div.querySelector('a');
link1.className = 'active';







}




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
search (allStudents, studentsPerPage);


// Remember to delete the comments that came with this file, and replace them with your own code comments.