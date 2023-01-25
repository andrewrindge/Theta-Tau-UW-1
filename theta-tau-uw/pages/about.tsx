import { Stack, Text } from "@chakra-ui/react";
import Layout from "../components/utils/Layout";
import { FinalNavEntryItems, FinalLogoProps, SocialMediaLinks, ImageOverlayTextBox, LargeInformationBannerTestProps, StatsBarProps, WhereWeGoProps } from "../lib/types";
import getNavItems, { getNavImages } from '../lib/getNavItems'
import { getFooterImages } from "../lib/getFooterItems";
import getSocialMediaLinks from "../lib/getSocialMediaLinks";
import ImageOverlayWithQuote from "../components/ui/image-overlay-with-quote";
import { getAboutPage } from "../lib/getPageContent/getAboutPage";
import LargeInformationBanner from "../components/ui/large-information-banner";
import StatsBar from "../components/ui/stats-bar";
import WhereWeGo from "../components/ui/where-we-go";
import SocialMediaBanner from "../components/ui/social-media-banner";

interface Props {
    navData: FinalNavEntryItems[]
    logo: FinalLogoProps
    footerLogo: FinalLogoProps
    socialMediaLinks: SocialMediaLinks[]
    imageOverlayTextBox: ImageOverlayTextBox
    largeInformationBanner: LargeInformationBannerTestProps[],
    statsBar: StatsBarProps,
    whereWeGo: WhereWeGoProps
}


export default function About({ ...props }: Props) {

    const { navData, logo, footerLogo, socialMediaLinks } = props
    const layoutProps = { navData, logo, footerLogo, socialMediaLinks }

    return (
        <Layout {...layoutProps} index={1}>
            <ImageOverlayWithQuote data={props.imageOverlayTextBox} />
            {props.largeInformationBanner.map((entry, index) => (
                <LargeInformationBanner key={index} data={entry} />
            ))}
            <StatsBar data={props.statsBar} />
            <WhereWeGo data={props.whereWeGo} />
            <SocialMediaBanner data={socialMediaLinks} />
        </Layout>
    )
}

export async function getStaticProps() {
    const navItems = await getNavItems()
    const navImage = await getNavImages()
    const footerLogo = await getFooterImages()
    const socialMediaLinks = await getSocialMediaLinks()

    const { getImageOverlayTextBox, getLargeInformationBanner, getStatsBar, getWhereWeGo } = getAboutPage()
    const imageOverlayTextBox = (await getImageOverlayTextBox()) as ImageOverlayTextBox
    const largeInformationBanner = (await getLargeInformationBanner()) as LargeInformationBannerTestProps[]
    const statsBar = (await getStatsBar()) as StatsBarProps
    const whereWeGo = (await getWhereWeGo()) as WhereWeGoProps

    const props: Props = {
        navData: navItems,
        logo: navImage,
        footerLogo: footerLogo,
        socialMediaLinks: socialMediaLinks,
        imageOverlayTextBox: imageOverlayTextBox,
        largeInformationBanner: largeInformationBanner,
        statsBar: statsBar,
        whereWeGo: whereWeGo
    }
    return { props }
}