import { Grid, GridItem, Stack, Text } from "@chakra-ui/react"
import MemberCard from "./member-card"

export default function CardGrid({ start, end }: { start: number; end: number }) {

    return (
        <Stack width='100%'>
            <Grid
                templateColumns={{
                    base: '1fr',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(4, 1fr)'
                }}
                gap={10}
            >
                {tempMemberCards.slice(start, end).map((card, index) => (
                    <GridItem key={index} backgroundColor='#F8F8F8'>
                        <MemberCard {...card} />
                    </GridItem>
                ))}

            </Grid>
        </Stack>
    )
}

const tempMemberCards = [
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },
    {
        id: 1,
        name: "One Member",
        major: "Engineering B.S.",
        committee: "Committee Type",
        profile: {
            src: 'https://images.ctfassets.net/6u84kk32236l/5pGTJ6rZkSMuaqj3n3OnJv/4b6122eab622033a5b530a83d41a9ca8/placeholder-picture-large-opt.png',
            alt: 'temporary placeholder image'
        }
    },

]