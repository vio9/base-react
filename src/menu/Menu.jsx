import { Link } from "react-router-dom";

function Menu(){
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/page2">page 2</Link>
        </div>
    )
}

export default Menu