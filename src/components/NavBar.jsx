import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar(props) {
    console.log(props);
    return (
        <div className="container-fluid">
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Link to="/">Home</Link>
                    {/* TODO: pass setToken to login as props */}
                    {/* This does not work for some reason, setToken is not being passed */}
                    {!props.token && <Link 
                    to={{
                        pathname:"/login",
                        state: {
                            setToken: props.setToken,
                        }
                    }}
                    >Log In</Link>}
                </Nav>
            </Navbar>
        </div>
    )
}