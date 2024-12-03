import { useState } from "react";

function Count(){
    const [counter, setCounter] = useState(0);

    const handleCount = () => {
        setCounter(counter + 1)
    }

    return(
        <div>
            <button onClick={handleCount}>click !</button>
            <p>{counter}</p>
        </div>
    )
}

export default Count