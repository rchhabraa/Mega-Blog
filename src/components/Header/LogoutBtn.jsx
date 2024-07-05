import React from 'react';
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
    const dispatch=useDispatch()
    const logoutHandler=()=>{
        authService.logout()
        .then(()=>{dispatch(logout())})
    }
    return (
      <button className=' hover:bg-blue-100 px-6 py-2 rounded-xl duration-200 inline-block' onClick={logoutHandler}>
        Logout
      </button>
    );
}

export default LogoutBtn;