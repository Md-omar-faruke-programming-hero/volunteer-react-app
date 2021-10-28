
import "./Header.css"
import { Link ,useHistory} from 'react-router-dom';
import logo from "../../image/logos/Group 1329.png"
import useAuth from "../../Hook/useAuth";

const Header = () => {
    const{user,signout}=useAuth()
   const history= useHistory()
   const login=()=>{
       history.push("/login")
   }
   const volunteerList=()=>{
    history.push("/volunteerList")

   }

   const mail= "farukeomar@gmail.com"
    return (
        <div>
            <nav className="container mt-5">
                <div className="d-flex  align-items-center justify-content-between">
                    <div className="w-25" >
                        <img className="w-75" src={logo} alt="" />
                    </div>
                    <div className=" d-flex align-items-center ">
                      <div className="nav">
                        <Link to="/home">Home</Link>
                        <Link to="/donation">Donation</Link>
                        <Link to="/event">Events</Link>
                        <Link to="/omar">My Event</Link>
                      </div>
                      <div>
                      {
                          user.email ? <button onClick={signout} className="btn btn-danger me-3">Log out</button>:  <button onClick={login} className="btn btn-primary me-3">Register</button>
                      }
                     {
                         mail=== user.email?   <button onClick={volunteerList} className="btn btn-secondary">Admin</button>:   <button  className="btn btn-secondary">{user.displayName || "user"}</button>
                     }
                      </div>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;