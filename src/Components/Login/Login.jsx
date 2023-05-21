import { Grid } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import LoginForm from "./LoginForm"
import background from "../../Assets/bg.jpg"


const BASE_URI = "https://contactmanager-7r4s.onrender.com/api/users/login"
function Login(props) {
    const [userData,setUserData] = useState({})
    const [isDisabled,setIsDisabled] = useState(false)
    const [err,setErr] = useState('')
    const handleUserData =  async (data) => {
        // console.log(data)
        setIsDisabled(true)
       try {
        setErr('')
        const response = await axios.post(BASE_URI,{...data}) 
        console.log(response)
        if(response){

          localStorage.setItem('token', response.data.token);
          props.onLogIn()
        }  
       } catch (error) {
        setIsDisabled(false)
        setErr(error.response.data.message)
        // alert(error.response.data.message)
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
     <LoginForm  onSubmit = {handleUserData}  err={err}  disabled={isDisabled}/>
    </Grid>
  </Grid>
  )
}

export default Login