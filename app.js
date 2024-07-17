// console.log('estoy aqui escuchando')
const todos = []

const render = () => {
    const todoList = document.getElementById('todo-list')
    const todosPlantilla = todos.map(t => '<li>'+t+'</li>')
    todoList.innerHTML = todosPlantilla.join('')

    /*
    ahora vamos a almacenar la lista, para ello leemos desde el html
    */

    const elementosParaGuardar = document.querySelectorAll('#todo-list li')
    elementosParaGuardar.forEach((elemento,i) => {
        elemento.addEventListener('click', () => {
            // console.log(elemento)
            elemento.parentNode.removeChild(elemento) // pero tambien necesitamos sacar el index del arreglo
            todos.splice(i,1)//para solucionar que los indices no se actualizan, hay que llamar nuevamente a render
            render()
        })
    })
    const totalTodos = document.getElementById('total-todos')
    const totalTodosPlantilla = '<label>'+ 'N° Elementos:' + todos.length +'</label>'
    totalTodos.innerHTML = totalTodosPlantilla

}

window.onload = () => {
    render()
    const form = document.getElementById('todo-form')

    form.onsubmit = (e) => {
        e.preventDefault()
        const todo = document.getElementById('todo')
        const todoText = todo.value 
        todo.value = ''

        todos.push(todoText)
        render()
    }
}