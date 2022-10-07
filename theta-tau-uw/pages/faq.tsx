import { Stack, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import getNavItems, { getNavImages } from "../lib/getNavItems";
import { FinalNavEntryItems, FinalLogoProps } from '../lib/types'


interface Props {
    navData: FinalNavEntryItems[]
    logo: FinalLogoProps
}


export default function FAQ({ navData, logo }: Props) {
    return (
        <Layout navData={navData} logo={logo} index={3}>
            <Stack>
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