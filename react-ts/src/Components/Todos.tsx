import React, { useContext } from 'react';

import TodosList from './TodosList';
import styles from './Todos.module.css';
import { TodosContext } from '../store/todo-context';


//            Generic < key : type of value >
const Todos : React.FC = () => {

    const todosCtx =  useContext(TodosContext);

    return (
        
        <ul className={styles.todos}>
            { todosCtx.items.map( (item) => (
                <TodosList 
                    key={item.id} 
                    text={item.text}
                    removeTodoList = {todosCtx.removeTodo.bind(null,item.id)}
                />
            ) ) }
        </ul>
    );

};


export default Todos;
