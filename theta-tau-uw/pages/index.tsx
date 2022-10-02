import { Stack, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import getNavItems, { FinalNavEntryItems } from "../lib/getNavItems";


interface Props {
    navData: FinalNavEntryItems[]
}


export default function Home({ navData }: Props) {
    return (
        <Layout navData={navData}>
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
    const props: Props = {
        navData: navItems
    }
    return { props }
}