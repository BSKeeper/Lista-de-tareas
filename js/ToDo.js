//Declaraciones
let IdCounter=0;
const input=document.querySelector('input[type="text"]');




//Evento submit

userInput.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log("submit");
    addTask();

});


//Agregar tareas

let addTask= ()=>{
    IdCounter++;

    let newValue=input.value;

    if (newValue!=""){

    list.innerHTML +=`
    <div class="TaskContainer" id="${IdCounter}">       
        <label>
            <input type="checkbox">
            ${newValue}
        </label>
        <img src="img/delete-cross.png" class="CloseBtn">
    </div>`;
    input.value="";
    updateStats();

    }
};


// evento de tareas

list.addEventListener('click',(event)=>{
    if(event.srcElement.nodeName=='INPUT'){
        updateStats();
    }else if(event.srcElement.nodeName=='IMG'){
        deleteTask(event.srcElement.parentNode.id);
        
    }

});



//actializar estadísticas
let updateStats = ()=>{
    let element=list.querySelectorAll('div');
    let checkbox=list.querySelectorAll('input[type="checkbox"]:checked');
    stats.innerHTML=`<p>Tareas pendientes: ${element.length}    Completadas:${checkbox.length}</p>`;
};


//borrar tareas
let deleteTask= (id)=>{
    let TaskToDelete=document.getElementById(id);
    list.removeChild(TaskToDelete);
    updateStats();
};