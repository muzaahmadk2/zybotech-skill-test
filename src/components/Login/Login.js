import classes from "./Login.module.css";
import NavBar from "../navbar/navbar";
import { useRef ,useContext} from "react";
import AuthContext from "../Store/Auth-Context";
import { Form, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPass, setShowpass] = useState(false);
  const mobileRef = useRef("");
  const passwordRef = useRef("");
  const nameRef =useRef('');
  const authCtx = useContext(AuthContext);

  const toggleHandler = () => {
    setIsLogin(!isLogin);
  };
  const togglePassword = () => {
    setShowpass(!showPass);
  };
  const submithandler=(e)=>{
    e.preventDefault();
    let enteredMobile=mobileRef.current.value;
    const enteredPas=passwordRef.current.value;
    const eneteredName=nameRef.current.value;
    enteredMobile=enteredMobile+'@test.com';
    console.log(enteredMobile,enteredPas)
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDXvmvt0LRtPlU9qqECHZ6KGc-iLU_TdPU";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDXvmvt0LRtPlU9qqECHZ6KGc-iLU_TdPU";
    }
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredMobile,
          password: enteredPas,
          returnSecureToken: true,
        }),
        header: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = data.error.message;
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          authCtx.login(data.idToken,enteredMobile);
        // console.log(data.idToken)
          isLogin ? navigate('/') : navigate('/verify');
        })
        .catch((err) => {
          alert(err.message);
        });
  
    };

    
  

  return (
    <>
      <div className={classes.login}>
        <NavBar />
        <div className={classes.loginpage}>
          <p className={classes.title}>
            {!isLogin ? "Create Account" : "Login"}
          </p>
          <div className={classes.form}>
            <Form onSubmit={submithandler}>
              {isLogin ? "" : <Form.Control type="text" placeholder="Name" ref={nameRef}/>}
              <Form.Control type="text" placeholder="Phone Number" ref={mobileRef}/>
              <InputGroup>
                <Form.Control
                  ref={passwordRef}
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  style={{ borderRadius: "10px" }}
                  onClick={(e) => e.stopPropagation()} 
                />
                <span className={classes.eye} onClick={togglePassword}>
                  {!showPass ? (
                    <IoEyeOutline size={30} className={classes.eyeLogo}/>
                  ) : (
                    <FaRegEyeSlash size={30} className={classes.eyeLogo}/>
                  )}
                </span>
              </InputGroup>

              <Button variant="success" type="submit">
                {isLogin ? "Sign In" : "Sign Up"}
              </Button>
            </Form>
          </div>
          <p className={classes.switch} onClick={toggleHandler}>
            {isLogin ? (
              <span>
                Don't have an account?{" "}
                <span className={classes.red}>Create Account</span>
              </span>
            ) : (
              <span>
                Already have an account?{" "}
                <span className={classes.red}>Sign in</span>
              </span>
            )}
          </p>
        </div>
      </div>
      <div className={classes.gradient}></div>
    </>
  );
};
export default Login;
