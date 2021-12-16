import { useRef, useState, useEffect } from "react";
import { login, logout, useAuth} from "./Firebase.js"
import Grid from '@mui/material/Grid'
import Logout from '@mui/icons-material/Logout'

export default function Logoff({changeUser, logoutUser}) {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() =>
    changeUser(currentUser?.email), [currentUser]
  )

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
    <div>
    <Grid container>
    <Grid item>
    <div class='logout'>Hello, { currentUser?.email } </div>
    </Grid>
    <Grid item>
    <Logout  onClick={handleLogout}/>
    </Grid>
    </Grid>
    </div>
  )}else {
    return(null)
  }
}
