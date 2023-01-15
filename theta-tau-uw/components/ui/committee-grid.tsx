import { Grid, GridItem, Stack, VStack, Image, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import TitleDivider from "./title-divider";

export default function CommitteeGrid() {
    /**
     * Committees:
     * 1. Philanthropy
     * 2. Academic
     * 3. Brotherhood
     * 4. Marketing
     * 5. Professional Development
     * 6. Emerging Events
     * 7. Fundraising
     * 8. Rush
     */
    const temp = [
        'Philanthropy',
        'Academic',
        'Brotherhood',
        'Marketing',
        'Professional Development',
        'Emerging Events',
        'Fundraising',
        'Rush'
    ]
    const router = useRouter()
    return (
        <Stack width='100%' alignItems='center' padding='50px 0px'>
            <TitleDivider
                title={'Our Committees'}
                render={
                    <Button
                        onClick={() => router.push('/')}
                        fontSize={{ base: '13px', md: '16px' }}
                    >
                        View Committees
                    </Button>

                }
            />
            <Stack width='80%' padding='50px 0px'>
                <Grid
                    templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
                    gap='35px'
                >
                    {temp.map((entry, index) => (
                        <Link href='/about' tabIndex={index} key={index}>
                            <a href="">
                                <GridItem
                                    key={index}
                                    borderRadius='10px'
                                    _hover={{
                                        backgroundColor: '#F8F6F9',
                                        cursor: 'pointer'
                                    }}
                                    padding='35px'
                                >
                                    <VStack justifyContent='center' alignItems='center'>
                                        <Stack>
                                            <Image
                                                src='https://i.ibb.co/92C2BGF/IMG-4359.jpg'
                                                alt='momo eat the lettuce'
                                                objectFit='cover'
                                                boxSize='150px'
                                                borderRadius='full'
                                                boxShadow='2px 2px 8px 2px #2F2F2F '
                                            />
                                        </Stack>
                                        <Stack padding='10px'>
                                            <Text fontSize={{ base: '14px', md: '16px', lg: '18px' }} fontWeight={500}>{entry}</Text>
                                        </Stack>
                                    </VStack>
                                </GridItem>
                            </a>
                        </Link>
                    ))}
                </Grid>
            </Stack>
        </Stack>
    )
}