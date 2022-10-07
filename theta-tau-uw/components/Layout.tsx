import { Stack } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";
import { FinalNavEntryItems, FinalLogoProps } from "../lib/types";


interface Props {
    navData: FinalNavEntryItems[]
    logo: FinalLogoProps
    children: ReactNode
    index: number
}

export default function Layout({ navData, logo, children, index }: Props) {
    return (
        <Stack>
            <Navbar navData={navData} logo={logo} index={index} />
            {children}
            <Footer />
        </Stack>
    )
}