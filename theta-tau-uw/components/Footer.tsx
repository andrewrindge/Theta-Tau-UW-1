import { HStack, Stack, Text, VStack, Image, IconButton } from "@chakra-ui/react";
// import Image from "next/image";
import Link from "next/link";
import { FinalLogoProps, FinalNavEntryItems } from "../lib/types";
import MarginStack from "./MarginStack";
import { FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

interface Props {
    navData: FinalNavEntryItems[]
    logo: FinalLogoProps
}

export default function Footer({ navData, logo }: Props) {
    return (
        <VStack backgroundColor='#DDD'>
            <MarginStack>
                <HStack justifyContent='space-between' width='100%'>
                    <HStack>
                        <Image
                            src={'https://upload.wikimedia.org/wikipedia/en/d/d7/ThetaTau.png'}
                            alt='Hand holding hammer and tongs'
                            width='120px'
                            height='210px'
                            objectFit='cover'
                        />
                        <VStack
                            fontSize='22px'
                            fontWeight={750}
                            fontStyle='italic'
                            textAlign='left'
                        >
                            <Text>
                                THETA TAU
                            </Text>
                            <Text>
                                THETA BETA CHAPTER
                            </Text>
                        </VStack>
                    </HStack>
                    <VStack>
                        <Text fontWeight={800}>
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
                                        padding='2px'
                                    >
                                        {entry.title}
                                    </Text>
                                </Link>
                            )
                        })}
                    </VStack>
                    <VStack>
                        <Text
                            fontSize='22px'
                            fontWeight={750}
                            fontStyle='italic'
                        >
                            STAY CONNECTED
                        </Text>
                        <HStack>
                            <Stack padding='10px'>
                                <a
                                    href='https://www.instagram.com/uwthetatau/?hl=en'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <IconButton
                                        icon={<FaInstagramSquare size='md' color='#000' />}
                                        aria-label='Go to Theta Tau Instagram'
                                        backgroundColor='#DDD'
                                        objectFit='cover'
                                    />
                                </a>
                            </Stack>
                            <Stack padding='10px'>
                                <a
                                    href='https://www.facebook.com/thetatauuw/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <IconButton
                                        icon={<FaFacebookSquare size='md' color='#000' />}
                                        aria-label='Go to Theta Tau Facebook'
                                        backgroundColor='#DDD'
                                    />
                                </a>
                            </Stack>
                            <Stack padding='10px'>
                                <a href="mailto: thetatauthetabeta@gmail.com">
                                    <IconButton
                                        icon={<GrMail size='md' color='#000' />}
                                        aria-label='Send Theta Tau an Email'
                                        backgroundColor='#DDD'
                                    />
                                </a>
                            </Stack>
                        </HStack>
                    </VStack>
                </HStack>
            </MarginStack>
            <Text width='100%' backgroundColor='#CCC' textAlign='center' padding='5px'>
                University of Washington | &copy; 2022 Theta Tau Theta Beta Chapter
            </Text>
        </VStack>
    )
}


export async function getStaticProps() {

}