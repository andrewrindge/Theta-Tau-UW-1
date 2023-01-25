import { Heading, Image, Stack } from "@chakra-ui/react";
import Layout from "../components/utils/Layout";
import { getFooterImages } from "../lib/getFooterItems";
import getNavItems, { getNavImages } from "../lib/getNavItems";
import getSocialMediaLinks from "../lib/getSocialMediaLinks";
import { FinalNavEntryItems, FinalLogoProps, SocialMediaLinks } from '../lib/types'

interface Props {
    navData: FinalNavEntryItems[]
    logo: FinalLogoProps
    footerLogo: FinalLogoProps
    socialMediaLinks: SocialMediaLinks[]
}

export default function FAQ({ ...props }: Props) {

    const { navData, logo, footerLogo, socialMediaLinks } = props
    const layoutProps = { navData, logo, footerLogo, socialMediaLinks }

    return (
        <Layout {...layoutProps} index={3}>
            <Stack width='100%' alignItems='center'>
                <Heading>Something Bad Happened</Heading>
            </Stack>
            <Image
                src='https://i0.wp.com/daoudisamir.com/wp-content/uploads/2018/08/0.jpeg?resize=638%2C479&ssl=1'
                alt='something bad happened'
            />
        </Layout>
    )
}

export async function getStaticProps() {
    const navItems = await getNavItems()
    const navImage = await getNavImages()
    const footerLogo = await getFooterImages()
    const socialMediaLinks = await getSocialMediaLinks()

    const props: Props = {
        navData: navItems,
        logo: navImage,
        footerLogo: footerLogo,
        socialMediaLinks: socialMediaLinks
    }
    return { props }
}