import React, {useState,useEffect, useCallback, useContext} from 'react';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token,email) => {},
    logout: () => {},
    
});

export const AuthProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const userIsLoggedIn = !!token;

    const loginHandler = (token,email) => {
        setToken(token);
        localStorage.setItem('token',token);
        localStorage.setItem('email',email.replace(/[@.]/g, ""));
    }
    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        
    },[])

    useEffect(()=>{
        // localStorage.setItem('token',token);
        if(userIsLoggedIn){
            
            const timeoutId = setTimeout(()=>{
                logoutHandler()
            },3600000);
            return ()=> clearTimeout(timeoutId);
        }
    },[token,logoutHandler,userIsLoggedIn]);


    const authContext = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        
    }
    return (
        <AuthContext.Provider value={authContext}>{props.children}</AuthContext.Provider>
    );
}

export default AuthContext;