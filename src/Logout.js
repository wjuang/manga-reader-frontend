import { useRef, useState, useEffect } from "react";
import { login, logout, useAuth} from "./Firebase.js"
import Grid from '@mui/material/Grid'

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
  if (currentUser?.email){
  return(
    <div class='logforms'>
    <Grid container>
    <Grid item>
    <div>Currently logged in as: { currentUser?.email } </div>
    </Grid>
    <Grid item>
    <button onClick={handleLogout}>Log Out</button>
    </Grid>
    </Grid>
    </div>
  )}else {
    return(null)
  }
}
