import Layout from "../components/utils/Layout";
import getNavItems, { getNavImages } from "../lib/getNavItems";
import {
    ContentSliderProps,
    LargeInformationBannerTestProps,
    FinalLogoProps,
    FinalNavEntryItems,
    SocialMediaLinks,
    CardProps,
    CommitteeGridProps
} from "../lib/types";
import { getFooterImages } from "../lib/getFooterItems";
import getSocialMediaLinks from "../lib/getSocialMediaLinks";
import { getHomePage } from "../lib/getPageContent/getHomePage";
import dynamic from 'next/dynamic'
import LargeInformationBanner from "../components/ui/large-information-banner";
import CardSlider from "../components/ui/card-slider";
import Card from "../components/ui/card";
import CommitteeGrid from "../components/ui/committee-grid";

interface Props {
    navData: FinalNavEntryItems[]
    logo: FinalLogoProps
    footerLogo: FinalLogoProps
    socialMediaLinks: SocialMediaLinks[]
    contentSliderData: ContentSliderProps[]
    largeInfoBanner: LargeInformationBannerTestProps
    sliderDeckCards: CardProps[]
    committeeGrid: CommitteeGridProps[]
}

export default function Home({ ...props }: Props) {
    const ContentSlider = dynamic(() => import('../components/ui/news-carousel'))

    const { navData, logo, footerLogo, socialMediaLinks } = props
    const layoutProps = { navData, logo, footerLogo, socialMediaLinks }

    return (
        <Layout {...layoutProps} index={0}>
            <ContentSlider data={props.contentSliderData} />
            <CardSlider gap={32}>
                {props.sliderDeckCards.map((entry, index) => (
                    <Card data={entry} key={index} />
                ))}
            </CardSlider>
            <LargeInformationBanner data={props.largeInfoBanner} />
            <CommitteeGrid data={props.committeeGrid} />
        </Layout >
    )
}

export async function getStaticProps() {
    const navItems = await getNavItems()
    const navImage = await getNavImages()
    const footerLogo = await getFooterImages()
    const socialMediaLinks = await getSocialMediaLinks()

    const { getContentSlider, getLargeInformationBanner, getSliderDeckCards, getCommitteeGrid } = getHomePage()
    const contentSlider = await getContentSlider()
    const largeInfoBanner = (await getLargeInformationBanner()) as LargeInformationBannerTestProps
    const sliderDeckCards = (await getSliderDeckCards()) as CardProps[]
    const committeeGrid = (await getCommitteeGrid()) as any

    const props: Props = {
        navData: navItems,
        logo: navImage,
        footerLogo: footerLogo,
        socialMediaLinks: socialMediaLinks,
        contentSliderData: contentSlider,
        largeInfoBanner: largeInfoBanner,
        sliderDeckCards: sliderDeckCards,
        committeeGrid: committeeGrid
    }
    return { props }
}