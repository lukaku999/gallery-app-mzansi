import React, { useEffect, useState } from 'react'

export default function useDebounce(setPage, page, wait = 3000) {
    const [searchTerm, setSearchTerm] = useState(null)
    const [typingTimeout, setTypingTimeout] = useState("")

    let text

    
    const handleInput = (e) => {
            //setInputValue(e.target.value) 
            if (page > 1){
                setPage(1)
            }
            
            text = e.target.value
            clearTimeout(typingTimeout)
            const timeout = setTimeout(() => {
                
                setSearchTerm(text)
                
            }, wait)
    }
    return [searchTerm, handleInput ]
}
