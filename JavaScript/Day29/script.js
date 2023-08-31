 // Get references to the HTML elements
 const taskInput = document.getElementById('task');
 const addBtn = document.getElementById('add');
 const taskList = document.getElementById('task-list');

 // Load tasks from local storage
 const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
 if(tasks)
 {
     console.log("Empty Task Created");
     console.log(tasks);
 }

 // Function to save tasks to local storage
 function saveTasks() {
     localStorage.setItem('tasks', JSON.stringify(tasks));
 }

 // Function to render tasks on the page
 function renderTasks() {
     taskList.innerHTML = '';

     tasks.forEach((task, index) => {
         const li = document.createElement('li');
         li.innerHTML = `
             ${task}
             <button class="edit" data-index="${index}">Edit</button>
             <button class="delete" data-index="${index}">Delete</button>
         `;
         taskList.appendChild(li);
     });

     // Attach event listeners for editing and deleting tasks
     const editButtons = document.querySelectorAll('.edit');
     const deleteButtons = document.querySelectorAll('.delete');

     editButtons.forEach((button) => {
         button.addEventListener('click', (e) => {
             const index = e.target.getAttribute('data-index');
             const updatedTask = prompt('Edit task:', tasks[index]);
             if (updatedTask !== null) {
                 tasks[index] = updatedTask;
                 saveTasks();
                 renderTasks();
             }
         });
     });

     deleteButtons.forEach((button) => {
         button.addEventListener('click', (e) => {
             const index = e.target.getAttribute('data-index');
             tasks.splice(index, 1);
             saveTasks();
             renderTasks();
         });
     });
 }

 // Add task when the "Add" button is clicked
 addBtn.addEventListener('click', () => {
     const newTask = taskInput.value.trim();
     if (newTask !== '') {
         tasks.push(newTask);
         saveTasks();
         taskInput.value = '';
         renderTasks();
     }
 });

// Get the anchor element by its ID
// const linkElement = document.getElementById("myLink");
// console.log(linkElement);
// Get the current href attribute
// const currentHref = linkElement.getAttribute("href");
// const id = linkElement.getAttribute('id');
// console.log(id); 
// Change the href attribute to a new URL
// linkElement.setAttribute("href", "https://www.yahoo.com/");
// linkElement.setAttribute("id", "YouLink");
// console.log(linkElement);
// Print the updated href attribute
// console.log("Updated href:", linkElement.getAttribute("href"));
