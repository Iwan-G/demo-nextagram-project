import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Form, Input, ListGroupItem } from 'reactstrap';
import CommentLikes from './CommentLikes';

const Comments = ({imageId}) => {
    const [comments, setComments] = useState([])
    const [input, setInput] = useState("")
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        axios.get(`https://insta.nextacademy.com/api/v1/images/${imageId}/comments`,
        {
            headers:{
                "Authorization" : "Bearer " + localStorage.getItem("jwt")
            }
        })
        .then (result => {
            console.log(result)
            setComments(result.data)
        })
        .catch(err=>{
            console.log('Error: ', err)
        })
    },[imageId, submitted])

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleComment = (e) => {
        e.preventDefault()
        axios({
            method: 'POST',
            url: `https://insta.nextacademy.com/api/v1/images/${imageId}/comments`,
            headers: {
                "Authorization" : "Bearer " + localStorage.getItem("jwt")
            },
            data : {
                content: input
            }
        })
        .then(result => {
            console.log(result)
            setInput("")
            setSubmitted(true)
        })
        .catch(err => {
            console.log(err)
        })
        setSubmitted(false)
    }
    return(
       <>
          {
              comments.map(com =>{
                  return(
                      <ListGroupItem key={com.id} >
                          <div className="col-2 px-0">
                              <img src={com.posted_by.profileImage} className="rounded-circle" width="30" height="30" alt=""/>
                          </div>
                          <div>
                          <span>{com.content}</span>{''} <CommentLikes comId={com.id} setSubmitted={setSubmitted} />
                          </div>
                          
                      </ListGroupItem>
                  )
              })
          }
          <ListGroupItem>
              <Form onSubmit={handleComment}>
                  <Input value={input} onChange={handleInput}/>
              </Form>
          </ListGroupItem>
       </>
    )

}

export default Comments;
