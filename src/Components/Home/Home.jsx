import axios from "axios"
import { useEffect, useState } from "react"
import { Grid, Typography,Button } from "@mui/material"
import background from "../../Assets/bg.jpg"
import Spinner from "../Spinner/Spinner"
import { Container } from "@mui/system"
import { AccountCircle } from "@mui/icons-material"
import CreateContact from "../Contacts/CreateContact"


const BASE_URI = "https://contactmanager-7r4s.onrender.com/api/contacts"
function Home(props) {
    const [contacts,setContacts] = useState([])
    const [isDisabled,setIsDisabled] = useState(true)
    const [createcontactForm,setCreateContactForm] = useState(false)
    const handleSignout =()=>{
        localStorage.clear()
        props.onLogOut()
    }
    let config = {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }
      const getUserContacts = async () =>{
        try {
            const respose =  await axios.get(
                BASE_URI,
                config
            )
            if(respose){
                setIsDisabled(false)
                setContacts([...respose.data])   
            }
        } catch (error) {
            alert(error.respose.message)
        }
      }
      useEffect(()=>{
            getUserContacts()
      },[])

    const handleCreateContact = () =>{
        setCreateContactForm(!createcontactForm)
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
    {/* don't forget this */}
    {/* <Typography>Welcome : {username}</Typography> */}
    <Typography variant="h2" color="white">Home</Typography>
    {createcontactForm ? <CreateContact /> : null }
    <Grid item xs={3}>
     {isDisabled ? <Spinner /> : 
     <Container> 
        <Button onClick={handleSignout} variant="contained">sign out</Button> <br /><br />
        <Button 
            onClick={handleCreateContact} 
            variant="contained" 
         >
                <AccountCircle />
                {createcontactForm ? "cancel"  :"Add Contact"}
                </Button>
       
      </Container>
    }
    </Grid>
  </Grid>
   

  )
}

export default Home