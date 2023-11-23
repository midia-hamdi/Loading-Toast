import React from 'react'
import Loding from './components/Loadingg/Loding'
import Toast from './components/toast/Toast'


export default function App() {
    return (
      <div>
        <Loding />
        <Toast type='success' message='so is easy!'/>
      </div>
    )

    }

