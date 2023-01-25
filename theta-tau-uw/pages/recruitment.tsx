import FullWidthCarousel from "../components/ui/full-width-carousel";
import Layout from "../components/utils/Layout";
import { getFooterImages } from "../lib/getFooterItems";
import getNavItems, { getNavImages } from "../lib/getNavItems";
import { getRecruitmentPage } from "../lib/getPageContent/getRecruitmentPage";
import getSocialMediaLinks from "../lib/getSocialMediaLinks";
import { FinalNavEntryItems, FinalLogoProps, SocialMediaLinks } from '../lib/types'

interface Props {
    navData: FinalNavEntryItems[]
    logo: FinalLogoProps
    footerLogo: FinalLogoProps
    socialMediaLinks: SocialMediaLinks[]
    fullWidthCarousel: any
}

export default function Recruitment({ ...props }: Props) {

    const { navData, logo, footerLogo, socialMediaLinks } = props
    const layoutProps = { navData, logo, footerLogo, socialMediaLinks }

    return (
        <Layout {...layoutProps} index={2}>
            <FullWidthCarousel data={props.fullWidthCarousel} />
        </Layout>
    )
}

export async function getStaticProps() {
    const navItems = await getNavItems()
    const navImage = await getNavImages()
    const footerLogo = await getFooterImages()
    const socialMediaLinks = await getSocialMediaLinks()

    const { getFullWidthCarousel } = await getRecruitmentPage()

    const fullWidthCarousel = await getFullWidthCarousel()

    const props: Props = {
        navData: navItems,
        logo: navImage,
        footerLogo: footerLogo,
        socialMediaLinks: socialMediaLinks,
        fullWidthCarousel: fullWidthCarousel
    }
    return { props }
}