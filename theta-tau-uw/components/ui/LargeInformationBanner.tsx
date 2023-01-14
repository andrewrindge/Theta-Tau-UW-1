import { Button, Image, Stack, Text } from '@chakra-ui/react'
import { LargeInformationBannerTestProps } from '../../lib/types'
import { useRouter } from 'next/router'
import MarginStack from '../utils/MarginStack'

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
        >
            <MarginStack>
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    width={{ base: '100%', md: '85%' }}
                >
                    <Stack
                        width='100%'
                        height='inherit'
                        justifyContent={data.button ? 'space-between' : 'center'}
                        padding='15px'
                        flex={1}
                        border='1px solid #000'
                    >
                        <Text fontSize='36px' fontWeight={700}>
                            {data.title}
                        </Text>
                        <Text
                            fontWeight={500}
                            fontSize='16px'
                            textAlign='justify'
                        >
                            {data.description}
                        </Text>
                        {data.button && (
                            <Button
                                fontSize='18px'
                                padding='20px'
                                backgroundColor='#FFF'
                                border='1px solid #000'
                                borderRadius='10px'
                                width='30%'
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
            </MarginStack>
        </Stack>
    )
}