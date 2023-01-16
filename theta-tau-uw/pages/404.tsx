import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { HStack, Stack, Text, Spinner } from '@chakra-ui/react';

export default function NotFound() {
    const router = useRouter()
    const [timeLeft, setTimeLeft] = useState(5)
    const [showSpinner, setShowSpinner] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            router.push('/')
        }, timeLeft * 1000)
        return () => clearTimeout(timeout)
    })

    useEffect(() => {
        const interval = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1)
            }

            if (timeLeft <= 1) {
                setShowSpinner(true)
            }
        }, 1000)
        return () => clearInterval(interval)
    })

    return (
        <Stack width='100%' height='100vh' justifyContent='center' alignItems='center' position='relative'>
            {showSpinner && (
                <Stack position='absolute' top={0} bottom={0} left={0} right={0}>
                    <Stack width='100%' height='100%' alignItems='center' justifyContent='center'>
                        <Spinner />
                    </Stack>
                </Stack>
            )}
            <HStack>
                <Text fontSize='30px' padding='15px'>
                    404 | Not Found
                </Text>

            </HStack>
            <Stack>
                <Text fontSize='20px' fontWeight={600}>
                    Go back to &nbsp;
                    <Link href='/' legacyBehavior>
                        <a style={{
                            color: '#FFCC33',
                            backgroundColor: '#8B0000',
                            borderRadius: '5px',
                            padding: '8px'
                        }}>
                            Home
                        </a>
                    </Link>
                    &nbsp; Page
                </Text>
                <Stack padding='10px' textAlign='center' fontWeight={500}>
                    <Text>Redirecting in {timeLeft} seconds</Text>
                </Stack>
            </Stack>
        </Stack>
    )
}