import axios from "axios"
import { CONTENTFUL_BASE_URI } from "./globals"
import { NavItems } from "./types"
import client from "./client"

interface NavEntryResponse {
    items: NavEntryItems[]
    limit: number
    skip: number
    sys: {
        type: string
    }
    total: number
}

interface NavEntryItems {
    fields: {
        title: string[]
        url: string[]
    }
}

export interface FinalNavEntryItems {
    title: string
    url: string
}

export default async function getNavItems(): Promise<FinalNavEntryItems[]> {

    const rawData = (
        await axios.get(
            'https://cdn.contentful.com/spaces/6u84kk32236l/environments/master/entries?access_token=VskZM0_sSXmt5ev-VGUTA62HkAy7PY-0_E21Kp5fk0M&limit=10'
        ).then((res) => res.data)
    ) as NavEntryResponse

    const navData = rawData.items.map((entry) => {
        return entry.fields.title.map((item, index) => {
            return {
                title: item,
                url: entry.fields.url[index]
            }
        })

    })
    const finalNavData = navData[0] as FinalNavEntryItems[]

    if (finalNavData == null || finalNavData[0] == undefined) {
        throw new Error('nav data cannot be fetched')
    }

    return finalNavData
}