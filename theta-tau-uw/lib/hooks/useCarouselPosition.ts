import { KeyboardEvent, MouseEvent, useEffect, useState } from "react"

interface Props {
    children: any[]
    debounce: number
}

export function useCarouselPosition({ ...props }: Props) {
    const [position, setPosition] = useState(0)
    const [length, setLength] = useState(props.children.length)

    useEffect(() => {
        setLength(props.children.length)
    }, [length, props.children])

    const handleLeftClick = () => {
        if (position > 0) {
            setPosition(position - 1)
        } else {
            setPosition(length - 1)
        }
    }

    const handleRightClick = () => {
        if (position < length - 1) {
            setPosition(position + 1)
        } else {
            setPosition(0)
        }
    }

    const onClick = (
        event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>,
        index: number
    ) => {
        setPosition(index)
    }

    return { position, methods: { handleLeftClick, handleRightClick, onClick } as const }
}