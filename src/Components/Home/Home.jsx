import React from 'react'

function Home(props) {
    const handleSignout =()=>{
        localStorage.clear()
        props.onLogOut()
    }
    let config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }
  return (
    <div>
        Home
        <button onClick={handleSignout}>sign out</button>

    </div>
  )
}

export default Home