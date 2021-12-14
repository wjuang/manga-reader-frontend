import { useRef, useState, useEffect } from "react";
import { login, logout, useAuth} from "./Firebase.js"

export default function Logout({logoutUser}) {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleLogout() {
    logoutUser()
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }
  return(
    <>
    <div>Currently logged in as: { currentUser?.email } </div>
    <button onClick={handleLogout}>Log Out</button>
    </>
  )
}
