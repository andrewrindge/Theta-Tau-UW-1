import { Stack } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";
import getNavItems, { FinalNavEntryItems } from "../lib/getNavItems";

interface Props {
    navData: FinalNavEntryItems[]
    children: ReactNode
}

export default function Layout({ navData, children }: Props) {
    return (
        <Stack>
            <Navbar navData={navData} />
            {children}
            <Footer />
        </Stack>
    )
}