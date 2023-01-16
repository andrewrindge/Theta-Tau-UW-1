import { Stack } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { FinalNavEntryItems, FinalLogoProps, SocialMediaLinks } from "../../lib/types";
import Head from "next/head";


interface Props {
    navData: FinalNavEntryItems[]
    logo: FinalLogoProps
    footerLogo: FinalLogoProps
    socialMediaLinks: SocialMediaLinks[]
    children: ReactNode
    index: number
}

export default function Layout({ navData, logo, footerLogo, children, index, socialMediaLinks }: Props) {
    const title = usePageTitle()
    return (
        <Stack fontFamily='Avenir Next, Helvetica, Arial'>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='description' content='Welcome to the official Theta Tau Theta Beta Chapter website at the University of Washington' />
                <meta name="keywords" content="theta tau, uw, fraternity" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta property="og:title" content="Theta Tau Theta Beta Chapter @ the University of Washington" />
                <meta property="og:description" content="Welcome to the official Theta Tau Theta Beta Chapter website at the University of Washington" />
                <meta property="og:image" content="https://example.com/image.jpg" />
            </Head>
            <Navbar navData={navData} logo={logo} index={index} />
            {children}
            <Footer navData={navData} logo={footerLogo} socialMediaLinks={socialMediaLinks} />
        </Stack>
    )
}