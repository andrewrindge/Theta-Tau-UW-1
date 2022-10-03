import axios from "axios"
import { CONTENTFUL_BASE_URI } from "./globals"
import { getLogo } from './client'

interface NavEntryResponse {
    name: string
    title: string[]
    url: []
}

interface LogoProps {
    alt: string
    logo: {
        fields: {
            file: {
                url: string
            }
        }
    }
}

export interface FinalLogoProps {
    alt: string
    caption: string
    src: string
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

    const finalNavData = navData as FinalNavEntryItems[]

    if (finalNavData == null || finalNavData[0] == undefined) {
        throw new Error('nav data cannot be fetched')
    }

    return finalNavData
}

export async function getNavImages(): Promise<any> {
    const imageData = await getLogo() as LogoProps

    const finalImageData = {
        alt: imageData.alt,
        src: `https:${imageData.logo.fields.file.url}`
    } as FinalLogoProps

    return finalImageData
}
