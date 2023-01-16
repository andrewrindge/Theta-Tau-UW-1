import { Stack, Text } from "@chakra-ui/react";
import Layout from "../components/utils/Layout";
import getNavItems, { getNavImages } from "../lib/getNavItems";
import { ContentSliderProps, LargeInformationBannerTestProps, FinalLogoProps, FinalNavEntryItems, LargeBannerProps, SocialMediaLinks, CardProps } from "../lib/types";
import getContentSlider from "../lib/getContentSlider";
import { getFooterImages } from "../lib/getFooterItems";
import getSocialMediaLinks from "../lib/getSocialMediaLinks";
import { getHomePage } from "../lib/getHomePage/getHomePage";
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
    welcomeBanner: LargeBannerProps
    largeInfoBanner: LargeInformationBannerTestProps
    sliderDeckCards: CardProps[]
    committeeGrid: any
}

export default function Home(
    {
        navData,
        logo,
        footerLogo,
        contentSliderData,
        socialMediaLinks,
        welcomeBanner,
        largeInfoBanner,
        sliderDeckCards,
        committeeGrid
    }: Props
) {
    const ContentSlider = dynamic(() => import('../components/ui/news-carousel'))

    return (
        <Layout navData={navData} logo={logo} footerLogo={footerLogo} socialMediaLinks={socialMediaLinks} index={0}>
            <ContentSlider data={contentSliderData} />
            <CardSlider gap={32}>
                {sliderDeckCards.map((entry, index) => (
                    <Card data={entry} key={index} />
                ))}
            </CardSlider>
            <LargeInformationBanner data={largeInfoBanner} />
            <CommitteeGrid />
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

    const welcomeBanner = {
        title: 'Welcome To The Club',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ullam fugiat accusantium consectetur voluptates deserunt minima culpa, perferendis tempora repellat autem similique! Corrupti natus, modi sed repellat perspiciatis accusantium debitis, ducimus dolor eum deleniti provident, molestias fugiat nobis voluptatibus soluta cupiditate aspernatur dignissimos quibusdam ex a. Aspernatur reiciendis autem accusantium.',
        button: {
            text: 'Learn More',
            url: '/membership'
        },
        image: {
            fields: {
                alt: 'Samoyed dog in the sun',
                image: {
                    fields: {
                        title: 'Samoyed dog in the sun',
                        file: {
                            url: 'https://i.ibb.co/cQ6HXPq/IMG-5678.jpg'
                        }
                    }
                }
            }
        },
        reverse: false
    } as LargeBannerProps

    const props: Props = {
        navData: navItems,
        logo: navImage,
        footerLogo: footerLogo,
        socialMediaLinks: socialMediaLinks,
        contentSliderData: contentSlider,
        welcomeBanner: welcomeBanner,
        largeInfoBanner: largeInfoBanner,
        sliderDeckCards: sliderDeckCards,
        committeeGrid: committeeGrid
    }
    return { props }
}