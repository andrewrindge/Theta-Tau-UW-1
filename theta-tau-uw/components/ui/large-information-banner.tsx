import { Button, Image, Stack, Text } from '@chakra-ui/react'
import { LargeInformationBannerTestProps } from '../../lib/types'
import { useRouter } from 'next/router'

interface Props {
    data: LargeInformationBannerTestProps
}

export default function LargeInformationBanner({ data }: Props) {
    const router = useRouter()

    return (
        <Stack
            height='100%'
            width='100%'
            padding='25px'
            paddingTop='100px'
            backgroundColor='colors.900'
            color='colors.800'
            alignItems='center'
        >
            <Stack
                direction={{ base: 'column', md: 'row' }}
                width={{ base: '100%', md: '85%' }}
            >
                <Stack
                    width='100%'
                    height='inherit'
                    justifyContent={data.button ? 'space-between' : 'center'}
                    padding='15px'
                    flex={1}
                    gap='25px'
                >
                    <Text fontSize='36px' fontWeight={700}>
                        {data.title}
                    </Text>
                    <Text
                        fontWeight={500}
                        fontSize='16px'
                        textAlign='justify'
                        width='90%'
                    >
                        {data.description}
                    </Text>
                    {data.button && (
                        <Button
                            fontSize={{ base: '15px', md: '18px' }}
                            padding='20px'
                            backgroundColor='colors.900'
                            border='1px solid #EDEAB5'
                            borderRadius='10px'
                            _hover={{
                                backgroundColor: 'colors.800',
                                color: 'colors.900'
                            }}
                            width='fit-content'
                            onClick={() => router.push(data.button?.link as string)}
                        >
                            {data.button.title}
                        </Button>
                    )}
                </Stack>
                <Stack
                    flex={1}
                    justifyContent='center'
                >
                    <Image
                        src={data.image.src}
                        alt={data.image.alt}
                        borderRadius='5px'
                        boxShadow='1px 1px 5px #888'
                        objectFit='cover'
                    />
                </Stack>
            </Stack>

        </Stack>
    )
}