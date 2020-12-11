import React from 'react';
import {
  Card, CardImg, CardBody, CardTitle, CardText
} from 'reactstrap';

import UserImages from '../containers/UserImages';
import {Link} from 'react-router-dom'


const HomePage = ({users}) => {

  return (
    
      <div className ="d-flex flex-wrap" style={{margin:"10px"}}>
          {users.map(user => {
              return (
                  <div key={user.id} className ="row d-flex flex-wrap" style={{backgroundColor:"lightgray", marginBottom:"10px", display:"flex"}}>
                      
                          <Card className ="col-3 d-flex align-items-center" style={{width:"25vw",margin:"0px", borderStyle:"none", backgroundColor:"lightgray", textAlign:"center"}}>
          
                              <CardImg className="rounded-circle"top width="100%" src={user.profileImage} alt="Card image cap" style={{width:"80%", border:"4px solid white", marginTop:"15px"}} />
                              <CardBody >
                              <CardTitle>
                                  <Link to={`/profile/${user.id}`}>{user.username}</Link>
        
                                  </CardTitle>
                              
                              <CardText>ID: {user.id}</CardText>
                              
                              
                              </CardBody>
          
                          </Card>

                      <div className ="col-9 d-flex flex-wrap" style={{paddingLeft:"10px", display:"flex"}}>
                          <UserImages userId ={user.id}/>
                      </div>
                  
                  </div>
              )
          })}
      </div>
    
  );
}

export default HomePage;