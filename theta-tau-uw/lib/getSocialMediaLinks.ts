import axios from "axios"
import { CONTENTFUL_BASE_URI } from "./globals"
import { SocialMediaLinks } from "./types"

interface SocialMediaRawData {
    fields: {
        title: string
    }
}

export default async function getNavItems(): Promise<SocialMediaLinks[]> {
    const rawData = (
        await axios.get(
            `${CONTENTFUL_BASE_URI}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_ENVIRONMENT_KEY}/entries?content_type=socialMediaLinks&access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_TOKEN}&limit=10`
        ).then((res) => res.data)
    )?.items as SocialMediaRawData[]

    const transformedData = rawData.map((entry) => {
        return {
            type: getType(entry.fields.title),
            url: entry.fields.title
        }
    })
    return transformedData as SocialMediaLinks[]
}

function getType(entry: string) {
    if (entry.includes('facebook')) {
        return 'facebook'
    } else if (entry.includes('instagram')) {
        return 'instagram'
    } else if (entry.includes('mail')) {
        return 'mail'
    } else {
        return 'bad link'
    }
}