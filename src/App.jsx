import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Listoftodo from './component/listoftodo'

function App() {
  const [todo, setTodo] = useState([])

  const [inputTodo, setinputTodo] = useState ("")

    function change(event){
      setinputTodo(event)
    }

    function addTask(){
      setTodo([...todo, inputTodo])
      setinputTodo("")
    }

    function editTodo(index){
      let edit = prompt("edit todo");
      let listtodo = [...todo]
      listtodo.splice(index, 1, edit)
      setTodo([...listtodo])

    }

    function delTodo(index){
    
      let listtodo = [...todo]
      listtodo.splice(index, 1)
      setTodo([...listtodo])

    }

      
  return (
    <>

    
      <Listoftodo value={inputTodo} click={()=>addTask()} onChange={()=> change(event.target.value)} />

      {
        todo.map((task, index)=>{
          return (<p>{task} <button onClick={()=>editTodo(index)}>Edit</button> <button onClick={()=>delTodo(index)}>Del</button></p>)
        })
        
      }

      

      

        
    </>
  )
}

export default App
