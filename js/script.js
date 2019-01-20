/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/ 

// global variables 
const allStudents = document.querySelectorAll('.student-item'); 
console.log(allStudents);
const studentsPerPage = 10;
const div = document.createElement('div');//create space on DOM to add page buttons
div.classList.add('pagination');//add class of pagination will magically run the CSS that makes these links look like buttons


const showPage = (list, studentsPerPage, page) => { //function that shows a particular set of 10 students and hides the rest
   const upper = page * studentsPerPage - 1;    // create a range of 10 students
   const lower = upper -9; // create a range of 10 students

   for(let i=0; i < list.length; i++){ // function to display a set # of students and hide the rest
      if (i >= lower && i <= upper) { 
         list[i].style.display = 'block'; // displays. 
      } else {
         list[i].style.display = 'none'; //hides.
      }
   }
}

const appendPageLinks = (list, studentsPerPage) => { // a function to generate, append, and add functionality to the pagination buttons.
   const NumOfPages = Math.ceil(list.length/studentsPerPage);//Determine # of pages - list.length/10;
   const ul = document.createElement('ul');//add unorder li to new space for buttons
   const page = document.querySelector('.page');
   page.appendChild(div); // add new div to page

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
      div.appendChild(ul); //add unorder li to new space for buttons
   }


showPage(allStudents, studentsPerPage, 1);
appendPageLinks(allStudents, studentsPerPage);









