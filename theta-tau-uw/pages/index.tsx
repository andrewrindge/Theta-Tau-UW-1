import { Stack, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import getNavItems, { getNavImages } from "../lib/getNavItems";
import { FinalLogoProps, FinalNavEntryItems } from "../lib/types";
import ContentSlider from '../components/content/ContentSlider'


interface Props {
    navData: FinalNavEntryItems[]
    logo: FinalLogoProps
}


export default function Home({ navData, logo }: Props) {
    return (
        <Layout navData={navData} logo={logo} index={0}>
            <Stack>
                <ContentSlider />
                <Text>
                    Lorem ipsum dolor sit amet.
                </Text>
            </Stack>
        </Layout>
    )
}

export async function getStaticProps() {
    const navItems = await getNavItems()
    const navImage = await getNavImages()

    const props: Props = {
        navData: navItems,
        logo: navImage
    }
    return { props }
}