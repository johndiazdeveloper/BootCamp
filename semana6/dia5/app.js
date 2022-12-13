const formulario = document.getElementById('formulario');
const input = document.getElementById('input');
const tareaslist = document.getElementById('lista-tareas');
const template = document.getElementById('template').content;
const fragmento = document.createDocumentFragment();

let tareas = {};

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    setTarea();
});

const setTarea = () => {
    if(input.value.trim() === ''){
        return
    }
    const tarea = {
        id:Date.now(),
        texto:input.value, 
        estado: false
    };
    tareas[tarea.id]=tarea;

    formulario.reset();
    input.focus();
    pintarTareas();
};

const pintarTareas = () => {
    tareaslist.innerHTML = ''; 
    Object.values(tareas).forEach(tarea => {   
        const clone = template.cloneNode(true);
        clone.querySelector('p').textContent = tarea.texto;
        if(tarea.estado){
            clone.querySelector('.alert').classList.replace('alert-warning','alert-primary');
            clone.querySelectorAll('.fas')[0].classList.replace('fa-check-circle','fa-undo-alt');
            clone.querySelector('p').style.textDecoration = 'line-through'
        };
        clone.querySelectorAll('.fas')[0].dataset.id = tarea.id;
        clone.querySelectorAll('.fas')[1].dataset.id = tarea.id
        fragmento.appendChild(clone);
        tareaslist.appendChild(fragmento); 
    });
};

tareaslist.addEventListener('click', (e) => { 
    
    action(e);
});

const action = e => {
    if(e.target.classList.contains('fa-check-circle')){
        tareas[e.target.dataset.id].estado = true;
        pintarTareas();
    } else if(e.target.classList.contains('fa-minus-circle')){
        delete tareas[e.target.dataset.id];
        pintarTareas();
    };
    if(e.target.classList.contains('fa-undo-alt')){
        tareas[e.target.dataset.id].estado = false;
        pintarTareas();
    };
    e.stopPropagation;
};