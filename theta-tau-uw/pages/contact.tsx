import { Stack, Text } from "@chakra-ui/react";
import ContactForm from "../components/forms/contact-form";
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

export default function Contact({ ...props }: Props) {

    const { navData, logo, footerLogo, socialMediaLinks } = props
    const layoutProps = { navData, logo, footerLogo, socialMediaLinks }

    return (
        <Layout {...layoutProps} index={5}>
            <ContactForm />
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