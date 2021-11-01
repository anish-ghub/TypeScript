import React,{ useRef,useContext } from 'react';
import styles from './TodosForm.module.css';
import { TodosContext } from '../store/todo-context';



const TodosForm :  React.FC = () => {

    const todosContext = useContext(TodosContext);

    const inputRef = useRef<HTMLInputElement>(null);


    const submitHandler = (event: React.FormEvent) =>{

        event.preventDefault();

        // ? if nothing - null / ! won't get null
        const enteredInput = inputRef.current!.value;

        if(enteredInput.trim().length === 0){
            return;
        }
        // Now Valid

        todosContext.addTodo(enteredInput);
    };



    return (

        <form onSubmit={submitHandler} className={styles.form}>
            <label htmlFor="text">Todo Item</label>
            <input 
                type="text" 
                id="text" 
                ref={inputRef} 
            />

            <button>Add Todo Item</button>
        </form>

    );

};

export default TodosForm;
