import { Link } from "react-router-dom";

function Menu(){
    return(
        <nav>
            <div className="nav-wrapper">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
            <a href="#" className="brand-logo right">
                <i className="large material-icons">airport_shuttle</i>
            </a>
                 <li><Link to="/">Home</Link></li>   
                  <li><Link to="/page2">page 2</Link></li>  
                </ul>
            </div>
        </nav>
    )
}

export default Menu