import SignUpForm from "./SignUpForm"
import { Grid } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import background from "../../Assets/bg.jpg"

function SignUp() {
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
     <SignUpForm  onSubmit = {handleUserData}/>
    </Grid>
  </Grid>
  )
}

export default SignUp