import React from 'react';
import {
  Card, CardImg, CardBody, CardTitle, Button
} from 'reactstrap';

import UserImages from '../containers/UserImages';
import {Link} from 'react-router-dom'


const HomePage = ({users}) => {

  return (
    
      <div>
          {users.map(user => {
              return (
                <div key={user.id} className ="row d-flex flex-wrap" style={{backgroundColor:"lightgray", marginBottom:"10px"}}>
                        
                <Card className ="col-3 d-flex align-items-center" style={{width:"25vw",margin:"0px", borderStyle:"none", backgroundColor:"lightgray", textAlign:"center"}}>
                    <CardTitle><h2>{user.username}</h2></CardTitle>
                    <CardBody >
                    <CardImg className="rounded-circle"top width="100%" src={user.profileImage} alt="Card image cap" style={{width:"80%", border:"4px solid white", marginBottom:"15px"}} />
                    <Link to={`/users/${user.id}`}>
                        <Button color="primary">View Profile</Button>
                    </Link>
                    
                    </CardBody>

                </Card>

            <div className ="col-9 d-flex flex-wrap" style={{paddingLeft:"10px"}}>
                <UserImages userId ={user.id}/>
            </div>
        
        </div>
              )
          })}
      </div>
    
  );
}

export default HomePage;