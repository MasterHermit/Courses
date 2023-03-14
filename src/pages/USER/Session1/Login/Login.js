import React,{ useState } from 'react'

export default function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const []

    const login = async () => {

        let item = (email,password);
        let result = await fetch("http://localhost:8000/api/login",{
            method:'POST',
            headers:{
                "Content-Type":"appplication/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item),
        });
        result =await result.json();
        localStorage.setItem(JSON.stringify(result));
    }

  return (
    <div>
      
      <h1>User Login</h1>


      <div className=''> 
        
        <input className="email" 
        type="text" 
        placeholder="abc@gmail.com" 
        onChange={(e)=>setEmail(e.target.value)}
        />
        
        <input className="password"
        type="text" 
        placeholder="password"
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="login-buttom" onClick={login}>Login</button>
      </div>

    </div>
  )
}
