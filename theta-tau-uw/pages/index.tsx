import { Stack, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import getNavItems, { getNavImages } from "../lib/getNavItems";
import { ButtonData, ContentSliderData, ContentSliderResponse, FinalLogoProps, FinalNavEntryItems } from "../lib/types";
import ContentSlider from '../components/content/ContentSlider'
import getContentSlider from "../lib/getContentSlider";
import getButtonData from "../lib/getButtonData";
import { useEffect, useState } from "react";
import getTest from "../lib/getTest";

/**
 * @TODO
 * getContentSlider: results and string[] of @BannerArticleIDs
 * getBannerArticle: results and string[] of @ButtonIDs
 * getButtons: results
 * 
 * getContentSlider()
 * getBannerArticle(articleIDs: string[])
 * getButtons(buttonIDs: string[])
 * 
 */

interface Props {
    navData: FinalNavEntryItems[]
    logo: FinalLogoProps
    contentSliderData: ContentSliderData
    test: ContentSliderResponse
}


export default function Home({ navData, logo, contentSliderData, test }: Props) {
    const [data, setData] = useState<ContentSliderResponse>()
    const testing = async () => {
        const thing = await getTest('2Dqg7Ug8vRdmWR1IeJhTAu')
        console.log(thing)
    }
    testing()

    return (
        <Layout navData={navData} logo={logo} index={0}>
            <Stack>
                <Text>
                </Text>
                <ContentSlider data={contentSliderData} />
            </Stack>
        </Layout>
    )
}

export async function getStaticProps() {
    const navItems = await getNavItems()
    const navImage = await getNavImages()
    const data = await getContentSlider('2Dqg7Ug8vRdmWR1IeJhTAu')
    const test = await getTest('2Dqg7Ug8vRdmWR1IeJhTAu')

    const props: Props = {
        navData: navItems,
        logo: navImage,
        contentSliderData: data,
        test: test
    }
    return { props }
}