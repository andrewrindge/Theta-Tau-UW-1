import { HStack, Stack, Text, Image, Grid, GridItem } from "@chakra-ui/react";
import { WhereWeGoProps } from "../../lib/types";

interface Props {
    data: WhereWeGoProps
}

export default function WhereWeGo({ data }: Props) {
    return (
        <Stack width='100%' alignItems='center' padding='25px 0px'>
            <Stack width='80%' padding='25px 0px'>
                <Text fontSize='36px' fontWeight={700}>
                    {data.title}
                </Text>
                <Grid
                    templateColumns={{
                        base: '1fr',
                        md: 'repeat(2, 1fr)'
                    }}
                    gap='20px'
                >
                    {data.companies.map((entry, index) => (
                        <GridItem key={index} padding='15px 5px'>
                            <HStack gap='20px'>
                                <Stack flex={1} alignItems='flex-end'>
                                    <Image
                                        src={entry.image.src}
                                        alt={entry.image.alt}
                                        objectFit='contain'
                                        boxSize='50%'
                                    />
                                </Stack>
                                <Stack flex={2} padding='10px 25px' borderLeft='3px solid #CFCFCF' overflow='hidden'>
                                    {entry.jobPosition.map((entry, index) => (
                                        <Text
                                            key={index}
                                            fontSize={{ base: '13px', sm: '14px', lg: '16px' }}
                                            fontWeight={600}
                                        >
                                            {entry}
                                        </Text>
                                    ))}
                                </Stack>
                            </HStack>
                        </GridItem>
                    ))}
                </Grid>
            </Stack>
        </Stack>
    )
}
