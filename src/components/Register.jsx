import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from "./Firebase";
import { setDoc, doc } from "firebase/firestore";
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      console.log("User registered successfully");
      toast.success("User registration successful", {
        position: "top-center",
      });

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstname: fname,
          lastname: lname,
        });
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleRegister}>
        <div className="text">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" placeholder='Enter your first name' onChange={(e) => setFname(e.target.value)} required />
        </div>
        <div className="text">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" placeholder='Enter your last name' onChange={(e) => setLname(e.target.value)} required />
        </div>
        <div className="text">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="text">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="text">
          <button type="submit">Sign Up</button>
        </div>
        <p>
          Already registered? <a href='/login'>Login</a>
        </p>
      </form>
    </div>
  );
}

export default Register;
