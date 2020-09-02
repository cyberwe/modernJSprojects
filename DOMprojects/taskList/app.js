

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
}

function addTask(e){

    e.preventDefault();
    console.log("YOu got it");
}