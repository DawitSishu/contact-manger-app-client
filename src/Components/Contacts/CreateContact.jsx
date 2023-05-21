import { Button, Grid, Typography,OutlinedInput,Box } from "@mui/material"
import { useForm } from "react-hook-form";
import InputAdornment from '@mui/material/InputAdornment';
import { AccountCircle } from '@mui/icons-material';

export default function CreateContact(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) =>{
      const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
      if(validEmail){
        if(data.phone.length != 9){
            alert('Phone number must be 9 digits')
        }else{
            const finalData = {
                ...data,
                phone : `+251-${data.phone}`
            }
            props.onSubmit(finalData)
        }
      }else{
        alert(`${data.email} is not a valid email`)
      }
    }

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
    <Typography variant='h5'>Contact Form</Typography>
    <br />
    <Typography color="red" variant='h7'>{props.err}</Typography>
    
    <br/> <br/>
    <OutlinedInput 
    sx={{
      color:"white",
        color:"white",
        border:"0.5px solid white"
    }}
      placeholder='name'
      id="name" 
        {...register("name", {required: "Name can't be empty"})}
      
        startAdornment={
            <InputAdornment position="start">
              <AccountCircle sx={{
      color:"white",
      
    }} />
            </InputAdornment>
          } 
    />
         <br />
         {errors.name && <Typography color="white" variant='h7'>{errors.name.message}</Typography>}
    <br /> 
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
        color:"white",
        border:"0.5px solid white"
    }}
      placeholder='phone'
      id="phone" 
      type="number"
        {...register("phone", {required: "phone can't be empty"})}
      
        startAdornment={
            <InputAdornment position="start">
              <Typography color="white" variant="h9">+251</Typography>
            </InputAdornment>
          } 
    />
         <br />
         {errors.phone && <Typography color="White" variant='h7'>{errors.phone.message}</Typography>}
         <br />
              <Button variant="contained" type="submit">Submit</Button>

     <Button onClick={()=>props.cancel()} variant="contained" color="error" sx={{ marginLeft:10}}>cancel</Button>
</Box>
  )
}
