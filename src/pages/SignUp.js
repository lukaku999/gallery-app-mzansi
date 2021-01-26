import React, {useState, useContext} from 'react'
import {Redirect, useHistory} from 'react-router-dom'
import firebase from '../config/firebase'
import Loading from '../components/loading'
import AppContext from '../store/index'
import {useFormik, Formik, ErrorMessage, Form, Field} from 'formik'
import * as yup from 'yup'

export default function SignUp() {
    
    
    const [isLoggedIn, user] = useContext(AppContext)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const history = useHistory()   

    return (
           <Formik  initialValues = {{email: "", password: ""}}
                    onSubmit = {(value, formikBag) => firebase.auth()
                                                 .createUserWithEmailAndPassword(value.email, value.password)
                                                 .then(res => {
                                                     
                                                     history.replace('/')
                                                 })
                                                 .catch(e => {
                                                        formikBag.setFieldError('email', e.message)
                                                 })
                                            }
                    validationSchema = {yup.object({
                        email: yup.string().required().email(),
                        password: yup.string().required().min(6)
                    })}>  
                         <div className="flex h-screen bg-gray-200">
                                    <div className = "m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-700">

                                        <Form className = "m-5 w-10/12">
                                                <h1 className = "w-full text-4xl tracking-widest text-center my-6">Signup</h1> 
                                                <div className = "w-full my-6">
                                                    <Field className = "p-2 rounded shadow w-full text-black" 
                                                        placeholder = "email or username"
                                                        name = "email"
                                                        type ="email"/>
                                                    <ErrorMessage name = "email"/>
                                                </div>
                                                <div className = "w-full my-6"> 
                                                    <Field className = "p-2 rounded shadow w-full text-black"
                                                        name = "password" 
                                                        placeholder = "password" 
                                                        type ="password"/>
                                                    <ErrorMessage name = "password"/>
                                                
                                                </div>
                                                <div className = "w-full my-10">
                                                    <button className="p-2 rconst formSection = ounded shadow w-full bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black" type =" submit">
                                                        {isLoading ? <i className = "fas fa-circle-notch fa-spin"/> : "Signup"}
                                                    </button>
                                                </div>
                                                <p style ={{color: "white", textAlign: "center"}}>{error}</p>
                                        </Form>
                                    </div>

                            </div>    
           </Formik>     
  
                                            
    )
}
