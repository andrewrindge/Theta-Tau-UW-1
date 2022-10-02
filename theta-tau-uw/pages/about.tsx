import { Stack, Text } from '@chakra-ui/react'
import Layout from '../components/Layout'
import getNavItems, { FinalNavEntryItems } from "../lib/getNavItems";

interface Props {
    navData: FinalNavEntryItems[]
}


export default function About({ navData }: Props) {
    return (
        <Layout navData={navData} index={1}>
            <Stack>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quasi possimus. Aliquid, eius eveniet corrupti sed provident ducimus architecto rem!
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