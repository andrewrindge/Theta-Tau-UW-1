import { Stack, HStack, Text, Hide, Show, Menu, MenuButton, IconButton, MenuList, Image, VStack } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ColorModeSwitcher from './ColorModeSwitcher'
import { FinalNavEntryItems, FinalLogoProps } from '../lib/types'
import Link from 'next/link'
import React, { ChangeEvent, useState } from 'react'

interface Props {
    navData: FinalNavEntryItems[]
    logo: FinalLogoProps
    index: number
}

export default function Navbar({ navData, logo, index }: Props) {

    const [navBorder, setNavBorder] = useState(index)
    const CTA = ['θT', 'THETA BETA CHAPTER']

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
                    paddingLeft={{ base: '15px', md: '2px', lg: '10px', xl: '15px' }}
                    left={0}
                >
                    <Text
                        fontWeight={700}
                        fontSize={{ sm: '16px', md: '13px', lg: '16px', xl: '18px' }}
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
            <Stack
                width={{ base: '80px', md: '50px' }}
                marginLeft={{ base: '5px', md: '1px', lg: '20px' }}
                marginRight={{ base: '10px', md: '18px', lg: '35px' }}
                onMouseEnter={(event) => {
                    handleEvent(event, '-2')
                }}
                onMouseLeave={(event) => {
                    handleEvent(event, '2')
                }}
            >
                <Link href='/'>
                    <Image
                        alt={logo.alt}
                        src={logo.src}
                        width={{ base: '100px', md: '50px' }}
                        objectFit={{ base: 'contain', md: 'contain' }}
                        borderRadius='10px'
                    />
                </Link>
            </Stack>
            <Hide below='md'>
                <HStack height='70px' alignItems='center'>
                    {navigationItems}
                </HStack>
            </Hide>
            <Show below='md'>
                <HStack justifyContent='flex-end' width='100%'>
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
            <Stack flex={2} alignItems='flex-end'>
                {/* <ColorModeSwitcher /> */}
                {(() => {
                    return (
                        <VStack
                            width={{ base: '200px', md: '100px', lg: '120px', xl: '300px' }}
                            padding={{ base: '15px', md: '10px' }}
                        >
                            {CTA.map((entry, index) => {
                                return (
                                    <Text
                                        width='100%'
                                        textAlign='left'
                                        fontSize={{ base: '12px', md: '12px', lg: '16px', xl: '20px' }}
                                        fontWeight={650}
                                        key={index}
                                    >
                                        {entry.toUpperCase()}
                                    </Text>
                                )
                            })}
                        </VStack>
                    )
                })()}
            </Stack >
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