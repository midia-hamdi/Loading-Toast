import React, { useState, useEffect, useReducer } from 'react'
import Loding from './components/Loadingg/Loding'
import Toast from './components/toast/Toast'

const init = (initState) => {
  return initState;
}

const initState ={
  toast: {type :'info', massege : ''},
  title: '',
  postId: 1,
  loading: true,
}


const typeAction= {
  GET_POST_SUCCESS:'get-post-success',
  GET_POST_REQUEST: 'get-post-request',

}

function reducer(state, action){
  switch(action.type){
    case action.GET_POST_SUCCESS:
      
      return{
        ...state,
        toast: { type: 'success', message: action.massege },
        title: action.title,
        loading: false,
      }

    case action.GET_POST_REQUEST:
      return{
        ...state,
        postId: action.postId,
        loading: true,
      }

      default:
      return state;
  }
}

export default function App(){

  const [{postId, title, toast, loading}, dispatch] = useReducer(reducer, initState, init)

    useEffect(() =>{
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(Response => Response.json())
      .then(post => {

        dispatch({
          type: typeAction.GET_POST_SUCCESS,
          title: post.title,
          massege: `Post with id ${postId} loaded`,
        })

      })
    }, [postId])

    function handleLoading(e){
      dispatch({
          type: typeAction.GET_POST_REQUEST,
          postId: e.target.value, 
         })
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

