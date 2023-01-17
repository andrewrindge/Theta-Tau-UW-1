import { Stack, Text } from "@chakra-ui/react";
import Layout from "../components/utils/Layout";
import { FinalNavEntryItems, FinalLogoProps, ContentSliderResponse, SocialMediaLinks, ImageOverlayTextBox, LargeInformationBannerTestProps, StatsBarProps } from "../lib/types";
import getNavItems, { getNavImages } from '../lib/getNavItems'
import { getFooterImages } from "../lib/getFooterItems";
import getSocialMediaLinks from "../lib/getSocialMediaLinks";
import ImageOverlayWithQuote from "../components/ui/image-overlay-with-quote";
import { getAboutPage } from "../lib/getPageContent/getAboutPage";
import LargeInformationBanner from "../components/ui/large-information-banner";
import StatsBar from "../components/ui/stats-bar";

interface Props {
    navData: FinalNavEntryItems[]
    logo: FinalLogoProps
    footerLogo: FinalLogoProps
    socialMediaLinks: SocialMediaLinks[]
    imageOverlayTextBox: ImageOverlayTextBox
    largeInformationBanner: LargeInformationBannerTestProps[],
    statsBar: StatsBarProps
}


export default function About({
    navData,
    logo,
    footerLogo,
    socialMediaLinks,
    imageOverlayTextBox,
    largeInformationBanner,
    statsBar
}: Props) {
    console.log(statsBar)
    return (
        <Layout navData={navData} logo={logo} footerLogo={footerLogo} socialMediaLinks={socialMediaLinks} index={1}>
            <ImageOverlayWithQuote data={imageOverlayTextBox} />
            {largeInformationBanner.map((entry, index) => (
                <LargeInformationBanner key={index} data={entry} />
            ))}
            <StatsBar data={statsBar} />
        </Layout>
    )
}

export async function getStaticProps() {
    const navItems = await getNavItems()
    const navImage = await getNavImages()
    const footerLogo = await getFooterImages()
    const socialMediaLinks = await getSocialMediaLinks()

    const { getImageOverlayTextBox, getLargeInformationBanner, getStatsBar } = getAboutPage()
    const imageOverlayTextBox = (await getImageOverlayTextBox()) as ImageOverlayTextBox
    const largeInformationBanner = (await getLargeInformationBanner()) as LargeInformationBannerTestProps[]
    const statsBar = (await getStatsBar()) as StatsBarProps

    const props: Props = {
        navData: navItems,
        logo: navImage,
        footerLogo: footerLogo,
        socialMediaLinks: socialMediaLinks,
        imageOverlayTextBox: imageOverlayTextBox,
        largeInformationBanner: largeInformationBanner,
        statsBar: statsBar
    }
    return { props }
}