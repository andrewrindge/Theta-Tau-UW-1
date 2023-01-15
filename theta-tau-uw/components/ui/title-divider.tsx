import { Stack, HStack, Button, Text } from "@chakra-ui/react"

interface Props {
    title: string
    render: React.ReactNode
}

export default function TitleDivider({ title, render }: Props) {
    return (
        <HStack
            width='90%'
            justifyContent='space-between'
            borderBottom={{ base: '3px solid #8B0000', md: '5px solid #8B0000' }}
        >
            <Stack
                transform='skew(5deg)'
                width='fit-content'
                backgroundColor='colors.900'
                borderRadius='10px'
                boxShadow={{
                    base: '3px 3px 0px 2px #EDEAB5',
                    md: '5px 5px 0px 5px #EDEAB5'
                }}
                padding='10px 45px'
                marginLeft='-20px'
            >
                <Text
                    fontSize={{ base: '18px', md: '32px', lg: '36px' }}
                    fontWeight={700}
                    transform='skew(-20deg)'
                    color='colors.100'
                >
                    {title}
                </Text>
            </Stack>
            <Stack>
                {render}
            </Stack>
        </HStack>
    )
}