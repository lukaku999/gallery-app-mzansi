import React, {useState, useContext} from 'react'
import {Redirect, useHistory} from 'react-router-dom'
import firebase from '../config/firebase'
import Loading from '../components/loading'
import AppContext from '../store/index'

export default function Login() {
    const [form, setForm] = useState({email: "", password: ""})
    const [isLoggedIn, user] = useContext(AppContext)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    
    const handleInput = (e) => {
        
        setForm({...form, [e.target.name]: e.target.value})
    }
    console.log("is logged in is: " + isLoggedIn)
    const handleForm = (e) =>{
       
        setIsLoading(true)
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(form.email, form.password)
        .then((user) => {

            
            
            
            setIsLoading(false)
            setError("")
            
            // Signed in 
            // ...
        })
        .catch((error) => {
            setError(error.message)
            
            console.log(error.code)
        })
    }
    
    const formSection = <form className = "m-5 w-10/12" onSubmit = {handleForm}>
                        <h1 className = "w-full text-4xl tracking-widest text-center my-6">Login </h1> 
                            <div className = "w-full my-6">
                                <input className = "p-2 rounded shadow w-full text-black" 
                                       placeholder = "email or username"
                                       name="email" 
                                       type ="email"
                                       value ={form.email}
                                       onChange={handleInput}/>
                            </div>
                            <div className = "w-full my-6"> 
                                <input className = "p-2 rounded shadow w-full text-black" 
                                       placeholder = "password" 
                                       type ="password"
                                       name = "password"
                                       value ={form.password}
                                       onChange={handleInput}/>
                            </div>
                            <div className = "w-full my-10">
                                <button className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black" type =" submit">
                                    {isLoading ? <i className = "fas fa-circle-notch fa-spin"/> : "Login"}
                                </button>
                            </div>
                            <p style ={{color: "white", textAlign: "center"}}>{error}</p>
                 </form>

    return (
        isLoggedIn ? <Redirect to = '/gallery'/> :
        <div className="flex h-screen bg-gray-200">
            <div className = "m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-700">
               
               {formSection} 
            </div>
           
        </div>
    )
}
