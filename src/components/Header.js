
import React, { useContext} from 'react'
import {NavLink, useHistory, Redirect} from 'react-router-dom'
import firebase from '../config/firebase'
import AppContext from "../store/index"


export default function Header() {
    
    const history = useHistory()
    const [isLoggedIn, user] = useContext(AppContext)

    const logout = () => {
        firebase.auth().signOut().then(res => {
             //setIsLoggedIn(false)
            // <Redirect exact to="/login" />
             history.replace('/login')
             
        })
        .catch(e => {
            console.log(e.response.data)
        })
    }
    const loggedIn = <li className = "mr-5"><button onClick = {logout}>Logout</button> </li>
    const loggedout = <ul  className = "flex justify-between px-10">
                            <li className = "mr-5">
                                    <NavLink to = "/login" exact  activeClassName = "underline text-blue-200">
                                        Login
                                    </NavLink> 
                            </li>   
                            <li className = "mr-5">
                                    <NavLink to = "/signup" exact activeClassName = "underline text-blue-200">
                                        Signup
                                    </NavLink>
                            </li>
                            </ul>
    return (
        <nav className = "py-5 bg-gray-900 text-white flex justify-between">
                        <ul className = "flex justify-between px-10"> 
                     
                            <li className = "mr-5">
                                <NavLink to = "/" exact activeClassName = "underline text-blue-200">Home</NavLink>
                            </li>
                            <li className = "mr-5"  >
                               <NavLink to = "/gallery" exact  activeClassName = "underline text-blue-200">Gallery</NavLink>
                            </li>
                            <li className = "mr-5"  >
                               <NavLink to = "/tensorflow" exact  activeClassName = "underline text-blue-200">Tensorflow</NavLink>
                            </li>
                        </ul>
                        <ul  className = "flex justify-between px-10">
                            {isLoggedIn ? loggedIn : loggedout}
                        </ul>                   
        </nav>
    )
}


