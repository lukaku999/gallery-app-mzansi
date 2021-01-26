import React, {useContext, useEffect, useState} from 'react';
import "./assets/css/style.css"

import {                 Route, 
                         Switch,
                         useLocation} from "react-router-dom"
import routes from './util/routes/routes';
import firebase from './config/firebase'
import Header from './components/Header'
import AppContext from './store/index'
import AuthRoute from './util/routes/AuthRoute'
import GuestRoute from './util/routes/GuestRoute'
import Loading from './components/loading'
import NotFound from './pages/404'
import AnimatedRoute from './util/routes/AnimatedRoute'
import { AnimatePresence } from 'framer-motion';


const App = () => {
    //const [isLoggedIn, setIsLoggedIn] = useState(false)
    //const [user, setUser] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({})
    const location = useLocation()
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
           if (user){
               
               setIsLoggedIn(true)
               setUser(user)
               setIsLoading(false)
           }
           else{
               setUser({})
               setIsLoggedIn(false)
               setIsLoading(false)
           }
        })
    }, [])
    
    
    if (isLoading) return <Loading/>
    return (<AppContext.Provider value = {[isLoggedIn, user]}>
                    <Header/>
                    <AnimatePresence exitBeforeEnter initial = {false}>
                        
                        <Switch key = {location.pathname} location = {location}> 
                                
                                {routes.map((route, index) => {
                                    
                                    if(route.protected === 'guest'){
                                    
                                        return <GuestRoute  key = {index}
                                                            path = {route.path} 
                                                            exact = {true} 
                                                            >
                                                            
                                                                    {route.component}
                                                                
                                            </GuestRoute>
                                    

                                    }

                                    if (route.protected === 'auth'){
                                        
                                        return <AuthRoute key = {index}
                                                        path = {route.path} 
                                                        exact = {true} 
                                                        >
                                                        {route.component}
                                                                
                                            </AuthRoute>    
                                    
                                        
                                    }

                                    return <AnimatedRoute   key = {index}
                                                            path = {route.path} 
                                                            exact = {true} 
                                                            >
                                            
                                                {route.component}
                                            
                                        
                                        </AnimatedRoute>
                                    
                                        
                                
                                    
                                                
                                        
                                })}
                                <Route path = "*">
                                    <NotFound/>
                                </Route>
                                    
                                        
                        </Switch>
                    </AnimatePresence>
                </AppContext.Provider>
                
                )
                
           
}

export default App




