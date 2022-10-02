import { Stack } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";
import { FinalNavEntryItems } from "../lib/getNavItems";

interface Props {
    navData: FinalNavEntryItems[]
    children: ReactNode
    index: number
}

export default function Layout({ navData, children, index }: Props) {
    return (
        <Stack>
            <Navbar navData={navData} index={index} />
            {children}
            <Footer />
        </Stack>
    )
}