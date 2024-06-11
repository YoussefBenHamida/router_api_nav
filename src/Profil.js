import { useParams } from "react-router-dom"
import {list} from "./Data"

const Profil=()=>{
    const {userId}=useParams()
    console.log(userId,"ADAM")
    const user = list.find((el)=>(
        Number(userId)===el.id
    ))
console.log(user,"hi")
    return(
        <>
        <p>{user.name}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>


        </>
    )
}
export default Profil