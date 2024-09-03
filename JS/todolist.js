class Todo{
    constructor(id,task,status)
    {
        this.id = id;
        this.task = task;
        this.status= status;
    }
}

class TodoList{
    constructor()
    {
        this.todos = [];
    }
    
    addTodo(data)
    {
        // const todo = new Todo(Date.now(),data,'pending');
        const num = Math.floor(Math.random()*100);
        const todo = new Todo(num,data,'pending');
        this.todos.push(todo);
    }

    removeTodo(id)
    {
        this.todos = this.todos.filter(item=>item.id!==id)
    }

    getAllTodos()
    {
        return this.todos;
    }

    updateStatus(name)
    {
        this.todos = this.todos.map(item => 
        {
            if(item.task === name)
            {
                item.status = 'completed';
            }
            return item;
        }
        )
    }
}

const list = new TodoList();
list.addTodo('CheckPapers');
list.addTodo('check Assignments');
console.log(list.getAllTodos());
list.updateStatus('CheckPapers');
console.log(list.getAllTodos());

