import { Button, Card,TextField, Typography } from '@mui/material'
import { useForm } from "react-hook-form";
import { Box } from '@mui/system'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';


function LoginForm(props) {
    const [showPassword, setShowPassword] = React.useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => props.onSubmit(data);


  return (
    <Box  
    sx={{
      borderRadius:5,
      boxShadow: "10px 10px 10px 10px grey",
      color:"white",
      margin: 10,
      padding: 10,
    }}  
      component='form' 
      onSubmit={handleSubmit(onSubmit)}>
        <Typography variant='h5'>Sign In to your Account</Typography>
        <br />
        <Typography color="red" variant='h7'>{props.err}</Typography>
        
        <br/> <br/>
        <OutlinedInput 
        sx={{
          color:"white",
            color:"white",
            border:"0.5px solid white"
        }}
          placeholder='Email'
          id="email" 
            {...register("email", {required: "Email can't be empty"})}
          
            startAdornment={
                <InputAdornment position="start">
                  <AccountCircle sx={{
          color:"white",
          
        }} />
                </InputAdornment>
              } 
        />
             <br />
             {errors.email && <Typography color="white" variant='h7'>{errors.email.message}</Typography>}
             <br />
        <OutlinedInput
        sx={{
          color:"white",
          border:"0.5px solid white"
        }}
            id="password"
            placeholder='Password'
            type={showPassword ? 'text' : 'password'}
            startAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword((show) => !show)}
                  edge="end"
                  sx={{
                    color:"white",
                    
                  }}
                >
                  {showPassword ?  <Visibility /> :  <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            {...register("password", {required: "Password can't be empty"})}
          />
             <br />
             {errors.password && <Typography color="White" variant='h7'>{errors.password.message}</Typography>}
             <br />
        <Button type='submit' variant='contained' disabled={props.disabled} >Sign In</Button>
        <Link to={'/signup'}>
          <Button type='submit' variant='outlined' sx={{color:"white", marginLeft:10}}  disabled={props.disabled} >Create Account</Button>
        </Link>
    </Box>
  )
}

export default LoginForm