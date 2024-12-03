import { useState } from "react"

const Todo = ({onFormSubmit}) => {

  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(value);
    setValue('');
  }

    return(
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="text">tâche:</label>
          <input 
            type="text" 
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Envoyer</button>

        </form>
      </div>
    )
  }

  export default Todo