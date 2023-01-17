import { Grid, GridItem, ResponsiveValue, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useScreenSize from "../../lib/hooks/useScreenSize";
import { StatsBarProps } from "../../lib/types";

interface Props {
    data: StatsBarProps
}

export default function StatsBar({ data }: Props) {
    // const [{ width }] = useScreenSize() Bruh can window just be defined it's not that hard
    const [colSpan, setColSpan] = useState<ResponsiveValue<number | "auto">>('auto')
    const [width, setWidth] = useState(768)

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth))
    })

    useEffect(() => {
        if (width < 768) {
            setColSpan(2)
        } else {
            setColSpan('auto')
        }
    }, [width])
    return (
        <Stack width='100%' alignItems='center' padding='35px 0px' backgroundColor='#F3F6F9' color='colors.900'>
            <Grid
                templateColumns={{
                    base: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)'
                }}
                width='100%'
            >
                {data.stats.map((entry, index) => (
                    <GridItem
                        key={index}
                        textAlign='center'
                        colSpan={
                            index === data.stats.length - 1 ?
                                colSpan : 1
                        }
                        padding='30px'
                    >
                        <Stack>
                            <Text fontSize='72px' fontWeight={700}>
                                {entry.fields.number}
                            </Text>
                            <Text fontSize='24px' fontWeight={600}>
                                {entry.fields.description}
                            </Text>
                        </Stack>
                    </GridItem>
                ))}
            </Grid>
        </Stack>
    )
}