import React, { useRef, useState } from 'react'
import {motion} from 'framer-motion'
import PropTypes from "prop-types"
import useTFImageClassification from '../util/hooks/useTFImageClassification'

export default function Image({ handleDelete, imageUrl, index, show}) {
    const [predict, isLoading, predictions, clearPrediction] = useTFImageClassification()
    const [hoveredImage, setHoveredImage] = useState(false)
    const imageRef = useRef()
    

    const icons = <div>
                        {(predictions.length > 0 || isLoading)&& (<span onClick = {() => clearPrediction()} 
                                                                        className = "absolute bg-gray-800 text-white rounded-lg shadow px-2 left-0 ml-5">
                                                                            {isLoading && <p>'⌛'</p>}
                                                                            {predictions.length > 0 && (
                                                                                                        predictions.map((prediction, index) => ( <div key = {index} className = "flex justify-between"> 
                                                                                                                                                    <p>{prediction.className}</p> 
                                                                                                                                                    <p>{Math.floor(prediction.probability *100) + "%"}</p>
                                                                                                                                        </div>)
                                                                                                       )
                                                                                
                                                                )}</span>)}
                                                                            
                        <i onClick ={() => predict(imageRef.current)} className = "fas fa-search absolute left-0 cursor-pointer opacity-25 hover:opacity-100" >

                        </i>
                        <i onClick = {() => {handleDelete(index)}} 
                        className = "fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100" >
                        </i>
                        
                  </div>
    return (
        
                <motion.div className = "relative" 
                     onMouseEnter = {() => setHoveredImage(true)} 
                     onMouseLeave = {() => setHoveredImage(false)}>

                         
                        {hoveredImage ? icons: null} 
                            
                        <motion.img 
                            crossOrigin = "anonymous"
                            ref = {imageRef}
                            onClick = {show}
                            width= "100%" 
                            height = "auto" 
                            src = {imageUrl.urls.regular}
                            />
                    
                </motion.div>
                                                        
                                                        
                                                       
                                                            
                                                      
        
    )
}


Image.propTypes = {
    showPreview: PropTypes.func,

    index: PropTypes.number,

    image: PropTypes.string,

    handleDelete: PropTypes.func

    
}