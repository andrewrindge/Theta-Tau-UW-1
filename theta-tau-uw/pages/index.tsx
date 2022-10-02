import { Stack, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import getNavItems, { FinalNavEntryItems } from "../lib/getNavItems";


interface Props {
    navData: FinalNavEntryItems[]
}


export default function Home({ navData }: Props) {
    const test = async () => {
        const items = await getNavItems()
        console.log(items)
    }
    test()
    return (
        <Layout navData={navData} index={0}>
            <Stack>
                <Text>
                    Lorem ipsum dolor sit amet.
                </Text>
            </Stack>
        </Layout>
    )
}

export async function getStaticProps() {
    // const navItems = await getNavItems()
    const navItems = [{ title: 'Home', url: '/' }, { title: 'About', url: '/' }, { title: 'Recruitment', url: '/' }]
    const props: Props = {
        navData: navItems
    }
    return { props }
}