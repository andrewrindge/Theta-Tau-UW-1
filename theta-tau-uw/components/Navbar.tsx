import { Stack, HStack, Text } from '@chakra-ui/react'
import ColorModeSwitcher from './ColorModeSwitcher'
import { NavItems } from '../lib/types'
import getNavItems, { FinalNavEntryItems } from '../lib/getNavItems'

interface Props {
    navData: FinalNavEntryItems[]
}

export default function Navbar({ navData }: Props) {

    return (
        <Stack>
            <HStack>
                {navData.map((entry, index) => {
                    return (
                        <Stack key={index}>
                            <Text>
                                {entry.title}
                            </Text>
                        </Stack>
                    )
                })}
            </HStack>
            <ColorModeSwitcher />
        </Stack>
    )
}