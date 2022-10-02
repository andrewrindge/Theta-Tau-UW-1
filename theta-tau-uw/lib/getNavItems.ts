import axios from "axios"
import { CONTENTFUL_BASE_URI } from "./globals"

interface NavEntryResponse {
    name: string
    title: string[]
    url: []
}


export interface FinalNavEntryItems {
    title: string
    url: string
}

export default async function getNavItems(): Promise<FinalNavEntryItems[]> {

    const rawData = (
        await axios.get(
            `${CONTENTFUL_BASE_URI}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_ENVIRONMENT_KEY}/entries/7I171AcHNo0NSDq3yKK0XW?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_TOKEN}&limit=10`
        ).then((res) => res.data)
    )?.fields as NavEntryResponse

    const navData = rawData.title.map((entry, index) => {
        return {
            title: entry,
            url: rawData.url[index]
        }
    })
    console.log(navData)
    const finalNavData = navData as FinalNavEntryItems[]

    if (finalNavData == null || finalNavData[0] == undefined) {
        throw new Error('nav data cannot be fetched')
    }

    return finalNavData
}
