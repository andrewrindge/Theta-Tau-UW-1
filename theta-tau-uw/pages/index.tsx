import { Stack, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import getNavItems, { getNavImages } from "../lib/getNavItems";
import { ContentSliderResponse, FinalLogoProps, FinalNavEntryItems } from "../lib/types";
import ContentSlider from '../components/content/ContentSlider'
import getContentSlider from "../lib/getContentSlider";

interface Props {
    navData: FinalNavEntryItems[]
    logo: FinalLogoProps
    contentSliderData: ContentSliderResponse
}

export default function Home({ navData, logo, contentSliderData }: Props) {
    return (
        <Layout navData={navData} logo={logo} index={0}>
            <Stack height='100vh'>
                <ContentSlider data={contentSliderData} />
            </Stack>
        </Layout >
    )
}

export async function getStaticProps() {
    const navItems = await getNavItems()
    const navImage = await getNavImages()
    const data = await getContentSlider('2Dqg7Ug8vRdmWR1IeJhTAu')

    const props: Props = {
        navData: navItems,
        logo: navImage,
        contentSliderData: data,
    }
    return { props }
}