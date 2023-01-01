import { Stack, HStack, Text, Hide, Show, Menu, MenuButton, IconButton, MenuList, Image, VStack, MenuItem } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import { FinalNavEntryItems, FinalLogoProps } from '../../lib/types'
import Link from 'next/link'
import React, { ChangeEvent, useState } from 'react'
import MarginStack from './MarginStack'
import { useRouter } from 'next/router'

interface Props {
    navData: FinalNavEntryItems[]
    logo: FinalLogoProps
    index: number
}

export default function Navbar({ navData, logo, index }: Props) {

    const router = useRouter()

    function handleEvent(
        event: ChangeEvent<HTMLInputElement>,
        number: string
    ): void

    function handleEvent(
        event: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
        number: string
    ): void

    function handleEvent(event: any, number: any) {
        event.currentTarget.style.cursor = 'pointer'
        event.currentTarget.style.transform = `translateY(${number}px)`
        event.currentTarget.style.transition = '0.3s'
    }

    const navContent = navData.map((entry, currentIndex) => {
        return (
            <Text
                key={entry.title}
                fontWeight={700}
                fontSize={{ sm: '16px', md: '12px', lg: '16px', xl: '18px' }}
                letterSpacing='2px'
                padding={{ base: '0px', md: currentIndex === index ? '0px 0px' : '3px 0px' }}
            >
                {entry.title.toUpperCase()}
            </Text>
        )
    })
    return (
        <Stack width='100%' alignItems='center' backgroundColor='colors.900'>
            <HStack
                height={{ base: '100px', sm: '120px' }}
                paddingRight='5px'
                width='100%'
            >
                <HStack width='100%' alignItems='flex-end'>
                    <Link href='/'>
                        <Stack
                            width={{ base: '80px', md: '75px' }}
                            marginLeft={{ base: '10px', md: '5px', lg: '20px' }}
                            marginRight={{ base: '15px', md: '5px', lg: '35px' }}
                            onMouseEnter={(event) => {
                                handleEvent(event, '-2')
                            }}
                            onMouseLeave={(event) => {
                                handleEvent(event, '2')
                            }}
                            paddingTop={{ base: '12px', sm: '0px' }}
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                borderRadius={{ base: '4px', md: '10px' }}
                            />
                        </Stack>
                    </Link>
                    <Stack
                        width='100%'
                        justifyContent='center'
                        fontSize={{ base: '14px', sm: '16px', md: '13px', lg: '16px', xl: '18px' }}
                        fontWeight={700}
                        color='colors.800'
                    >
                        <Text>
                            θT THETA BETA CHAPTER
                        </Text>
                        <Text>
                            University of Washington
                        </Text>
                    </Stack>
                </HStack>
                <Hide below='md'>
                    <Stack alignItems='flex-end' width='100%'>
                        {/* <HStack justifyContent='flex-end' paddingTop='20px'>
                            <Button onClick={() => router.push('/auth/login-page')}>Log in</Button>
                            <IconButton
                                icon={<CgProfile />}
                                aria-label='Go to profile'
                                onClick={() => {
                                    router.push('/user/profile')
                                }}
                            />
                        </HStack> */}
                        <HStack height='70px' alignItems='center'>
                            {navContent.map((entry, currentIndex) => {
                                return (
                                    <Link href={`${navData[index].url}`} key={currentIndex}>
                                        <Stack
                                            textAlign={{ base: 'left', md: 'center' }}
                                            padding='2px 5px'
                                            borderBottom={{
                                                base: '',
                                                md: currentIndex === index ? '3px solid #EDEAB5' : '0px'
                                            }}
                                            borderRadius='3px'
                                            _hover={{
                                                backgroundColor: 'colors.200',
                                                color: 'colors.300'
                                            }}
                                            color='colors.800'
                                            onMouseEnter={(event) => {
                                                handleEvent(event, '-2')
                                            }}
                                            onMouseLeave={(event) => {
                                                handleEvent(event, '2')
                                            }}
                                        >
                                            {entry}
                                        </Stack>
                                    </Link>
                                )
                            })}
                        </HStack>
                    </Stack>
                </Hide>
                <Show below='md'>
                    <HStack justifyContent='flex-end' width={{ base: 'fit-content', md: '100%' }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                arial-label='Options'
                                icon={<GiHamburgerMenu />}
                                backgroundColor='#FFF'
                                color='colors.700'
                                _hover={{ backgroundColor: 'colors.700', color: '#FFF' }}
                                variant='outline'
                            />
                            <MenuList
                                padding='20px'
                                backgroundColor='#FFF'
                            >
                                {navContent.map((entry, currentIndex) => {
                                    return (
                                        <Link href={`${navData[index].url}`} key={currentIndex}>
                                            <MenuItem
                                                width='100%'
                                                backgroundColor={{
                                                    base: currentIndex === index ? 'colors.700' : '',
                                                    md: '#FFF'
                                                }}
                                                color={{
                                                    base: currentIndex === index ? '#FFF' : 'colors.700',
                                                    md: 'colors.700'
                                                }}
                                                borderBottom={{
                                                    base: '',
                                                    md: currentIndex === index ? '3px solid #E0E1DC' : '0px'
                                                }}
                                                borderRadius='3px'
                                            >
                                                {entry}
                                            </MenuItem>
                                        </Link>
                                    )
                                })}
                                <HStack paddingTop='35px' justifyContent='space-between'>
                                    <MenuItem
                                        flex={1}
                                        borderRadius='5px'
                                        onClick={() => {
                                            router.push('/auth/login-page')
                                        }}
                                        onKeyDown={(event) => {
                                            if (event.key == 'Enter') {
                                                router.push('/auth/login-page')
                                            }
                                        }}
                                    >
                                        <Text fontWeight={600} padding='5px' borderBottom='1px solid #000'>
                                            Log in
                                        </Text>
                                    </MenuItem>
                                    <MenuItem
                                        flex={1}
                                        borderRadius='5px'
                                        onClick={() => {
                                            router.push('/user/profile')
                                        }}
                                        onKeyDown={(event) => {
                                            if (event.key == 'Enter') {
                                                router.push('/user/profile')
                                            }
                                        }}
                                    >
                                        {/* <IconButton
                                            icon={<CgProfile />}
                                            aria-label='Go to profile'
                                        /> */}
                                    </MenuItem>
                                </HStack>
                            </MenuList>
                        </Menu>
                    </HStack>
                </Show>
            </HStack>
        </Stack >
    )
}