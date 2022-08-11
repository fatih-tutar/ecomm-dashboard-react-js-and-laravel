import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
function Register()
{
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const history = useHistory

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
        history.push("/add")
    }
    
    return(
        <div className='col-sm-6 offset-sm-3'>
            <h1>Register Page</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control mb-2" placeholder='Name' />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control mb-2" placeholder='Password' />
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control mb-2" placeholder='Email' />
            <button onClick={signUp} className="btn btn-primary">Sign Up</button>
        </div>
    )
}

export default Register