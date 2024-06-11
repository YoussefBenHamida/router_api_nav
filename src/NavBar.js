
import {Link} from "react-router-dom"

const NavBar =()=>{
    return (
        <>
        <div className="nav-bar">
            <h3><Link to="/home">Home</Link></h3>
            <h3><Link to="/user">User</Link></h3>
        </div>
        </>
    )
}

export default NavBar