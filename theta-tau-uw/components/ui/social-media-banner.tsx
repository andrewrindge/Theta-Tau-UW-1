import { HStack, Icon, IconButton, Stack, Text } from "@chakra-ui/react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IconType } from "react-icons/lib/cjs/iconBase";
import { useRouter } from "next/router";
import { SocialMediaLinks } from "../../lib/types";

interface Props {
    data: SocialMediaLinks[]
}

export default function SocialMediaBanner({ data }: Props) {
    const router = useRouter()
    return (
        <Stack width='100%' alignItems='center' backgroundColor='#F3F6F9'>
            <Stack
                width='80%'
                height='250px'
                direction={{ base: 'column', md: 'row' }}
                alignItems='center'
                justifyContent='center'
            >
                <Text
                    textAlign='center'
                    width='100%'
                    fontSize={{
                        base: '24px',
                        sm: '28px',
                        md: '32px',
                        lg: '36px',
                        xl: '48px'
                    }}
                    fontWeight={700}
                >
                    Find us on Social Media
                </Text>
                <HStack width='50%' justifyContent='space-evenly'>
                    {data.map((entry, index) => {
                        const IconImage = (() => {
                            switch (entry.type) {
                                case 'facebook':
                                    // return <FaFacebookSquare size='30px' />
                                    return (
                                        <IconButton
                                            icon={<FaFacebookSquare fontSize='45px' />}
                                            aria-label={`Go to ${entry.type}`}
                                            onClick={() => window.open(entry.url, '_blank')}
                                        />
                                    )
                                case 'instagram':
                                    // return <FaInstagramSquare size='30px' />
                                    return (
                                        <IconButton
                                            icon={<FaInstagramSquare fontSize='45px' />}
                                            aria-label={`Go to ${entry.type}`}
                                            onClick={() => window.open(entry.url, '_blank')}
                                        />
                                    )
                                case 'mail':
                                    return (
                                        <a
                                            href={`mailto:${entry.url}`}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <IconButton
                                                icon={<GrMail fontSize='45px' />}
                                                aria-label={`Send email to Theta Tau`}
                                                size='lg'
                                            />
                                        </a>
                                    )
                                default:
                                    return (
                                        <a
                                            href={`mailto:${entry.url}`}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <IconButton
                                                icon={<GrMail fontSize='45px' />}
                                                aria-label={`Send email to Theta Tau`}
                                            />
                                        </a>
                                    )
                            }
                        })()

                        return (
                            <Stack key={index}>
                                {IconImage}
                            </Stack>
                        )
                    })}
                </HStack>
            </Stack>
        </Stack>
    )
}