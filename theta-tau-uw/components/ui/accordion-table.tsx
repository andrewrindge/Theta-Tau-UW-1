import {
    Stack,
    Flex,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    useDisclosure
} from "@chakra-ui/react";

interface Props {
    children: React.ReactNode
    title: string
}

export default function AccordionTable({ children, title }: Props) {
    const { onToggle } = useDisclosure()
    return (
        <>
            <Stack paddingBottom='20px'>
                <AccordionItem
                    justifyContent='space-between'
                    border='1px solid #8B0000'
                // borderRadius='5px'=
                >
                    <AccordionButton
                        backgroundColor='#7B0000'
                        transition='color 0.2s ease-in-out'
                        color='#FEFEFE'
                        _hover={{
                            backgroundColor: '#F8F8F8',
                            color: '#2F2F2F',
                            backgroundPosition: '100%, 0'
                        }}
                        onClick={onToggle}
                    >
                        <Flex flex={1} fontSize='20px' fontWeight={500}>
                            {title}
                        </Flex>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel backgroundColor='#FEFEFE'>
                        {children}
                    </AccordionPanel>
                </AccordionItem>
            </Stack>
        </>
    )
}

