import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const UserCard =({el})=>{
    return(
        <>

  <Card style={{ backgroundImage: 'linear-gradient(35deg, black 1%, #1f2127 50%, #1f2127 70%, #1f2127 70%, #474a51 100%)'}}>
      <Card.Body>
        <Card.Title style={{display:'flex',justifyContent:'center',fontSize:'20px', paddingTop:'0px',color:'rgb(204, 214, 223)'}}>{el.name}</Card.Title>
        <Card.Text style={{fontSize:'20px',color:'rgb(204, 214, 223)',width:'170px',height:"50px"}} >{el.username}</Card.Text>
        <Card.Text style={{fontSize:'15px',color:'rgb(204, 214, 223)'}} >{el.email}</Card.Text>
        <Button variant="primary" style={{border: 'none',letterSpacing: '0.05rem',fontWeight: 600,fontSize: '13px',borderRadius: '500px', background: 'rgb(53, 49, 49)',padding:'5px',marginLeft:'40px',width:'90px'}}>
            <Link to= {`/profil/${el.id}`}>Go to profil</Link></Button>
      </Card.Body>
      </Card>

        </>
    )
}

export default UserCard