import { Text, Stack, Button, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import MarginStack from '../utils/MarginStack'
import { LargeBannerProps } from "../../lib/types";

interface Props {
    data: LargeBannerProps
}

export default function LargeInformationBanner({ data }: Props) {
    const router = useRouter()

    return (
        <Stack height='100%' width='100%' padding='25px' paddingTop='100px'>
            <MarginStack>
                <Stack width='100%' height='100%' alignItems='center'>
                    <Stack
                        direction={{ base: 'column-reverse', sm: data.reverse ? 'row-reverse' : 'row' }}
                        width={{ base: '100%', md: '85%' }}
                    >
                        <Stack
                            width='100%'
                            height='inherit'
                            justifyContent={data.button ? 'space-between' : 'center'}
                            padding='15px'
                            flex={1}
                        >
                            <Text fontSize={{ base: '22px', md: '30px', xl: '45px' }} fontWeight={700}>
                                {data.title}
                            </Text>
                            <Text
                                fontWeight={500}
                                fontSize={{ base: '15px', md: '16px', lg: '18px' }}
                                textAlign='justify'
                            >
                                {data.description}
                            </Text>
                            {data.button && (
                                <Button
                                    fontSize={{ base: '15px', lg: '18px' }}
                                    padding={{ base: '12px', sm: '15px', md: '20px' }}
                                    backgroundColor='#FFF'
                                    border='1px solid #000'
                                    borderRadius={{ base: '10px', md: '10px' }}
                                    width={{ base: '45%', sm: '75%', md: '50%', lg: '45%', xl: '30%' }}
                                    onClick={() => router.push(data.button?.url as string)}

                                >
                                    {data.button.text}
                                </Button>
                            )}
                        </Stack>
                        <Stack
                            flex={1}
                            alignItems={data.reverse ? 'flex-start' : 'flex-end'}
                            justifyContent='center'
                        >

                            <Image
                                src='https://i.ibb.co/cQ6HXPq/IMG-5678.jpg'
                                alt='Samoyed dog in the sun'
                                width={{ sm: '550px', md: '645px', lg: '410px' }}
                                borderRadius='5px'
                                boxShadow='1px 1px 5px #888'
                                objectFit='cover'
                            />
                        </Stack>
                    </Stack>
                </Stack>
            </MarginStack>
        </Stack >
    )
}

/**
 * https://i.ibb.co/4VStNNn/lp-image.jpg -- funny momo
 * https://i.ibb.co/cQ6HXPq/IMG-5678.jpg -- sunlight momo
 * https://i.ibb.co/9nzJ0Jm/IMG-0382-min.jpg -- camera momo
 * https://i.ibb.co/RByJtTG/IMG-0381-min.jpg -- camera momo looking away
 */