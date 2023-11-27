import React, { useState, useEffect } from 'react'
import Loding from './components/Loadingg/Loding'
import Toast from './components/toast/Toast'


export default function App() {
  const [toast, setToast] = useState({type :'info', massege : ''})
  const [title, setTitle] = useState('')
  const [postId, setPostId] = useState(1)
  const [loading, setLoading] = useState(true)

  function userAction(type, payload){
    switch(type){
      case 'get-post-success':
        setTitle(payload.title)
        setLoading(false)
        setToast({ type: 'success', message: payload.massege }) 
      break;
      case 'get-post-request':
        setPostId(payload)
        setLoading(true)
      default:
        break;
    }
  }


    useEffect(() =>{
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(Response => Response.json())
      .then(post => {
        userAction('get-post-success',
          {
            title: post.title,
            massege: `Post with id ${postId} loaded`,
        })
      })
    }, [postId])

    function handleLoading(e){
        userAction('get-post-request', e.target.value )
    }

    return (
      <div className='container'>
        <div>
          <lable>Post Id: </lable>
          <input value={postId} onChange={handleLoading} type= 'number'></input>
        </div>
        <div >
          {loading ? <Loding /> :  <h1>{title}</h1>}
          
        </div>
        <Toast type={toast.type} message={toast.massege}/>
      </div>
    )

    }

