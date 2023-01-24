import { Image, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAcademicQuarter, RushMessage } from "../../lib/hooks/useAcademicQuarter";

export default function FullWidthCarousel() {
    const [quarter] = useAcademicQuarter()
    const [quarterAndYear, setQuarterAndYear] = useState('')

    const tempData = [
        { title: 'Lorem Ipsum', description: 'Lorem Ipsum' },
        { title: 'Lorem Ipsum', description: 'Lorem Ipsum' },
        { title: 'Lorem Ipsum', description: 'Lorem Ipsum' }
    ]

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
                <Text fontSize='48px' fontWeight={700} textAlign='center'>
                    {quarterAndYear}
                </Text>
                <Stack direction={{ base: 'column', md: 'row' }}>
                    <Stack flex={1}>
                        <Text fontSize='18px' fontWeight={500}>Genereal Information</Text>
                        <Stack>
                            {tempData.map((entry, index) => (
                                <Stack key={index} borderBottom='2px solid #E3E6E9'>
                                    <Text fontSize='16px' fontWeight={600}>{entry.title}</Text>
                                    <Text fontSize='14px' fontWeight={400}>{entry.description}</Text>
                                </Stack>
                            ))}
                        </Stack>
                    </Stack>
                    <Stack flex={4}>
                        <Image

                        />
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}