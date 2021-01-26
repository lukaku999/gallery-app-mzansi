import React, { useEffect, useState } from 'react'
import Axios from 'axios'
const api = process.env.REACT_APP_UNSPLASH_API
const secret = process.env.REACT_APP_UNSPLASH_KEY

export default function useFetchImage(page, searchTerm) {
    
    const [images, setImages] = useState([])
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
       
        fetch()
    }, [page, searchTerm])
    

    const fetch = () => {
        const url = searchTerm === null ? "photos?" : `search/photos?query=${searchTerm}&`
        Axios.get(`${api}/${url}client_id=${secret}&page=${page}`)
        .then(res => {
            searchTerm === null ? fetchRandom(res) : fetchSearch(res)
            setIsLoading(false)
        })
        .catch(e => {
            setErrors(["unable to fetch images"])
            setIsLoading(false)
        })
    
    }
    
    const fetchSearch = res => {
        page > 1 ? setImages([...images, ...res.data.results]) : setImages([...res.data.results])
    }
    const fetchRandom = (res) => {
        setImages([...images, ...res.data])
    }

    
    return [images, setImages, errors, isLoading]
}
