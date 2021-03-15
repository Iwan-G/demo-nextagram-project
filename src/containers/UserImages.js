import React, {useState,useEffect} from 'react';
import axios from 'axios';
import LoadingIndicator from '../components/LoadingIndicator'
import {useLocation} from 'react-router-dom';
import Likes from './Likes';
import Comments from './Comments';

const UserImages = ({userId}) => {
    
    //console.log(userId)
    const [userImages, setUserImages] = useState([]);
    const [isloading, setIsLoading] = useState(true);
    const location = useLocation()
   

    useEffect(() => {
        //perform a GET request
        axios.get(`https://insta.nextacademy.com/api/v2/images?userId=${userId}`)
        .then(result => {
          // If successful, we do stuffs with 'result'
          //console.log(result)
          setUserImages(result.data)
          setIsLoading(false)

        })
        .catch(error => {
          // If unsuccessful, we notify users what went wrong
          console.log('ERROR: ', error)
        })
    
      }, [userId])


    
      

      if(isloading){
        return <LoadingIndicator width="100px" height="100px" color="blue" /> 
      }

      return (
        
          <div style={{display:"flex", flexWrap:"wrap", alignItems:"center"}}>
            {userImages.map((eachImg,index) => {

              if(location.pathname === "/"){
                return (
                  <div key={eachImg.id} style={{ width: "200px" }}>
                  <img src={eachImg.url} alt="User Images" style={{ width: "150px", height: "100px", marginBottom: '20px' }} />
                </div>
              )

              } else {
                return (
                  <div className ='card col-12 col-sm-6 p-3' key={`${userId}-images${index}`}>
                    <img src={eachImg.url} alt="User Images" style={{ width: "200px", height: "200px", marginBottom: '20px' }} />
                    <Likes imageId={eachImg.id}/>
                    <Comments imageId={eachImg.id}/>
                    </div>
              )
              }
                 
            })}
          </div> 
        
      );

}
export default UserImages;