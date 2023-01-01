import { Stack, Text } from "@chakra-ui/react";
import Layout from "../components/utils/Layout";
import getNavItems, { getNavImages } from "../lib/getNavItems";
import { ContentSliderProps, ContentSliderResponse, FinalLogoProps, FinalNavEntryItems, LargeBannerProps, SocialMediaLinks } from "../lib/types";
// import ContentSlider from '../components/content/ContentSlider'
import getContentSlider from "../lib/getContentSlider";
import { getFooterImages } from "../lib/getFooterItems";
import getSocialMediaLinks from "../lib/getSocialMediaLinks";
import { getHomePage } from "../lib/getHomePage/getHomePage";
import dynamic from 'next/dynamic'
import LargeInformationBanner from "../components/ui/large-information-banner";

interface Props {
    navData: FinalNavEntryItems[]
    logo: FinalLogoProps
    footerLogo: FinalLogoProps
    socialMediaLinks: SocialMediaLinks[]
    contentSliderData: ContentSliderProps[]
    welcomeBanner: LargeBannerProps
}

export default function Home({ navData, logo, footerLogo, contentSliderData, socialMediaLinks, welcomeBanner }: Props) {
    const ContentSlider = dynamic(() => import('../components/ui/news-carousel'))
    return (
        <Layout navData={navData} logo={logo} footerLogo={footerLogo} socialMediaLinks={socialMediaLinks} index={0}>
            <Stack height='100vh'>
                <ContentSlider data={contentSliderData} />
                {/* <LargeInformationBanner data={welcomeBanner} /> */}
            </Stack>
        </Layout >
    )
}

export async function getStaticProps() {
    const navItems = await getNavItems()
    const navImage = await getNavImages()
    const footerLogo = await getFooterImages()
    const socialMediaLinks = await getSocialMediaLinks()

    const { getContentSlider } = getHomePage()
    const contentSlider = await getContentSlider()

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
        welcomeBanner: welcomeBanner
    }
    return { props }
}