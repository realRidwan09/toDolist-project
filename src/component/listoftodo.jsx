import "./listoftodo.css"
const Listoftodo = (props)=>{
    return(
        <>
        <h1>To-do List</h1>
        <div id="form">
             <input type="text" value={props.value} onChange={props.onChange}  />
             <button onClick={props.click}>Add Task</button>

        </div>
        </>
    )
}



export default Listoftodo