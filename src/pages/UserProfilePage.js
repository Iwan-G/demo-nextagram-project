import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import UserImages from '../containers/UserImages'

const UserProfilePage = () => {

    let user = useParams();
    const [users, setUsers] =useState({})

    useEffect(() => {
      
        axios.get(`https://insta.nextacademy.com/api/v1/users/${user.id}`)
            .then(result => {
                setUsers(result.data)
            })
            .catch(error => {
                console.log(error)
            })

    }, [user.id])
    


    return (
        <>
        <div className ="row mb-5">
        <div>
            <img src ={users.profileImage} className="rounded-circle" style={{paddingLeft: "20px", marginTop: "20px"}} width="200" alt="profilepic"/>
        </div>
        <div className = "col-6">
        <h2 className = "mt-3">{users.username}</h2>
        </div>

        </div>

                    <div className ="col-9 d-flex flex-wrap" style={{paddingLeft:"10px", display:"flex"}}>
                        <UserImages userId ={user.id}/>

                    </div>
                
                
           
        
    </>
    )
}

export default UserProfilePage;