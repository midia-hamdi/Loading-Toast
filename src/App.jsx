import React, { useState, useEffect } from 'react'
// import Loading from './components/Loading'
// import Toast from './components/Toast'


export default function App() {
    const [toast, setToast] = useState({ type: 'info', message: '' })
    const [title, setTitle] = useState('')
    const [postId, setPostId] = useState(1)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(psot => {
                setTitle(psot.title)
                setLoading(false)
                setToast({ type: 'success', message: `Post with id ${postId} loaded` })
            })
    }, [postId])
    function handleLoading(e) {
        setPostId(e.target.value)
        setLoading(true)
    }

    return (
        <div className='container'>
            <div>
                <label>Post Id: </label>
                <input value={postId} onChange={handleLoading} type="number" />
            </div>
            <div>
                {/* {loading ? <Loading /> : <h1>{title}</h1>} */}
            </div>
            {/* <Toast type={toast.type} message={toast.message} /> */}
        </div >

    )
}
