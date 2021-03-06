import { useRef, useState, useEffect } from "react";
import { signup, useAuth} from "./Firebase"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function SignupPage({changeUser}) {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() =>
    changeUser(currentUser?.email), [currentUser]
  )

  async function handleSignup() {
    setLoading(true);
    // try {
      await signup(emailRef.current.value, passwordRef.current.value);
    // } catch {
      // alert("Error!");
    // }
    setLoading(false);
  }
  if (currentUser?.email){
    return(
      <h1 class='title'>You are signed in!</h1>
    )
  } else {
  return (
    <>
      <div class='logforms'>
      <form>
        <h1 class='title'>Register</h1>

        <div>
          <input label="Email" id="username" ref={emailRef} placeholder="Email" />
          <span><i></i></span>
        </div>
        <div>
        <input label='Password' id="password" ref={passwordRef} type="password" placeholder="Password" />
        <span><i></i></span>
        </div>

        </form>

        <button onClick={handleSignup}>Sign Up</button>

      </div>
    </>
  )
}
}
