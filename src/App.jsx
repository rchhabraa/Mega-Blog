import { useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import { useEffect } from 'react'
import { login,logout } from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userDate)=>{
      if (userDate) {
        dispatch(login({userDate}))
      } else {
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])
  return !loading ?(
  <div className='min-h-screen flex flex-wrap content-between bg-gray-600'>
    <div className='w-full block'>
      <Header/>
      <main>
        <Outlet/> 
      </main>
      <Footer/>
    </div>
  </div>
) : <h1>LOADING</h1>
}

export default App
