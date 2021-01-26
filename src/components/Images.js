import React, { Component, useEffect, useState, useRef, useLayoutEffect } from 'react'

import ShowImages from './showImages'
import useFetchImage from '../util/hooks/useFetchImage'
import Loading from './loading'
import useScroll from '../util/hooks/useScroll'
import useDebounce from '../util/hooks/useDebounce'

export default function Images() {

    const [page, setPage] = useState(1)
    const [searchTerm, handleInput ] = useDebounce(setPage, page)
   
    const [images, setImages, errors, isLoading] = useFetchImage(page, searchTerm)
    



    const pageContent = errors.length > 0 ? <div className = "flex h-screen">
                                <p className = "m-auto">{errors[0]}</p>
                            </div>

                            :<div>
                                    <h1>
                                        {images.length} Images
                                    </h1>

                                    <div >
                                        
                                     {<ShowImages images = {images} setImages = {setImages} setPage = {setPage} page = {page}/>}
                                    </div>
                                   
                            </div>

    
    
   
    return ( 
            <section >
                <div className = "my-5">
                    <input type = "text" 
                           onChange = {handleInput} 
                           placeholder = "Search Photos Here"
                           className = "w-10/12 border rounded shadow p-2"/>

                </div>
               
                {isLoading ? <Loading/>: pageContent}                  
            </section>
           
    )
}

/*
export default class Images extends Component {
    
    constructor(props){
        super(props)
        this.state = {interval: null}
    }

    componentDidMount() {
        console.log("image mounted")*/
       /* this.setState({
            interval: setInterval(() => {
                console.log("hello")
            }, 1000)
        })*/
   /* }

    componentDidUpdate(){
        console.log("App updated")
    }

    componentWillUnmount() {
        console.log("end")
       // clearInterval(this.state.interval)
      }

    render() {
        return (
            <div>
                <img src = "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"/>
            </div>
        )
    }
}*/






