import { useEffect, useState } from 'react'


export default function useScreenSize() {
    const [screenSize, setScreenSize] = useState(getScreenSizes())

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(getScreenSizes())
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return [screenSize]
}

function getScreenSizes() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}