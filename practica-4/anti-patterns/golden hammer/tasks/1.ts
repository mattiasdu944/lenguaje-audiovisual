class TodoManager {
    private todos: string[] = [];

    addTask(todo: string) {
        if (this.validateInput(todo)) {
            this.todos.push(todo);
            this.saveToLocalStorage();
            this.renderUI();
        } else {
            console.error("Entrada no válida: Debe proporcionar una tarea no vacía.");
        }
    }

    removeTask(index: number) {
        if (index >= 0 && index < this.todos.length) {
            this.todos.splice(index, 1);
            this.saveToLocalStorage();
            this.renderUI();
        } else {
            console.error("Índice de tarea no válido.");
        }
    }

    private saveToLocalStorage() {
        try {
            localStorage.setItem("todos", JSON.stringify(this.todos));
            console.log("Tareas guardadas en el almacenamiento local.");
        } catch (error) {
            console.error("Error al guardar tareas:", error);
        }
    }

    private renderUI() {
        console.log("Mostrar UI...");
    }

    private validateInput(todo: string): boolean {
        return todo.trim() !== "";
    }
}
