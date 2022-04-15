import React from "react";
import logo from "../../../../images/logo2.png";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin/SocialLogin";
import auth from "../../../../firebase.init";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";



const SignUp = () => {
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });




  const handleSignup = async(event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    navigate("/cart");
  };





  return (
    <div className="w-50 mx-auto mt-4 shadow-lg border border-warning p-3 rounded-3">
      <Form onSubmit={handleSignup}>
        <div className="w-25 my-3 mx-auto">
          <img
            className="py-4"
            style={{ width: "150px" }}
            src={logo}
            alt=""
          />
        </div>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className="my-3"
            type="name"
            name="name"
            placeholder="your name"
            required
          />
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
             name='password'
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button
          className="w-50 mx-auto d-block mb-3"
          variant="warning"
          type="submit"
        >
          SignUp
        </Button>
      </Form>

      <p>
        Already have account?
        <Link
          to="/login"
          className="text-primary btn btn-link text-decoration-none"
        >
          Please login
        </Link>
      </p>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;
