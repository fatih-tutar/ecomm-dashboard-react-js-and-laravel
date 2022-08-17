import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from "./Header"
function Login()
{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate("/add")
        }
    },[])
    async function login(){
        console.warn(email,password)
        let item = {email,password};
        let result = await fetch("http://localhost:8000/api/login",{
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate("/add")
    }
    return(
        <div>
            <Header/>
            <h1>Login Page</h1>
            <div className="col-sm-4 offset-sm-4">
                <input type="text" placeholder='Email' className="form-control mb-3" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' className="form-control mb-3" onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={login} className="btn btn-primary">Login</button>
            </div>
        </div>
    )
}

export default Login