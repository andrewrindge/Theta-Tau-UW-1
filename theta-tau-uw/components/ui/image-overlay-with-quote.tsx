import { Stack, Text } from "@chakra-ui/react";
import { ImageOverlayTextBox } from "../../lib/types";

interface Props {
    data: ImageOverlayTextBox
}

export default function ImageOverlayWithQuote({ data }: Props) {
    return (
        <Stack
            width='100%'
            height='350px'
            backgroundImage={data.image.src}
            textAlign='center'
            justifyContent='center'
        >
            {data.text.map((entry, index) => (
                <Text key={index} fontSize={{ base: '14px', sm: '16px', md: '20px' }} fontWeight={600} fontStyle='italic'>
                    {entry}
                </Text>
            ))}
        </Stack>
    )
}