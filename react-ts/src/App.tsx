import Todos from './Components/Todos';
import TodosForm from './Components/TodosForm';
import TodosContextProvider from './store/todo-context';



const App = () =>{
  
  return (
    <TodosContextProvider>
      <TodosForm/>
      <Todos/>
    </TodosContextProvider>
  );

}

export default App;
