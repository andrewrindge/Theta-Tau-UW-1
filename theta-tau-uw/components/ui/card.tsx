import { Stack, Text, Image, Button } from "@chakra-ui/react";

export default function Card() {
    return (
        <Stack width='100%' height='500px'>
            <Stack border='1px solid #000' width='100%' height='100%'>
                <Image
                    src='https://i.ibb.co/LZZ4DmD/momomomomo-1.jpg'
                    objectFit='cover'
                />
                <Stack padding='10px'>
                    <Text fontSize='22px' fontWeight={600}>Lorem Ipsum</Text>
                    <Text noOfLines={4}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores et voluptas sed placeat magni quam asperiores vitae nulla cupiditate. Ratione maiores vitae velit in id delectus, sunt dolore, officiis obcaecati perspiciatis aspernatur! Fugiat, nisi incidunt?</Text>
                </Stack>
                <Stack padding='5px 15px' alignItems='flex-end'>
                    <Button width='fit-content'>See More</Button>
                </Stack>
            </Stack>
        </Stack>
    )
}