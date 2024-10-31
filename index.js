const agregar = document.getElementById("agregar");
const eliminarTodo = document.getElementById("eliminar");
const lista = document.getElementById("lista");
const input = document.getElementById("input");


//creando Boton
function crearBoton(){
    const boton = document.createElement("button");
    boton.textContent = "Eliminar Tarea";
    boton.classList.add("EliminarTarea")
    
    //agregando evento de eliminar
    boton.addEventListener("click",()=>{
        const elementoALimpiar = boton.parentNode;
        eliminarElemento(elementoALimpiar);
    })

    return boton
}

//funcion para eliminar elemento
function eliminarElemento(elemento) {
    elemento.parentNode.removeChild(elemento);
}

//agregando elemento a la lista
agregar.addEventListener("click",()=>{

    const inputValor = input.value;

    const li = document.createElement("li");
    li.textContent=inputValor ;
    li.appendChild(crearBoton())
    lista.appendChild(li);

})

//Elimnar todos los elementos
eliminarTodo.addEventListener("click", ()=>{
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
})