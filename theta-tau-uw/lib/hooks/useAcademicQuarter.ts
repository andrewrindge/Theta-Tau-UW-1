import { useEffect, useState } from 'react'

export enum RushMessage {
    FALL = 'Fall',
    SPRING = 'Spring',
    THANK_YOU_MESSAGE = 'Thank you for a great rush cycle'
}

export function useAcademicQuarter() {
    const [quarter, setQuarter] = useState('')

    const quarterToMonth = {
        fall: ['6', '7', '8', '9'],
        spring: ['11', '0', '1', '2', '3', '4'],
        other: ['5', '10']
    }

    useEffect(() => {
        const date = new Date()
        const month = date.getMonth()

        const getCorrectQuarterAndYear = () => {
            if (quarterToMonth.fall.includes(`${month}`)) {
                setQuarter(RushMessage.FALL)
            } else if (quarterToMonth.spring.includes(`${month}`)) {
                setQuarter(RushMessage.SPRING)
            } else {
                setQuarter(RushMessage.THANK_YOU_MESSAGE)
            }
        }

        getCorrectQuarterAndYear()

        window.addEventListener('load', getCorrectQuarterAndYear)

        return () => window.removeEventListener('load', getCorrectQuarterAndYear)
    }, [quarter])

    return [quarter]
}