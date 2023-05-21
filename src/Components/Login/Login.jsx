import { Grid } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import LoginForm from "./LoginForm"
import background from "../../Assets/bg.jpg"
import Spinner from "../Spinner/Spinner"


const BASE_URI = "https://contactmanager-7r4s.onrender.com/api/users/login"
function Login(props) {
    const [isDisabled,setIsDisabled] = useState(false)
    const [err,setErr] = useState('')
    const handleUserData =  async (data) => {
        setIsDisabled(true)
       try {
        setErr('')
        const response = await axios.post(BASE_URI,{...data}) 
        if(response){
          localStorage.clear();
          localStorage.setItem('token', response.data.token);
          props.onLogIn()
        }  
       } catch (error) {
        setIsDisabled(false)
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
     {isDisabled ? <Spinner /> : <LoginForm  onSubmit = {handleUserData}  err={err} />}
    </Grid>
  </Grid>
  )
}

export default Login