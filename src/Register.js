import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from "./Header"
function Register()
{
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate("/add")
        }
    },[])
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const navigate = useNavigate();

    async function signUp(){
        let item = {name,password,email}
        console.warn(item)

        let result = await fetch("http://localhost:8000/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate("/add")
    }
    
    return(
        <>
            <Header/>
            <div className='col-sm-4 offset-sm-4'>
                <h1>Register Page</h1>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control mb-2" placeholder='Name' />
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control mb-2" placeholder='Password' />
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control mb-2" placeholder='Email' />
                <button onClick={signUp} className="btn btn-primary">Sign Up</button>
            </div>
        </>
    )
}

export default Register