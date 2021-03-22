import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingIndicator from '../components/LoadingIndicator'



const UserImages = ({ userId }) => {
  const style = {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    boxShadow: "2px 2px #5D5C61",
    borderRadius: "5px"
  };

  //console.log(userId)
  const [userImages, setUserImages] = useState([]);
  const [isloading, setIsLoading] = useState(true);



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





  if (isloading) {
    return <LoadingIndicator width="100px" height="100px" color="blue" />
  }

  return (


    <div className="row">
    {userImages.map((userImage) => {
      return (
        <div className="col-sm-4 mb-4" key={userImage.id}>
          <img
            style={style}
            src={userImage.url}
            alt={userImage.url}
            key={userImage.id}
          ></img>
        </div>
      );
    })}
  </div>
   /* <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center"}}>
      {userImages.map((eachImg, index) => {

        if (location.pathname === "/") {
          return (
            <div key={eachImg.id}>
              <img src={eachImg.url} alt="User Images" style={{ width: "350px", height: "250px", marginBottom: '20px', marginLeft: "20px" }} />
            </div>
          )

        } else {
          return (
            <div className='card col-12 col-sm-6 p-3' key={`${userId}-images${index}`}>
              <img src={eachImg.url} alt="User Images" style={{ width: "350px", height: "250px", marginBottom: '20px', marginLeft: "35px" }} />
              <Likes imageId={eachImg.id} />
              <Comments imageId={eachImg.id} />
            </div>
          )
        }

      })}
    </div> */

  );

}
export default UserImages;