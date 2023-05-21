import axios from "axios"
import { useEffect, useState } from "react"
import { Grid, Typography,Button,List,ListItemAvatar,ListItemText,Avatar,ListItem} from "@mui/material"
import background from "../../Assets/bg.jpg"
import Spinner from "../Spinner/Spinner"
import { Container } from "@mui/system"
import { AccountCircle, ContactEmergency } from "@mui/icons-material"
import CreateContact from "../Contacts/CreateContact"


const BASE_URI = "https://contactmanager-7r4s.onrender.com/api/contacts"
function Home (props) {
    const [userName,setUserName] = useState('')
    const [contacts,setContacts] = useState([])
    const [err,setErr] = useState('')
    const [isDisabled,setIsDisabled] = useState(false) //
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
            setErr('')
            const respose =  await axios.get(
                BASE_URI,
                config
            )
            if(respose){
                
                setIsDisabled(false)
                setContacts([...respose.data])   
            }
        } catch (error) {
            setErr(error.respose.message)
        }
      }
      useEffect( ()=>{
        const user = async()=>{
            const res = await axios.get("https://contactmanager-7r4s.onrender.com/api/users/current",config)
            setUserName(res.data.username)
        }
        user()
        getUserContacts()
      },[])

    const handleContactForm = () =>{
        setCreateContactForm(!createcontactForm)
    }

    const handleCreateContact = async (data) =>{
        setCreateContactForm(false)
        setIsDisabled(true)
        try {
            setErr('')
            const respose =  await axios.post(
                BASE_URI,
                {...data},
                config
            )
            if(respose){
                setIsDisabled(false)
                setContacts([...contacts,data]) 
            }
        } catch (error) {
            setErr(error.respose.message)
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
    <Typography  variant="h2" color="white">Welcome : {userName}</Typography>
    {createcontactForm ? <CreateContact cancel={handleContactForm}  err={err} onSubmit = {handleCreateContact}/> 
                        : isDisabled ? <Spinner /> 
                        :<Grid> 
        <Button onClick={handleSignout} variant="contained">sign out</Button> <br /><br />
        <Button 
            onClick={handleContactForm} 
            variant="contained" 
         >
                <AccountCircle />
                Add Contact
                </Button>
      </Grid>    
}   
{!isDisabled && contacts.length > 0 ? <List sx={{color:"white"}}>
      {contacts.map((contact,index) => {
        return(
        <ListItem key={index}>
        <ListItemAvatar>
          <Avatar style={{backgroundColor:"black"}}>
             <AccountCircle /> 
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary ={contact.name} style={{marginRight:10}}/>
        <ListItemText 
        secondaryTypographyProps={{color:"white",variant:"body1"}}
         primary={contact.phone}  
         secondary={contact.email}
         title={contact.name}/>
      </ListItem>
        )
    })}
    </List> : null}
    </Grid>
   

  )
}

export default Home