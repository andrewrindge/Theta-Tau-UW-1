import { Stack } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <Stack>
            <Navbar />
            {children}
            <Footer />
        </Stack>
    )
}

// const Layout = ({ children }) => {
//     return (
//         <div className="content">
//             <Navbar />
//             {children}
//             <Footer />
//         </div>
//     )
// }