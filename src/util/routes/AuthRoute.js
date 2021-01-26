import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AppContext from '../../store/index'
import Loading from '../../components/loading'
import AnimatedRoute from './AnimatedRoute'
import { motion } from 'framer-motion'
export default function AuthRoute({children, ...rest}) {
    
    const [isLoggedIn] = useContext(AppContext)

   
    if(isLoggedIn) return <AnimatedRoute {...rest}>
                                {children}
                          </AnimatedRoute>
    return 	<motion.div initial = {{x: 200}} 
                        animate = {{x:0}} 
                        exit = {{scale: 0}}>
                <Redirect exact to = "/login"/>
            </motion.div>
             
}
