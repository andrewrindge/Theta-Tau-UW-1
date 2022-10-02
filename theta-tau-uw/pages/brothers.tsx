import { Stack, Text } from '@chakra-ui/react'
import Layout from '../components/Layout'
import getNavItems, { FinalNavEntryItems } from "../lib/getNavItems";

interface Props {
    navData: FinalNavEntryItems[]
}


export default function Brothers({ navData }: Props) {
    return (
        <Layout navData={navData} index={4}>
            <Stack>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda id excepturi laborum quisquam? Reprehenderit nisi eligendi laboriosam aut vel architecto quam obcaecati nihil libero omnis.
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