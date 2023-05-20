import { Grid } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import LoginForm from "./LoginForm"
import background from "../../Assets/bg.jpg"


const BASE_URI = "https://contactmanager-7r4s.onrender.com/"
function Login() {
    const [userData,setUserData] = useState({})

    const handleUserData = (data) => {
        console.log(data)
        setUserData(data)
    }
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ 
      minHeight: '100vh', 
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    
  
  >
    <Grid item xs={3}>
     <LoginForm  onSubmit = {handleUserData} />
    </Grid>
  </Grid>
  )
}

export default Login