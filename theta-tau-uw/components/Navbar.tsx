import { Stack, HStack, Text, Hide, Show, Menu, MenuButton, IconButton, MenuList } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ColorModeSwitcher from './ColorModeSwitcher'
import { FinalNavEntryItems } from '../lib/getNavItems'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'

interface Props {
    navData: FinalNavEntryItems[]
    index: number
}

export default function Navbar({ navData, index }: Props) {

    const [navBorder, setNavBorder] = useState(index)

    const navigationItems = navData.map((entry, idx) => {
        return (
            <Link href={entry.url} key={idx}>
                <Stack
                    key={idx}
                    padding={{ md: '0px 12px', lg: '0px 15px' }}
                    border={{
                        base: navBorder === idx ? '2px solid #EDEAB5' : '',
                        md: 'none'
                    }}
                    borderBottom={{
                        base: '',
                        md: navBorder === idx ? '3px solid #EDEAB5' : ''
                    }}
                    textAlign={{ base: 'left', md: 'center' }}
                    paddingLeft={{ base: '15px', md: '15px' }}
                    left={0}
                >
                    <Text
                        fontWeight={700}
                        fontSize={{ sm: '14px', md: '16px', lg: '18px' }}
                        letterSpacing='2px'
                        padding={{ base: '10px 0px', md: '' }}
                        onMouseEnter={(event) => {
                            handleEvent(event, '-2')
                        }}
                        onMouseLeave={(event) => {
                            handleEvent(event, '2')
                        }}
                        onClick={() => {
                            if (navBorder !== idx) {
                                setNavBorder(idx)
                            }
                        }}
                    >
                        {entry.title.toUpperCase()}
                    </Text>
                </Stack>
            </Link>
        )
    })

    return (
        <HStack
            flex={2}
            padding='10px 20px'
            backgroundColor='#8B0000'
            color='#EDEAB5'
        >

            <Hide below='md'>
                <HStack height='70px' alignItems='center'>
                    {navigationItems}
                </HStack>
            </Hide>
            <Show below='md'>
                <HStack>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            arial-label='Options'
                            icon={<HamburgerIcon />}
                            backgroundColor='#EDEAB5'
                            color='#8B0000'
                            _hover={{ backgroundColor: '#8B0000', color: '#FFF' }}
                            variant='outline'
                        />
                        <MenuList
                            padding='20px'
                            backgroundColor='#8B0000'
                        >
                            {navigationItems}
                        </MenuList>
                    </Menu>
                </HStack>
            </Show>
            {/* <Stack flex={1} alignItems='flex-end'>
                <ColorModeSwitcher />
            </Stack> */}
        </HStack >
    )
}

function handleEvent(
    event: ChangeEvent<HTMLInputElement>,
    number: string
): void

function handleEvent(
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    number: string
): void

function handleEvent(event: any, number: string) {
    event.currentTarget.style.cursor = 'pointer'
    event.currentTarget.style.transform = `translateY(${number}px)`
    event.currentTarget.style.transition = '0.3s'
}