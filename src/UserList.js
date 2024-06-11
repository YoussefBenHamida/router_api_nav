
import { useEffect,useState } from "react";
import axios from "axios"
import UserCard from "./UserCard"

 
 const UserList =()=>{
const [users,setUser]=useState("")
console.log(users,"dataaaaaaaaa")

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>setUser(res.data))
    .catch(error=>console.log())
  }, []);

    return(
        
        <div
        style={{
          marginTop:'5%',
          marginBottom:'5%',
          marginLeft:'13%',
          display:'inline-grid',
          gridTemplateColumns: 'auto auto auto auto ',
          gridGap:'100px',
        }}>
    {users && users.map((el)=>(
            <UserCard el={el} /> )
        )}
        </div>
        
    )
 }

 export default UserList