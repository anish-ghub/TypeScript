import React, { useState } from "react";
import Todo_Modal from "../modals/Todo_Modal";


type TodosContextObject = {
    items: Todo_Modal[];
    addTodo : (text: string) => void;
    removeTodo : (id:string) => void
};

export const TodosContext = React.createContext<TodosContextObject> ( {
    items: [],
    addTodo : () => {},
    removeTodo : (id:string) =>{}
} );



const TodosContextProvider: React.FC = (props) => {

    // From App.tsx
    const [todoArray, setTodoArray] = useState<Todo_Modal[]>([]);

    const addTodoHandler = (text:string) =>{
        const newTodo = new Todo_Modal(text);

        setTodoArray( (prevState) => {
        return prevState.concat(newTodo);
        } );
    };

    const removeTodoHandler =(todoId: string) =>{
        setTodoArray( (prevState) => {
        return prevState.filter( (remv) => remv.id !== todoId  );
        } );
    };


    const contextValue:TodosContextObject = {
        items : todoArray,
        addTodo : addTodoHandler,
        removeTodo : removeTodoHandler
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    );


};

export default TodosContextProvider;