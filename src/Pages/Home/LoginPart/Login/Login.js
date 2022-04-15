import React from "react";
import { Button, Form } from "react-bootstrap";
import logo from "../../../../images/logo2.png";
import SocialLogin from "./SocialLogin/SocialLogin";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";


const Login = () => {

const emailRef=useRef('')
const passwordRef=useRef('')

const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


const navigate=useNavigate()


const  handleNavigate=()=>{
navigate('/signup')
}


if (loading) {
    return <h2>Loading.........</h2>
}


const hanleLogin=(event)=>{
event.preventDefault()
 const email=emailRef.current.value
 const password=passwordRef.current.value
 signInWithEmailAndPassword(email,password)
 navigate('/cart')
}





  return (
    <div className="w-50 mx-auto mt-4 shadow-lg border border-warning p-3 rounded-3">
      <Form onSubmit={hanleLogin}>
     <div className="w-25 my-3 mx-auto"><img className="py-4" style={{ width: "150px" }} src={logo} alt="" /></div>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
          ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button
          className="w-50 mx-auto d-block mb-3"
          variant="danger"
          type="submit"
        >
          Log In
        </Button>
        
        </Form>
        
        <p>
         Have your any account?
          <Link onClick={handleNavigate}
            to="/signup"
          
            className="text-primary btn btn-link text-decoration-none"
          >
            Please Regiester
          </Link>
        </p>

        <p>
          Forget Password?
          <button 
            
            className="text-primary btn btn-link text-decoration-none"
          >
            Reset Password
          </button>
        </p>
        <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
