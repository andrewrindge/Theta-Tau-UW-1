import { Stack, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import getNavItems, { getNavImages } from "../lib/getNavItems";
import { BannerArticleData, ButtonData, ContentSliderData, ContentSliderResponse, FinalLogoProps, FinalNavEntryItems, Test } from "../lib/types";
import ContentSlider from '../components/content/ContentSlider'
import getContentSlider from "../lib/getContentSlider";
import getButtonData from "../lib/getButtonData";
import { useEffect, useState } from "react";
import getTest from "../lib/getTest";
import testGetContentSlider from "../lib/testGetContentSlider";
import getBannerArticle from "../lib/getBannerArticle";

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
    contentSliderData: ContentSliderResponse
}

export default function Home({ navData, logo, contentSliderData }: Props) {
    console.log(contentSliderData)
    return (
        <Layout navData={navData} logo={logo} index={0}>
            <Stack>
                <Text>
                </Text>
                <ContentSlider props={contentSliderData} />
            </Stack>
        </Layout>
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