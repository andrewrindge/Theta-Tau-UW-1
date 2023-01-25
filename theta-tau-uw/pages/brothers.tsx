import { HStack, Stack, Text } from "@chakra-ui/react";
import FilterArea from "../components/ui/filter-area";
import Layout from "../components/utils/Layout";
import ImageOverlayWithQuote from "../components/ui/image-overlay-with-quote";
import { getFooterImages } from "../lib/getFooterItems";
import getNavItems, { getNavImages } from "../lib/getNavItems";
import { getAboutPage } from "../lib/getPageContent/getAboutPage";
import getSocialMediaLinks from "../lib/getSocialMediaLinks";
import { FinalNavEntryItems, FinalLogoProps, SocialMediaLinks, ImageOverlayTextBox } from '../lib/types'
import CardGrid from "../components/ui/card-grid";

interface Props {
    navData: FinalNavEntryItems[]
    logo: FinalLogoProps
    footerLogo: FinalLogoProps
    socialMediaLinks: SocialMediaLinks[]
    imageOverlayTextBox: ImageOverlayTextBox
}

export default function Brothers({ ...props }: Props) {

    const { navData, logo, footerLogo, socialMediaLinks } = props
    const layoutProps = { navData, logo, footerLogo, socialMediaLinks }

    return (
        <Layout {...layoutProps} index={4}>
            <ImageOverlayWithQuote data={props.imageOverlayTextBox} />
            <HStack alignItems='flex-start'>
                <Stack flex={1}>
                    <FilterArea />
                </Stack>
                <Stack width='100%' flex={7} alignItems='center'>
                    <Stack width='80%' textAlign='center'>
                        <Text fontSize='36px' fontWeight={700} padding='30px 0px'>Executive</Text>
                        <CardGrid start={0} end={8} />
                        <Text fontSize='36px' fontWeight={700} padding='30px 0px'>New Members</Text>
                        <CardGrid start={0} end={28} />
                        <Text fontSize='36px' fontWeight={700} padding='30px 0px'>Actives</Text>
                        <CardGrid start={28} end={80} />
                    </Stack>
                </Stack>
            </HStack>
        </Layout >
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