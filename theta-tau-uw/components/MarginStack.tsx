import { Stack } from '@chakra-ui/react'

export default function MarginStack({ children }: { children: React.ReactNode }) {
    return (
        <Stack
            padding={{ base: '20px', md: '35px' }}
            alignItems={'center'}
            justifyContent={{ base: 'center', md: 'space-evenly' }}
            direction={{ base: 'column', md: 'row' }}
        >
            {children}
        </Stack>
    )
}