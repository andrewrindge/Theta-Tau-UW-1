import { Stack, Text, Image, HStack, Button, Collapse } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

interface Props {
    id: number;
    name: string;
    major: string;
    committee: string;
    profile: {
        src: string;
        alt: string;
    };

}

export default function MemberCard(data: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isOpenFirst, setIsOpenFirst] = useState<boolean>(isOpen)
    const [isOpenSecond, setIsOpenSecond] = useState<boolean>(!isOpen)

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setIsOpenSecond(!isOpenSecond)
            }, 500)
            setIsOpenFirst(!isOpenFirst)
            return () => clearTimeout(timer)
        } else {
            const timer = setTimeout(() => {
                setIsOpenFirst(!isOpenFirst)
            }, 500)
            setIsOpenSecond(!isOpenSecond)
            return () => clearTimeout(timer)
        }
    }, [isOpen])

    return (
        <Stack
            align="center"
            rounded="lg"
            h="380px"
            position="relative"
        >
            <Collapse in={isOpenFirst}>
                <Image
                    src={data.profile.src}
                    alt={data.profile.alt}
                    objectFit="cover"
                    w="250px"
                    h='200px'
                    transition='1.3s'
                />
            </Collapse>
            <Stack alignItems='center' w="100%">
                <Text fontWeight="bold" fontSize="md">
                    {data.name}
                </Text>
                <Text fontWeight="bold" fontSize="md">
                    {data.major}
                </Text>
            </Stack>
            <Collapse in={isOpenSecond} >
                <Stack alignItems="center" w="100%" padding='10px' maxHeight='300px' overflow='scroll'>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quia voluptatem unde reprehenderit enim labore, impedit facilis? Dolor, voluptatem commodi.
                    </Text>
                </Stack>
            </Collapse>
            <HStack position="absolute" bottom={0} width='100%' justifyContent='space-around'>
                <Stack><Text fontSize={{ base: '10px', sm: '12px' }}>{data.committee}</Text></Stack>
                <HStack>
                    <Button
                        onClick={() => {
                            setIsOpen(!isOpen)
                        }}
                        backgroundColor="transparent"
                        color="#000"
                    >
                        <Text fontSize={{ base: '10px', sm: '12px' }}>More</Text>
                        {isOpen ? <FaCaretUp color="#000" /> : <FaCaretDown color="#000" />}
                    </Button>
                </HStack>
            </HStack>
        </Stack >
    )
}
