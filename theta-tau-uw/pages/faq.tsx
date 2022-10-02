import { Stack, Text } from '@chakra-ui/react'
import Layout from '../components/Layout'
import getNavItems, { FinalNavEntryItems } from "../lib/getNavItems";

interface Props {
    navData: FinalNavEntryItems[]
}


export default function FAQ({ navData }: Props) {
    return (
        <Layout navData={navData} index={3}>
            <Stack>
                <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum eum suscipit iure beatae numquam obcaecati sapiente dolorum placeat velit tempora maiores similique, perferendis molestias facere fuga nisi laboriosam! Libero eum sequi quidem enim. Illo voluptates natus officia amet ratione neque, ex nesciunt nostrum impedit id, minus asperiores veritatis obcaecati quaerat aperiam laboriosam? Suscipit alias totam sed aspernatur accusamus, illo ab praesentium obcaecati ea. Dolor aspernatur neque architecto, officia earum vel! Nulla, odio accusantium? Eos deleniti voluptatum aliquid ipsam, autem porro doloremque? Ex cupiditate expedita alias dignissimos dolorum assumenda porro, rerum, nam aliquam sint quibusdam magnam eaque reprehenderit id enim ratione nisi odio dolor! Dolore, animi voluptatem. Dolores totam adipisci accusantium reiciendis voluptates in, excepturi nisi aliquid facere sint sit iste commodi reprehenderit vero alias quas inventore amet dolore consequuntur! Alias cum consectetur quae dolor. Harum eaque neque amet odit commodi nostrum, voluptas aliquid corrupti. Nam, tenetur. Fugiat dolores commodi, laboriosam illum molestias accusamus atque, necessitatibus, temporibus doloremque autem eos quis eum. Aspernatur consequuntur qui ducimus accusamus ea debitis veritatis voluptas expedita minima hic soluta nesciunt placeat harum quos, odio ipsam inventore ex eius atque cumque fugit. Architecto nostrum numquam, doloribus soluta quasi laborum inventore odit aspernatur ratione repudiandae laudantium saepe!
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