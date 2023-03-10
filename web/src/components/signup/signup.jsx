import { useState, useContext } from "react";
import axios from 'axios';
import { GlobalContext } from '../../store/Context';
import './signup.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faUser, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Signup() {
    let { state, dispatch } = useContext(GlobalContext);
    const [result, setResult] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signupHandler = async (e) => {
        e.preventDefault();

        try {
            let response = await axios.post(`${state.baseUrl}/signup`, {
                firstName: name,
                lastName: name,
                email: email,
                password: password,
                role: 'customer'
            })

            console.log("signup successful");
            setResult("signup successful")

        } catch (e) {
            console.log("e: ", e);
        }
        // e.reset();
    }


    return (
        <>
            <div className='main'>
                <form onSubmit={signupHandler} className="form">
                    <div className='animate__animated animate__fadeIn right-s'>
                        <h1 className="signup-heading"> SignUp to continue </h1>
                        <input required className="input-s" type="text" name="name" placeholder="Enter your name" onChange={(e) => { setName(e.target.value) }} />
                        <br />
                        <input required className="input-s" type="email" name="username" autoComplete="username" placeholder="email" onChange={(e) => { setEmail(e.target.value) }} />
                        <br />
                        <input required className="input-s" type="password" name="new-password" autoComplete="new-password" placeholder="password" onChange={(e) => { setPassword(e.target.value) }} />
                        <br />
                        <input required className="input-s" type="password" name="new-password" autoComplete="new-password" placeholder="confirm password" />
                        <br />
                        {(state.isLogin === false) ?
                            <p className="text">already have an account? <Link className="a" to={`/login`}>Login</Link>
                            </p> : null}
                        <button className="button-s" type="submit">Signup</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Signup;