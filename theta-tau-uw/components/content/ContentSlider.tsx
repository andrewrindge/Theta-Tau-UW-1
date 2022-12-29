import { ContentSliderProps } from "../../lib/types";
import { HStack, Stack, Text, IconButton, Icon, Grid, GridItem, Show, Hide, } from "@chakra-ui/react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { BsChevronDoubleRight } from 'react-icons/bs'
import { TouchEvent, useEffect, useState } from "react";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import Link from "next/link";
import router from 'next/router'
import MarginStack from "../MarginStack";

interface Props {
    data: ContentSliderProps[]
}

export default function ContentSlider({ data }: Props) {
    const [index, setIndex] = useState<number>(0)

    const htmlDescription = data.map((entry) => {
        return documentToHtmlString(entry.description)
    })

    const [carouselItems, setCarouselItems] = useState<ContentSliderProps[]>(data)
    const [touchPosition, setTouchPosition] = useState<number | null>(null)
    const [simulateChange, setSimulateChange] = useState(
        `linear-gradient(0deg, rgba(199,203,232,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%), 
                            url(${carouselItems[index].backgroundImage.image})`
    )

    useEffect(() => {
        setSimulateChange('#FFF')
        const timer = setTimeout(() => {
            setSimulateChange(`linear-gradient(0deg, rgba(199,203,232,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%), 
            url(${carouselItems[index].backgroundImage.image})`)
        }, 300)
        return () => clearTimeout(timer)
    }, [index])

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
        const touchDown = touchPosition

        if (touchDown === null) {
            return
        }

        const currentTouch = event.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            previous()
        }

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
                <Stack width='100%' direction={{ base: 'column', sm: 'row' }}>
                    <Stack
                        width='100%'
                        height={{ base: '400px', sm: '600px' }}
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
                        bgColor='linear-gradient(180deg, rgba(199,203,232,1) 0%, rgba(57,53,76,1) 0%, rgba(0,0,0,0) 42%)'
                        border='1px solid #EEE'
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        borderRadius='5px'
                    >
                        <HStack width='100%' justifyContent='space-between' position='absolute' top={{ base: '35%', md: '50%' }}>
                            <Stack padding='25px' onClick={() => previous()}>
                                <IconButton
                                    icon={<IoMdArrowBack color="#EEE" size='20px' />}
                                    backgroundColor='colors.200'
                                    _hover={{ backgroundColor: '#888' }}
                                    aria-label={`go back to image ${index}`}
                                    onClick={() => previous()}
                                />
                            </Stack>
                            <Stack padding='25px'>
                                <IconButton
                                    icon={<IoMdArrowForward color="#EEE" size='20px' />}
                                    _hover={{ backgroundColor: '#888' }}
                                    backgroundColor='colors.200'
                                    aria-label={`go to next image ${index}`}
                                    onClick={() => next()}
                                />
                            </Stack>
                        </HStack>
                        <Stack
                            color='#FFF'
                            padding='15px'
                            width='100%'
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
                            <Text fontWeight={800} fontSize={{ base: '26px', md: '35px' }}>
                                {carouselItems[index].title}
                            </Text>
                            <Text
                                fontWeight={500}
                                fontSize={{ base: '12px', md: '15px' }}
                                width='75%'
                                dangerouslySetInnerHTML={{ __html: htmlDescription[index] }}
                            />
                            {/* {carouselItems[index].data.text.description} */}
                            {carouselItems[index].button.map((button, index) => {
                                return (
                                    <Link key={index} href={button.link}>
                                        <HStack>
                                            <Text fontWeight={700} fontSize={{ base: '12px', md: '15px' }} textDecoration='underline'>
                                                {button.title}
                                            </Text>
                                            <Icon as={BsChevronDoubleRight} />
                                        </HStack>
                                    </Link>
                                )
                            })}
                        </Stack>
                        <HStack width='100%' justifyContent='center' paddingBottom='20px'>
                            {data.map((_, idx) => {
                                return (
                                    <Stack key={idx} height='8px' width='8px' borderRadius='full' backgroundColor={idx == index ? '#FFF' : '#333'} />
                                )
                            })}
                        </HStack>
                    </Stack>
                    <Show above='sm'>
                        <Stack width={{ base: '100%', sm: '45%', md: '30%' }} height={{ base: '250px', sm: '600px' }} justifyContent='flex-end'>
                            {/* <Text fontSize='18px' textAlign='center' fontWeight={900}>
                                STAY IN THE LOOP
                            </Text> */}
                            <Grid templateColumns={{ base: 'repeat(4, 1fr)', sm: '1fr' }} height='600px' paddingTop='20px' alignItems='center'>
                                {carouselItems.map((entry, idx) => {
                                    return (
                                        <GridItem
                                            key={idx}
                                            borderRight={index === idx ? '5px solid #006E44' : 'none'}
                                            textAlign='right'
                                            paddingRight={index === idx ? '10px' : '15px'}
                                            onMouseEnter={(event) => {
                                                event.currentTarget.style.cursor = 'pointer'
                                            }}
                                            onClick={() => {
                                                setIndex(idx)
                                            }}
                                            alignItems='space-around'
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
                                            <Stack borderBottom='2px solid #DDD' paddingTop='15px' />
                                        </GridItem>
                                    )
                                })}
                            </Grid>
                        </Stack>
                    </Show>
                    <Show below='sm'>
                        <Stack width={{ base: '100%', sm: '45%', md: '30%' }} height='115px' justifyContent='flex-end'>
                            <Grid templateColumns={{ base: 'repeat(4, 1fr)', sm: '1fr' }} alignItems='center'>
                                {carouselItems.map((entry, idx) => {
                                    return (
                                        <GridItem
                                            key={idx}
                                            borderBottom={index === idx ? '5px solid #006E44' : 'none'}
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
                </Stack>
            </Stack>
        </MarginStack >
    )
}