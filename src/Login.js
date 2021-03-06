import { useRef, useState, useEffect } from "react";
import { login, logout, useAuth} from "./Firebase.js"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function LoginPage({changeUser, loginToggle}) {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() =>
    changeUser(currentUser?.email), [currentUser]
  )


  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("incorrect password or username");
    }
    setLoading(false)
    loginToggle()
    }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

if (currentUser?.email){
  return (
    <>
    </>
  )
}else{
  return(
    <>
    <div class='logforms'>
      <form>
        <h1 class='title'>Login</h1>

        <div>
          <input label="Email" id="username" type="username" ref={emailRef} placeholder="Email" />
          <span><i></i></span>
        </div>
        <div>
          <input label="Password" id="password" ref={passwordRef} type="password" placeholder="Password" />
          <span><i></i></span>
        </div>
      </form>

      <button onClick={handleLogin}>Log In</button>
    </div>
    </>
  )
}
}
