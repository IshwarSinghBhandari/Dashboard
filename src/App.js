import React from 'react'
import LeftNav from './component/Leftnav'
import Rightpart from './component/Rightpart'

export default function App() {
  return (
    <main  className="d-flex">
      <LeftNav/>
      <Rightpart/>
    </main>
  )
}
