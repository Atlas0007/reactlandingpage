import react from 'react'

 export function UserLogin () {
 


  return (
    <>
     
<form>
  <label htmlFor="email" style={{fontSize: "20px" }}> Email or Phone : </label>
  <input type="text"  id= "email" placeholder='Enter your email' style={{borderRadius: "5px", fontSize : "20px"}}/>

<br />
<br />

  <label htmlFor="password">Password: </label>
  <input type="text" id ="password" placeholder='password?' />

<br />
<br />

<label htmlFor="submit">Submit : </label>
<button type='submit' style={{backgroundColor : "white", padding:"5px"}}> Log in</button>
</form>
      
    </>
  )
}

