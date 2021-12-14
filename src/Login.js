import { useRef, useState } from "react";
import { login, logout, useAuth} from "./Firebase.js"

export default function LoginPage() {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();


  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("incorrect password or username");
    }
    setLoading(false);
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

  return (

    <>
    <div>
      <form>
        <h1>Login</h1>

        <div>Currently logged in as: { currentUser?.email } </div>

        <div>
          <input id="username" ref={emailRef} placeholder="Email" />
          <span><i class="fa fa-envelope"></i></span>
        </div>
        <div>
          <input id="password" ref={passwordRef} type="password" placeholder="Password" />
          <span><i></i></span>
        </div>
      </form>

      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>

    </div>
    </>
  )
}
