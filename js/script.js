 // Aquí tu código
const lista = document.getElementById("lista")
const button = document.getElementById("agregar")

button.addEventListener("click",  function addSomething() {
    const something = prompt("Añade algo a la lista")
    if (something){
        const create = document.createElement("li")
        create.textContent = something
        lista.appendChild(create)
    }
})