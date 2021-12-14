import { useRef, useState, useEffect } from "react";
import { signup, useAuth} from "./Firebase"

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

  return (
    <>
      <div>
      <form>
        <h1>Register</h1>

        <div>
          <input id="username" ref={emailRef} placeholder="Email" />
          <span><i></i></span>
        </div>
        <div>
        <input id="password" ref={passwordRef} type="password" placeholder="Password" />
        <span><i></i></span>
        </div>

        </form>

        <button onClick={handleSignup}>Sign Up</button>

      </div>
    </>
  );
}
