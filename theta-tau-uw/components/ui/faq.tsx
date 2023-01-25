import { Stack, Accordion, Text } from "@chakra-ui/react";
import AccordionTable from "./accordion-table";
import { useRouter } from "next/router";
import Link from "next/link";

export default function FAQ() {
    const router = useRouter();

    const DEFAULT_INDEX = 0;
    const faqs = [
        {
            title: "FAQ 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius"
        },
        {
            title: "FAQ 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius"
        },
        {
            title: "FAQ 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius"
        }
    ]
    return (
        <Stack width='100%' alignItems='center' gap={10} backgroundColor='#8B0000' padding='15px'>
            <Text color='#F8F8F8' fontSize='48px' fontWeight={500} height='100%'>
                FAQ
            </Text>
            <Stack width='80%'>
                <Accordion
                    allowMultiple
                    defaultIndex={[DEFAULT_INDEX]}
                >
                    {faqs.map((entry, index) => (
                        <AccordionTable key={index} title={entry.title}>
                            <Text fontWeight={500} fontSize='18px'>{entry.description}</Text>
                        </AccordionTable>
                    ))}
                </Accordion>
                <Stack color='#F8F8F8'>
                    <Text fontSize='16px' fontWeight={500}>
                        Can't find your answers? Check out our {' '}
                        <em style={{ borderBottom: '1px solid #F8F8F8' }}>
                            <Link href='/faq'>
                                FAQ Page
                            </Link>
                        </em>
                    </Text>
                </Stack>
            </Stack>
        </Stack>
    )
}