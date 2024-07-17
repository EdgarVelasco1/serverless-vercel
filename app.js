// console.log('estoy aqui escuchando')
const todos = []

window.onload = () => {
    const form = document.getElementById('todo-form')

    form.onsubmit = (e) => {
        e.preventDefault()
        const todo = document.getElementById('todo')
        const todoText = todo.value 
        todo.value = ''

        todos.push(todoText)

        const todoList = document.getElementById('todo-list')
        const todosPlantilla = todos.map(t => '<li>'+t+'</li>')
        todoList.innerHTML = todosPlantilla.join('')

    }
}