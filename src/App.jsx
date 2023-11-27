import React, { useState, useEffect } from 'react'
import Loding from './components/Loadingg/Loding'
import Toast from './components/toast/Toast'


export default function App() {
  const [toast, setToast] = useState({type :'info', massege : ''})
  const [title, setTitle] = useState('')
  const [postId, setPostId] = useState(1)
  const [loading, setLoading] = useState(true)


    useEffect(() =>{
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(Response => Response.json())
      .then(post => {
        setTitle(post.title)
        setLoading(false)
        setToast({ type: 'success', message: `Post with id ${postId} loaded` }) 
      })
    }, [postId])

    function handleLoading(e){
      setPostId(e.target.value)
      setLoading(true)
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

