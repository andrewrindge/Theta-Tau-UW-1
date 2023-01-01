import { Stack } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";
import { FinalNavEntryItems, FinalLogoProps, SocialMediaLinks } from "../../lib/types";


interface Props {
    navData: FinalNavEntryItems[]
    logo: FinalLogoProps
    footerLogo: FinalLogoProps
    socialMediaLinks: SocialMediaLinks[]
    children: ReactNode
    index: number
}

export default function Layout({ navData, logo, footerLogo, children, index, socialMediaLinks }: Props) {
    return (
        <Stack fontFamily='Avenir Next, Helvetica, Arial'>
            <Navbar navData={navData} logo={logo} index={index} />
            {children}
            <Footer navData={navData} logo={footerLogo} socialMediaLinks={socialMediaLinks} />
        </Stack>
    )
}