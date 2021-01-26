import React, {useEffect, useRef, useState} from 'react'


import useTFImageClassification from '../util/hooks/useTFImageClassification'



export default function Tensorflow() {
    
    const imageRef = useRef()
    const [predict, isLoading, predictions] = useTFImageClassification()
    
    return (
                             <div className = "flex justify-center h-screen">
                                        <div className = "w-1/3 m-auto text-3xl">
                                            <h1 className = "text-center">TensorFlow Example</h1>
                                            <img    crossOrigin = "anonymous"  
                                                    
                                                    src = "https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MzY5MX0" 
                                                    ref = {imageRef} />
                                            <div className = "text-center my-5">
                                                {predictions.length > 0 && (
                                                                            predictions.map(prediction => (<div className = "flex justify-between"> 
                                                                                                                        <p>{prediction.className}</p> 
                                                                                                                        <p>{Math.floor(prediction.probability *100) + "%"}</p>
                                                                                                          </div>))
                                                                                
                                                                              )}
                                                <button onClick ={() => predict(imageRef.current)} className = "p-2 rounded bg-gray-900 text-white w-64">
                                                    {isLoading ? '⌛' : "Predict Result"}
                                                </button>
                                            </div>
                                            
                                        </div>
                                        
                                </div>
    )
}
