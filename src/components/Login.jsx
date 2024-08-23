import { signInWithEmailAndPassword } from 'firebase/auth';
import  { useState } from 'react'
import { auth } from './Firebase';
import "./Login.css"
const Login = () => {
    const[email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
    const handleSubmit = async(e)=>{
      e.preventDefault();
      try{
        await signInWithEmailAndPassword(auth,email,Password);
        console.log("User Logged in successfully");
        alert("user logged in successfully")
        window.location.href="/profile"
      }catch{
        alert("user logged in successfully")
      }
    }
  return (
    <div className='container'>
        <form action="" onSubmit={handleSubmit}>
           <div className="text">
           <label>
                Email address
            </label>
            <input type="email" className='' placeholder='enter email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
           </div>

          <div className="text">
          <label>Password</label>
            <input type='password' className='' placeholder='enter password' value={Password} onChange={(e)=>{setPassword(e.target.value)}} required/>
          </div>
          <div className="text">
            <button type="submit" className=''>Submit</button>
          </div>
          <p className=''>
            New user <a href='/register'>Register here</a>
          </p>
        </form>
    </div>
  )
}

export default Login