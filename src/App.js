import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';
import { useState } from 'react';





function App() {
  const onDelete =( todo)=>{
    console.log("I am on Delete" ,todo);
    // let index =todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo = (title, desc) =>{
    console.log("Adding title & desc", title,desc)
     let sno =todos[todos.length-1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market ",
      desc: "You have to go market at morning"
    },
    {
      sno: 2,
      title: "Go to the yoga ",
      desc: "You have to go yoga class at morning"
    },
    {
      sno: 3,
      title: "Go to the tution ",
      desc: "You have to go tution at afternoon"

    }

  ]);

  
  return (
    <>
       <Header/>  {/*             title="MY todos list" searchBar={false}  */}
       <AddTodo addTodo={addTodo}/>
     <Todos todos={todos} onDelete={onDelete}/>
    
     <Footer/>
    </>
  );
}

export default App;
