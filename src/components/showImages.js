import React, { useState } from 'react'
import Image from './image'
import Images from './Images'
import InfiniteScroll from 'react-infinite-scroll-component'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'

export default function ShowImages({images, setImages, setPage, page}) {

    const [showPreview, setShowPreview] = useState(false)
    

    const handleDelete = (index) => {
        /*let imageArray = [...images]
        imageArray.splice([parseInt(index)], 1);*/
        
        setImages([...images.slice(0, index), ...images.slice(index + 1, images.length)])
        
}
                                    
    return (
        <AnimateSharedLayout type="crossfade">
                    
                    <InfiniteScroll className = "flex flex-wrap" dataLength = {images.length}
                                        next = {() => setPage(page + 1)}
                                        hasMore = {true}>
                            {
                               images.map((image, index) => (
                                   
                                    <motion.div  className = "w-1/5 p-1  border  flex justify-center" 
                                                key = {image.urls.regular}
                                                layoutId = {image.urls.regular}
                                                
                                               >
                                                   {console.log(image)}
                                                 
                                            <Image  
                                                index = {index}
                                                handleDelete = {handleDelete} 
                                                imageUrl = {image} 
                                                show= {() => setShowPreview(image.urls.regular)}
                                            />
                                    </motion.div>
                                       
                                ))
                              
                            }
                    </InfiniteScroll>
                   <AnimatePresence>
                   {showPreview ?   
                               <motion.section className = "fixed w-full h-full flex justify-center items-center top-0 left-0 z-40"
                                               layoutId = {showPreview}
                                               exit = {{opacity: 0, 
                                                        rotate: 360,
                                                        transition: {duration: 1}}}
                                               onClick = {() => setShowPreview(false)}>
                               
                                                               <div className = "bg-white">
                                                                   <img src = {showPreview} 
                                                                       width = "500" 
                                                                       height = "auto"/> 
                                                               </div>
                               </motion.section> 
                                                      
                                                        
                                                       
                   : null}
                    </AnimatePresence>
                
        </AnimateSharedLayout>
             
    )        

}