import { Grid, GridItem, Stack, VStack, Image, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CommitteeGridProps } from "../../lib/types";
import TitleDivider from "./title-divider";

interface Props {
    data: CommitteeGridProps[]
}

export default function CommitteeGrid({ data }: Props) {

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
                    {data.map((entry, index) => (
                        <Link href={`/about?committees=${entry.fields.url}`} key={index} legacyBehavior>
                            <a>
                                <GridItem
                                    key={index}
                                    borderRadius='10px'
                                    _hover={{
                                        backgroundColor: '#F8F6F9',
                                        cursor: 'pointer'
                                    }}
                                    padding={{ base: '10px', md: '20px', lg: '35px' }}
                                >
                                    <VStack justifyContent='center' alignItems='center'>
                                        <Stack>
                                            <Image
                                                src={entry.fields.image.url}
                                                alt={entry.fields.image.alt}
                                                objectFit='cover'
                                                boxSize='150px'
                                                borderRadius='full'
                                                boxShadow='2px 2px 8px 2px #2F2F2F '
                                            />
                                        </Stack>
                                        <Stack padding='10px'>
                                            <Text
                                                fontSize={{ base: '14px', md: '16px', lg: '18px' }}
                                                fontWeight={500}
                                                textAlign='center'
                                            >
                                                {entry.fields.title}
                                            </Text>
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