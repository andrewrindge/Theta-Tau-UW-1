import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { HStack, Stack, Text } from '@chakra-ui/react';

export default function NotFound() {
    const router = useRouter()
    useEffect(() => {
        // setTimeout(() => {
        //     router.push('/')
        // }, 3000)
    }, [])

    return (
        <Stack width='100%' height='100vh' justifyContent='center' alignItems='center'>
            <HStack>
                <Text fontSize='30px' padding='15px'>
                    404
                </Text>
                <Text fontSize='30px'>
                    |
                </Text>
                <Text fontSize='30px' padding='15px'>
                    Not Found
                </Text>
            </HStack>
            <Stack>
                <Text fontSize='20px' fontWeight={600}>
                    Go back to &nbsp;
                    <Link href='/' passHref>
                        <a style={{
                            color: '#FFCC33',
                            backgroundColor: '#8B0000',
                            padding: '3px'
                        }}>
                            Home
                        </a>
                    </Link>
                    &nbsp; Page
                </Text>
            </Stack>
        </Stack>
    )
}

