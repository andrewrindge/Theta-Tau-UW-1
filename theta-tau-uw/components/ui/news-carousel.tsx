import { ContentSliderProps } from "../../lib/types";
import { HStack, Stack, Text, IconButton, Icon, Grid, GridItem, Show } from "@chakra-ui/react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { BsChevronDoubleRight } from 'react-icons/bs'
import { TouchEvent, useEffect, useState } from "react";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import Link from "next/link";
import router from 'next/router'
import MarginStack from "../utils/MarginStack";
import useScreenWidth from '../../lib/useScreenWidth'

interface Props {
    data: ContentSliderProps[]
}

export default function ContentSlider({ data }: Props) {
    const [index, setIndex] = useState<number>(0)

    const { screenSize } = useScreenWidth()
    const gradient = `linear-gradient(0deg, rgba(0,0,0,0.85) ${screenSize < 768 ? '65' : '40'}%, rgba(255,255,255,0) 90%)`
    const htmlDescription = data.map((entry) => {
        return documentToHtmlString(entry.description)
    })

    const [carouselItems, setCarouselItems] = useState<ContentSliderProps[]>(data)
    const [touchPosition, setTouchPosition] = useState<number | null>(null)
    const [simulateChange, setSimulateChange] = useState(`${gradient}, url(${carouselItems[index].backgroundImage.image})`)

    useEffect(() => {
        setSimulateChange('#F8F8F8')
        const timer = setTimeout(() => {
            setSimulateChange(`${gradient}, url(${carouselItems[index].backgroundImage.image})`)
        }, 300)
        return () => clearTimeout(timer)
    }, [index, screenSize])

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index === carouselItems.length - 1 ? 0 : index + 1)
        }, 30000);

        return () => clearInterval(interval);
    }, [index])

    const handleTouchStart = (event: TouchEvent) => {
        const touchDown = event.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (event: TouchEvent) => {
        event.preventDefault()
        const touchDown = touchPosition

        if (touchDown === null) return

        const currentTouch = event.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) next()
        if (diff < -5) previous()

        setTouchPosition(null)
    }

    const next = () => {
        if (carouselItems) {
            if (index + 1 < carouselItems.length) {
                setIndex(index + 1)
            } else {
                setIndex(0)
            }
        }
    }

    const previous = () => {
        if (carouselItems) {
            if (index - 1 >= 0) {
                setIndex(index - 1)
            } else {
                setIndex(carouselItems.length - 1)
            }
        }
    }

    return (
        <MarginStack>
            <Stack width='100%' alignItems='center'>
                <Stack width='100%' direction={{ base: 'column', md: 'row' }}>
                    <Stack
                        width='100%'
                        height={{ base: '380px', sm: '425px', md: '500px' }}
                        alignItems='flex-start'
                        justifyContent='flex-end'
                        overflow='hidden'
                        position='relative'
                        background={simulateChange}
                        transition='0.3s'
                        opacity={simulateChange === '#FFF' ? 0 : 1}
                        backgroundSize='cover'
                        backgroundPosition='center'
                        backgroundRepeat='no-repeat'
                        backgroundBlendMode='normal'
                        bgColor={gradient}
                        border='1px solid #EEE'
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        borderRadius='5px'
                    >
                        <HStack width='100%' justifyContent='space-between' position='absolute' top='51%'>
                            <Stack padding={{ base: '5px', sm: '10px', md: '20px' }}>
                                <IconButton
                                    icon={<IoMdArrowBack color="#EDEAB5" size='20px' />}
                                    backgroundColor='colors.900'
                                    _hover={{ backgroundColor: '#2B2B2B' }}
                                    aria-label={`go back to image ${index}`}
                                    onClick={() => previous()}
                                />
                            </Stack>
                            <Stack padding={{ base: '5px', sm: '10px', md: '20px' }}>
                                <IconButton
                                    icon={<IoMdArrowForward color="#EDEAB5" size='20px' />}
                                    _hover={{ backgroundColor: '#2B2B2B' }}
                                    backgroundColor='colors.900'
                                    aria-label={`go to next image ${index}`}
                                    onClick={() => next()}
                                />
                            </Stack>
                        </HStack>
                        <Stack alignItems='center'>
                            <Stack
                                color='#F8F8F8'
                                padding='15px'
                                width={{ base: '70%', sm: '75%', md: '80%', lg: '85%' }}
                                onMouseEnter={(event) => {
                                    event.currentTarget.style.paddingBottom = '20px'
                                    event.currentTarget.style.transition = '0.6s'
                                    event.currentTarget.style.cursor = 'pointer'
                                }}
                                onMouseLeave={(event) => {
                                    event.currentTarget.style.paddingBottom = '15px'
                                    event.currentTarget.style.transition = '0.6s'
                                }}
                                onClick={() => {
                                    router.push('/')
                                }}
                            >
                                <Text fontWeight={800} fontSize={{ base: '22px', sm: '26px', md: '35px' }} noOfLines={2}>
                                    {carouselItems[index].title}
                                </Text>
                                <Text
                                    fontWeight={500}
                                    fontSize={{ base: '13px', sm: '14px', md: '15px' }}
                                    noOfLines={[5, 6, 5, 15]}
                                    width='75%'
                                    dangerouslySetInnerHTML={{ __html: htmlDescription[index] }}
                                />
                                {carouselItems[index].button.map((button, index) => {
                                    return (
                                        <Link key={index} href={button.link} legacyBehavior>
                                            <a>
                                                <HStack>
                                                    <Text fontWeight={700} fontSize={{ base: '12px', md: '15px' }} textDecoration='underline' justifySelf=''>
                                                        {button.title}
                                                    </Text>
                                                </HStack>
                                            </a>
                                        </Link>
                                    )
                                })}
                            </Stack>
                        </Stack>
                        <HStack width='100%' justifyContent='center' paddingBottom='20px'>
                            {data.map((_, idx) => {
                                return (
                                    <Stack key={idx} height='8px' width='8px' borderRadius='full' backgroundColor={idx == index ? '#FFF' : '#333'} />
                                )
                            })}
                        </HStack>
                    </Stack>
                    <Show above='md'>
                        <Stack width={{ base: '100%', sm: '45%', md: '30%' }} height={{ base: '250px', sm: '500px' }} justifyContent='flex-end'>
                            <Grid templateColumns={{ base: 'repeat(4, 1fr)', sm: '1fr' }} height='600px' paddingTop='20px' alignItems='center'>
                                {carouselItems.map((entry, idx) => {
                                    return (
                                        <GridItem
                                            key={idx}
                                            padding='15px'
                                            transition='0.3s'
                                            bgColor={index === idx ? '#8B0000' : '#F8F8F8'}
                                            color={index === idx ? '#FFF' : '#000'}
                                            height='100%'
                                            onMouseEnter={(event) => {
                                                event.currentTarget.style.cursor = 'pointer'
                                            }}
                                            onClick={() => {
                                                setIndex(idx)
                                            }}
                                            alignItems='center'
                                            borderBottom='2px solid #DDD'
                                        >
                                            <Text fontSize='12px' fontWeight={900}>
                                                {entry.title.toUpperCase()}
                                            </Text>
                                            <Text
                                                noOfLines={2}
                                                fontSize='12px'
                                                fontWeight={600}
                                                dangerouslySetInnerHTML={{ __html: htmlDescription[index] }}
                                            />
                                        </GridItem>
                                    )
                                })}
                            </Grid>
                        </Stack>
                    </Show>
                    <Show below='md'>
                        <Stack width={{ base: '100%', md: '30%' }} height='125px' justifyContent='flex-end'>
                            <Grid templateColumns={{ base: 'repeat(4, 1fr)', md: '1fr' }} alignItems='center' overflow='scroll'>
                                {carouselItems.map((entry, idx) => {
                                    return (
                                        <GridItem
                                            key={idx}
                                            borderBottom={index === idx ? '5px solid #8B0000' : 'none'}
                                            textAlign='left'
                                            paddingRight={index === idx ? '10px' : '15px'}
                                            onMouseEnter={(event) => {
                                                event.currentTarget.style.cursor = 'pointer'
                                            }}
                                            onClick={() => {
                                                setIndex(idx)
                                            }}
                                            minHeight={{ base: '120px', sm: '105px' }}
                                            borderRight='2px solid #DDD'
                                            padding='5px'
                                        >
                                            <Text fontSize='12px' fontWeight={900} noOfLines={2}>
                                                {entry.title.toUpperCase()}
                                            </Text>
                                            <Text
                                                noOfLines={2}
                                                fontSize='12px'
                                                fontWeight={600}
                                                dangerouslySetInnerHTML={{ __html: htmlDescription[index] }}
                                            />
                                        </GridItem>
                                    )
                                })}
                            </Grid>
                        </Stack>
                    </Show>
                </Stack>
            </Stack >
        </MarginStack >
    )
}