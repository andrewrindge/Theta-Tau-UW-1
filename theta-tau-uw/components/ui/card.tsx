import { Stack, Text, Image, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { CardProps } from "../../lib/types";

interface Props {
    data: CardProps
}

export default function Card({ data }: Props) {
    const router = useRouter()
    return (
        <Stack width='100%' height='fit-content' padding='10px'>
            <Stack border='1px solid #8F8F8F' width='100%' height='100%' borderRadius='10px'>
                <Image
                    src={data.image.url}
                    alt={data.image.alt}
                    objectFit='cover'
                    borderTopLeftRadius='10px'
                    borderTopRightRadius='10px'
                />
                <Stack padding='10px'>
                    <Text fontSize='22px' fontWeight={600}>{data.title}</Text>
                    <Text noOfLines={4}>{data.description}</Text>
                </Stack>
                <Stack padding='5px 15px' alignItems='flex-end'>
                    <Button width='fit-content' onClick={() => router.push(data.button.link)}>{data.button.title}</Button>
                </Stack>
            </Stack>
        </Stack>
    )
}