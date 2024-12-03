import { useState } from "react";
import Todo from "../todo/ToDo";
import Count from "../count/Count";
import Menu from "../menu/Menu";


function PageExample(){
  const [tasks, setTasks] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleFormSubmit = (value) => {
    setTasks([ ...tasks, value])
  }

  const deleteTask = (indexOfButton) => {
    setTasks(tasks.filter((task, index) => index !== indexOfButton))
    console.log(tasks)
  }

  
  return(
    <>
    <Menu/>
    <h1>to do list</h1>
    <Todo
      onFormSubmit={handleFormSubmit}
    />
    <div>
      {
        tasks.map((task, index) => {
          return(
            <>
            <p key={index}>{task}</p>
            <button onClick={() => deleteTask(index)}>supprimer</button>
            </>
          )
        })
      }

    </div>
    <p>vous souhaitez voir le compteur ?
      <input type="checkbox" value={checked} 
        onChange={(e) => setChecked(e.target.checked)}
      /> </p>
      {
        checked ? 
        <Count/> :
        null
      }
   
  </>

  )

}

export default PageExample


