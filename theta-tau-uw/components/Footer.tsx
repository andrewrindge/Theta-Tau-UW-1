import { HStack, Stack, Text, VStack, Icon, Hide, Show } from "@chakra-ui/react";
import Image from 'next/image'
import Link from "next/link";
import { FinalLogoProps, FinalNavEntryItems, SocialMediaLinks } from "../lib/types";
import MarginStack from "./MarginStack";
import { FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import React from "react";
import { IconType } from "react-icons/lib";

interface Props {
    navData: FinalNavEntryItems[]
    logo: FinalLogoProps
    socialMediaLinks: SocialMediaLinks[]
}

export default function Footer({ navData, logo, socialMediaLinks }: Props) {
    const year = new Date().getFullYear()

    let footerTitle = <Stack
        direction={{ base: 'row', sm: 'column', md: 'row' }}
        marginLeft={{ sm: '0px', md: '-25px' }}
    >
        <Stack width={{ base: '100px', md: '100px', lg: '150px', xl: '200px' }}>
            <Image
                src={logo.src} // logo.src
                alt={logo.alt}
                width={1}
                height={1}
                layout='responsive'
                objectFit='contain'
            />
        </Stack>
        <VStack
            fontSize={{ base: '10px', sm: '14px', md: '16px', lg: '20px', xl: '22px' }}
            fontWeight={750}
            fontStyle='italic'
            justifyContent='center'
        >
            <Text textAlign={{ base: 'center', md: 'left' }} width='100%'>
                THETA TAU
            </Text>
            <Text textAlign={{ base: 'center', md: 'left' }} width='100%'>
                THETA BETA CHAPTER
            </Text>
        </VStack>
    </Stack>

    return (
        <VStack backgroundColor='#DDD'>
            <MarginStack>
                <HStack justifyContent='space-between' width='100%'>
                    <Hide below='sm'>
                        {footerTitle}
                    </Hide>
                    <VStack width={{ lg: '40%', xl: '50%' }} alignItems='flex-start'>
                        <Text fontWeight={800} fontSize={{ base: '13px', sm: '15px' }}>
                            Site Map
                        </Text>
                        {navData.map((entry, index) => {
                            return (
                                <Link href={entry.url} key={index}>
                                    <Text
                                        fontWeight={600}
                                        _hover={{
                                            cursor: 'pointer',
                                            borderBottom: '2px solid #8F0000',
                                            color: '#8F0000',
                                            transition: '0.3s',
                                            padding: '1px'
                                        }}
                                        fontSize={{ base: '12px', sm: '16px' }}
                                        padding='2px'
                                    >
                                        {entry.title}
                                    </Text>
                                </Link>
                            )
                        })}
                    </VStack>
                    <VStack justifyContent='flex-start' height={{ base: '200px', sm: '235px' }}>
                        <Text
                            fontSize={{ base: '13px', sm: '14px', md: '16px', lg: '20px', xl: '22px' }}
                            fontWeight={750}
                            fontStyle='italic'
                        >
                            STAY CONNECTED
                        </Text>
                        <HStack>
                            {socialMediaLinks.map((entry, index) => {
                                const IconImage: IconType = (() => {
                                    switch (entry.type) {
                                        case 'facebook':
                                            // return <FaFacebookSquare size='30px' />
                                            return FaFacebookSquare
                                        case 'instagram':
                                            // return <FaInstagramSquare size='30px' />
                                            return FaInstagramSquare
                                        case 'mail':
                                            // return <GrMail size='30px' />
                                            return GrMail
                                        default:
                                            // return <GrMail size='30px' />
                                            return GrMail
                                    }
                                })()

                                return (
                                    <Stack padding='10px' key={index}>
                                        <a
                                            href={entry.type === 'mail' ? `mailto: ${entry.url}` : entry.url}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <Icon
                                                as={IconImage}
                                                aria-label='Go to Theta Tau'
                                                backgroundColor='#DDD'
                                                objectFit='cover'
                                                height='30px'
                                                width='30px'
                                            >

                                            </Icon>

                                        </a>
                                    </Stack>
                                )
                            })}
                        </HStack>
                        <Show below='sm'>
                            {footerTitle}
                        </Show>
                    </VStack>
                </HStack>
            </MarginStack>
            <Text width='100%' backgroundColor='#CCC' textAlign='center' padding='5px'>
                University of Washington | &copy; {year} Theta Tau Theta Beta Chapter
            </Text>
        </VStack>
    )
}


export async function getStaticProps() {

}