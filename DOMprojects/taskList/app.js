

// Defining UI Vars
const form=document.querySelector("#task-form");
const taskList=document.querySelector(".collection");
const clearBtn=document.querySelector(".clear-tasks");
const taskInput=document.querySelector("#task");
const filter=document.querySelector("#filter");

// Load all event listeners
loadEventListeners();


// Defining all evetn listeners
function loadEventListeners(){
    
    // Add task event
    form.addEventListener("submit",addTask);

    // Remove task event
    taskList.addEventListener("click",removeTask);

    // Clear task event
    clearBtn.addEventListener("click",clearTasks);

    // Filter tasks event
    filter.addEventListener("keyup",filterTasks);
}

function addTask(e){

    e.preventDefault();
    
    if(taskInput.value===""){
        console.log("You gotta be kidding me?!\nEnter a task.");
    }

    // Creating list items
    const li=document.createElement("li");

    // Add a class
    li.className="collection-item";

    // Create text node and append it to li
    li.appendChild(document.createTextNode(taskInput.value));

    // Create a new link element
    const link=document.createElement("a");

    // Add a class to it
    link.className="delete-item secondary-content";

    // Add icon html
    link.innerHTML='<i class="fa fa-remove"></i>';

    // Append the link to li and then to ul
    li.appendChild(link);
    taskList.appendChild(li);

    // Store task in LS
    storeTaskInLocalStorage(taskInput.value);


    // Clear input
    taskInput.value="";
}

// Store task

function storeTaskInLocalStorage(){
    let tasks;
    if(localStorage.getItem("tasks")===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem("tasks"));
    }
    
    tasks.push(task);

    localStorage.setItem("tasks",JSON.stringify(tasks));
}

// Remove task

function removeTask(e){

    if(e.target.parentElement.classList.contains("delete-item")){
        if(confirm("Are you sure about this?")){

            e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear tasks event
function clearTasks(){

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter tasks event
function filterTasks(e){

    const text=e.target.value.toLowerCase();
    
    document.querySelectorAll(".collection-item").forEach(
        function(task){
            const  item=task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text)!=-1){
                task.style.display="block";
            }else{
                task.style.display="none";
            }
        }
    )

}