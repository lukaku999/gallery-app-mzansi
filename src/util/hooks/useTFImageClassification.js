import React, {useState} from 'react'

import "@tensorflow/tfjs"
import * as mobilenet from '@tensorflow-models/mobilenet'

export default function useTFImageClassification() {
        const [isLoading, setisLoading] = useState(false)
        const [predictions, setPredictions] = useState({})
        const clearPrediction = () =>{
            setPredictions([])
        }
        const predict = (img) => {
            
            setisLoading(true)
            mobilenet.load().then(model => {
                // Classify the image.
                model.classify(img).then(predictions => {
                    setPredictions(predictions)
                    setisLoading(false)
                });
              });
        }

        return [predict, isLoading, predictions, clearPrediction]
    
}
