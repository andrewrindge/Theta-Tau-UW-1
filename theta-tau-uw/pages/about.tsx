import { Stack, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { FinalNavEntryItems, FinalLogoProps, ContentSliderResponse } from "../lib/types";
import getNavItems, { getNavImages } from '../lib/getNavItems'
import { getFooterImages } from "../lib/getFooterItems";


interface Props {
    navData: FinalNavEntryItems[]
    logo: FinalLogoProps
    footerLogo: FinalLogoProps
}


export default function About({ navData, logo, footerLogo }: Props) {
    return (
        <Layout navData={navData} logo={logo} footerLogo={footerLogo} index={1}>
            <Stack>
                <Text>
                    Lorem ipsum dolor sit amet.
                </Text>
            </Stack>
        </Layout>
    )
}

export async function getStaticProps() {
    const navItems = await getNavItems()
    const navImage = await getNavImages()
    const footerLogo = await getFooterImages()

    const props: Props = {
        navData: navItems,
        logo: navImage,
        footerLogo: footerLogo,
    }
    return { props }
}