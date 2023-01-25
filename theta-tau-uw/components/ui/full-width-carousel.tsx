import { HStack, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAcademicQuarter, RushMessage } from "../../lib/hooks/useAcademicQuarter";
import { useCarouselPosition } from "../../lib/hooks/useCarouselPosition";
import { FullWidthCarouselProps } from "../../lib/types";
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';

interface Props {
    data: FullWidthCarouselProps
}

export default function FullWidthCarousel({ data }: Props) {
    const [quarter] = useAcademicQuarter()
    const [quarterAndYear, setQuarterAndYear] = useState('')

    const { position, methods: { handleLeftClick, handleRightClick, onClick } } = useCarouselPosition({
        children: data.fields,
        debounce: 500
    })

    useEffect(() => {
        setQuarterAndYear((() => {
            switch (quarter) {
                case RushMessage.THANK_YOU_MESSAGE:
                    return 'Thank you for an amazing rush cycle!'
                default:
                    return `${quarter} ${new Date().getFullYear()} Rush`
            }
        })())
    }, [quarter])

    return (
        <Stack width='100%' alignItems='center'>
            <Stack width='80%' padding='20px 0px'>
                <Text fontSize='48px' fontWeight={700} textAlign='center' borderBottom='1px solid #000'>
                    {quarterAndYear}
                </Text>
                <Stack direction={{ base: 'column', md: 'row' }}>
                    <Stack flex={1} justifyContent='center'>
                        <Text fontSize='18px' fontWeight={700}>Genereal Information</Text>
                        <Stack>
                            {data.fields.map((entry, index) => (
                                <Stack
                                    key={index}
                                    padding='5px'
                                    borderRadius='5px'
                                    borderBottom='2px solid #E3E6E9'
                                    noOfLines={3}
                                    tabIndex={0}
                                    backgroundColor={position === index ? 'colors.900' : 'transparent'}
                                    color={position === index ? 'white' : 'black'}
                                    _hover={{
                                        cursor: 'pointer',
                                        backgroundColor: position === index ? '' : '#F3F6F9',
                                        color: position === index ? '' : '#000'
                                    }}

                                    onClick={(event) => {
                                        onClick(event, index)
                                    }}

                                    onKeyPress={(event) => {
                                        event.key === 'Enter' && onClick(event, index)
                                    }}
                                >
                                    <Text fontSize='16px' padding='0px 5px' fontWeight={600}>{entry.title}</Text>
                                    <Text fontSize='14px' padding='0px 5px' fontWeight={400}>{entry.description}</Text>
                                </Stack>
                            ))}
                        </Stack>
                    </Stack>
                    <Stack flex={4} alignItems='center' justifyContent='center'>
                        <Image
                            src={data.fields[position].image.src}
                            alt={data.fields[position].image.alt}
                            boxSize='90%'
                            objectFit='contain'
                        />
                        <HStack justifyContent='space-around' width='20%'>
                            <IconButton
                                aria-label='Go left in carousel'
                                onClick={handleLeftClick}
                                icon={<IoMdArrowBack size='25px' />}
                            />
                            <IconButton
                                aria-label='Go right in carousel'
                                onClick={handleRightClick}
                                icon={<IoMdArrowForward size='25px' />}
                            />
                        </HStack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack >
    )
}