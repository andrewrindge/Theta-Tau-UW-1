import { useState, useEffect } from 'react'

export default function useScreenWidth() {
    const [screenSize, setScreenSize] = useState(window.innerWidth)




    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return { screenSize }
}