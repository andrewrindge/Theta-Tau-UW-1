import { Stack, Text } from "@chakra-ui/react";
import Layout from "../components/utils/Layout";
import { FinalNavEntryItems, FinalLogoProps, ContentSliderResponse, SocialMediaLinks, ImageOverlayTextBox } from "../lib/types";
import getNavItems, { getNavImages } from '../lib/getNavItems'
import { getFooterImages } from "../lib/getFooterItems";
import getSocialMediaLinks from "../lib/getSocialMediaLinks";
import ImageOverlayWithQuote from "../components/ui/image-overlay-with-quote";
import { getAboutPage } from "../lib/getPageContent/getAboutPage";

interface Props {
    navData: FinalNavEntryItems[]
    logo: FinalLogoProps
    footerLogo: FinalLogoProps
    socialMediaLinks: SocialMediaLinks[]
    imageOverlayTextBox: ImageOverlayTextBox
}


export default function About({
    navData,
    logo,
    footerLogo,
    socialMediaLinks,
    imageOverlayTextBox
}: Props) {
    console.log(imageOverlayTextBox)
    return (
        <Layout navData={navData} logo={logo} footerLogo={footerLogo} socialMediaLinks={socialMediaLinks} index={1}>
            <Stack>
                <ImageOverlayWithQuote data={imageOverlayTextBox} />
            </Stack>
        </Layout>
    )
}

export async function getStaticProps() {
    const navItems = await getNavItems()
    const navImage = await getNavImages()
    const footerLogo = await getFooterImages()
    const socialMediaLinks = await getSocialMediaLinks()

    const { getImageOverlayTextBox } = getAboutPage()
    const imageOverlayTextBox = (await getImageOverlayTextBox()) as ImageOverlayTextBox

    const props: Props = {
        navData: navItems,
        logo: navImage,
        footerLogo: footerLogo,
        socialMediaLinks: socialMediaLinks,
        imageOverlayTextBox: imageOverlayTextBox
    }
    return { props }
}