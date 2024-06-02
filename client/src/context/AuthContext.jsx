//used to access share data globallly i.e. user 
//make code more clean 
import { createContext, useCallback, useEffect, useState } from "react";
import { baseUrl,postRequest } from "../utils/services";
import { json } from "react-router-dom";

export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [registerError, setRegisterError] = useState(null);
    const [isRegisterLoading, setIsRegisterLoading] = useState(false);
    const [registerInfo,setRegisterInfo] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [loginError, setLoginError] = useState(null);
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const [loginInfo,setLoginInfo] = useState({
        email: "",
        password: "",
    });
    console.log(user);

    //when refresh get user sroed in local  storage 
    useEffect(() => {
        const user = localStorage.getItem("User");
        setUser(JSON.parse(user));
    },[]);

    const upadateRegisterInfo = useCallback((info) =>{
        setRegisterInfo(info);
    },[]); //[] for dependecy list use late r

    const upadateLoginInfo = useCallback((info) =>{
        setLoginInfo(info);
    },[]); 
    
    const registerUser = useCallback(async (event) =>{
        event.preventDefault();
        setIsRegisterLoading(true);
        setRegisterError(null);

        const response = await postRequest(`${baseUrl}/users/register`,JSON.stringify(registerInfo));
        
        setIsRegisterLoading(false);
        
        if(response.error){
            return setRegisterError(response);
        }

        localStorage.setItem("User",JSON.stringify(response));
        setUser(response);

    }, [registerInfo] );  //[re.] get updated data 


    const loginUser = useCallback(async (event) => {
        event.preventDefault();
        setIsLoginLoading(true);
        setLoginError(null);

        // console.log(loginInfo);
        const response = await postRequest(`${baseUrl}/users/login`,JSON.stringify(loginInfo));
        
        setIsLoginLoading(false);
        
        if(response.error){
            return setLoginError(response);
        }

        localStorage.setItem("User",JSON.stringify(response));
        setUser(response);
    },[loginInfo]);

    //logout thai is remove form lcs
    const logoutUser = useCallback(() =>{
        localStorage.removeItem("User");
        setUser(null);
    },[]);
    return <AuthContext.Provider 
                value={
                        { user,registerInfo ,upadateRegisterInfo, 
                          registerUser, registerError,
                          isRegisterLoading,logoutUser,loginInfo ,upadateLoginInfo, 
                          loginUser, loginError,
                          isLoginLoading,}}>{children}</AuthContext.Provider>
}