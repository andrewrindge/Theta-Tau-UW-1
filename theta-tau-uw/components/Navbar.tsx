import { Stack, HStack, Text } from '@chakra-ui/react'
import ColorModeSwitcher from './ColorModeSwitcher'
import { FinalNavEntryItems } from '../lib/getNavItems'

interface Props {
    navData: FinalNavEntryItems[]
}

export default function Navbar({ navData }: Props) {
    return (
        <HStack flex={2} padding='10px 40px'>
            <HStack>
                {navData.map((entry, index) => {
                    return (
                        <Stack key={index} padding={'0px 15px'}>
                            <Text
                                fontWeight={700}
                                fontSize={{ base: '16px', md: '16px', lg: '18px' }}
                                letterSpacing='2px'
                            >
                                {entry.title.toUpperCase()}
                            </Text>
                        </Stack>
                    )
                })}
            </HStack>
            <Stack flex={1} alignItems='flex-end'>
                <ColorModeSwitcher />
            </Stack>
        </HStack >
    )
}