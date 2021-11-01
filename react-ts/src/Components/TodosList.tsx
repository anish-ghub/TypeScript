
import React from 'react';
import styles from './TodosList.module.css';

const TodosList : React.FC< { text:string; removeTodoList : () => void } > = (props) => {

    return (
        <li className={styles.item} onClick={props.removeTodoList}>
           {props.text}
        </li>
    );

};

export default TodosList;
