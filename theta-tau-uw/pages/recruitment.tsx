import { Stack, Text } from '@chakra-ui/react'
import Layout from '../components/Layout'
import getNavItems, { FinalNavEntryItems } from "../lib/getNavItems";

interface Props {
    navData: FinalNavEntryItems[]
}


export default function Recruitment({ navData }: Props) {
    return (
        <Layout navData={navData} index={2}>
            <Stack>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quaerat, non magni voluptas sapiente accusantium aspernatur. Inventore maiores minima odit cupiditate, saepe eos quidem, facere quod, nesciunt ad ab. Aperiam neque laboriosam iure ut dolor quam, quo voluptates dolorem fuga ipsum architecto exercitationem ipsa voluptatum?
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