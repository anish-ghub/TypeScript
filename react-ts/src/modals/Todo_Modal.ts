class Todo_Modal {

    id:string;
    text:string;

    constructor(todoText: string) {

        this.id = new Date().toISOString();
        this.text = todoText;
        
    }
    
}

export default Todo_Modal;