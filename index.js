const agregar = document.getElementById("agregar");
const eliminarTodo = document.getElementById("eliminar");
const lista = document.getElementById("lista");
const input = document.getElementById("input");


//creando Boton
function crearBoton(){
    const boton = document.createElement("button");
    boton.textContent = " Eliminar Tarea";
    boton.classList.add("EliminarTarea");
    
    //agregando evento de eliminar
    boton.addEventListener("click",()=>{
        const elementoALimpiar = boton.parentNode;
        eliminarElemento(elementoALimpiar);
    })

    return boton;
}

//funcion para eliminar elemento
function eliminarElemento(elemento) {

    const primeraPalabra = elemento.textContent.split(" ")[0]
    const tareas = JSON.parse(localStorage.getItem('tareas'));
    const indice = tareas.indexOf(primeraPalabra);

    if (indice !== -1) {
        tareas.splice(indice, 1);
    }

    elemento.parentNode.removeChild(elemento);
    
    // Guardar las tareas actualizadas
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

//agregando elemento a la lista
agregar.addEventListener("click",()=>{

    const inputValor = input.value;
    
    if(inputValor !== ""){
        const li = document.createElement("li");
        li.textContent=inputValor ;
        li.appendChild(crearBoton());
        lista.appendChild(li);

        let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
        tareas.push(inputValor);
        localStorage.setItem('tareas', JSON.stringify(tareas)); 
        
        input.value = '';

    }else{
        alert("No se pueden colocar tareas vacias");
    }

})

//Elimnar todos los elementos
eliminarTodo.addEventListener("click", ()=>{
    if(confirm("¿Estás seguro de que deseas eliminar todas las tareas?")){
        localStorage.clear();
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
    }
})



//Función para cargar las tareas desde localStorage
function cargarTareas(){
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    tareasGuardadas.forEach(tarea => {
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = tarea;
        nuevoItem.appendChild(crearBoton());
        lista.appendChild(nuevoItem);
    });
}

// Cargar las tareas al iniciar la página
cargarTareas()