import classes from "./Verification.module.css";
import NavBar from "../navbar/navbar";
import { Form, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Verification = () => {
  const navigate = useNavigate();
  const resendHandler = (e) => {
    e.preventDefault();
    alert("Verification Code has been Sent Successfully");
  };
  const submithandler = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className={classes.login}>
        <NavBar />
        <div className={classes.loginpage}>
          <p className={classes.title}>Verification</p>
          <p className={classes.text}>
            Enter the code we sent through your phone number
          </p>
          <div className={classes.form}>
            <Form >
              <Form.Control type="text" />
              <Form.Control type="text" />
              <Form.Control type="text" />
              <Form.Control type="text" />
            </Form>
          </div>
          <p className={classes.verify}>
            Didn’t Received the code{" "}
            <span onClick={resendHandler}> Resent</span>{" "}
          </p>
          <div className={classes.button}>
            <Button variant="success" onClick={submithandler}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.gradient}></div>
    </>
  );
};
export default Verification;
