import SignUpForm from "./SignUpForm"
import { Grid } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import background from "../../Assets/bg.jpg"


const BASE_URI = "https://contactmanager-7r4s.onrender.com/api/users/register"

function SignUp() {
    const [userData,setUserData] = useState({})
    const [err,setErr] = useState('')

    const handleUserData = async (data) => {
      try {
        setErr('')
        const response = await axios.post(BASE_URI,{...data})   
        console.log(response)
      } catch (error) {
        setErr(error.response.data.message)
      }
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
     <SignUpForm  onSubmit = {handleUserData} err={err}/>
    </Grid>
  </Grid>
  )
}

export default SignUp