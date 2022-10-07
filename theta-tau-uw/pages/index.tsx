import { Stack, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import getNavItems, { getNavImages } from "../lib/getNavItems";
import { ContentSliderResponse, FinalLogoProps, FinalNavEntryItems } from "../lib/types";
import ContentSlider from '../components/content/ContentSlider'
import getContentSlider from "../lib/getContentSlider";
import { getFooterLogo } from "../lib/client";
import getFooterItems, { getFooterImages } from "../lib/getFooterItems";

interface Props {
    navData: FinalNavEntryItems[]
    logo: FinalLogoProps
    footerLogo: FinalLogoProps
    contentSliderData: ContentSliderResponse
}

export default function Home({ navData, logo, footerLogo, contentSliderData }: Props) {
    return (
        <Layout navData={navData} logo={logo} footerLogo={footerLogo} index={0}>
            <Stack height='100vh'>
                <ContentSlider data={contentSliderData} />
            </Stack>
        </Layout >
    )
}

export async function getStaticProps() {
    const navItems = await getNavItems()
    const navImage = await getNavImages()
    const footerLogo = await getFooterImages()
    const data = await getContentSlider('2Dqg7Ug8vRdmWR1IeJhTAu')

    const props: Props = {
        navData: navItems,
        logo: navImage,
        footerLogo: footerLogo,
        contentSliderData: data,
    }
    return { props }
}