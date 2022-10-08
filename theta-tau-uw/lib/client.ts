import { ContentfulImageResponse, FinalLogoProps, FooterLogoProps, ImageData, ImageResponse } from './types'
import * as contentful from 'contentful'

export default function client() {
    const client = () => {
        const base_api_auth = contentful.createClient({
            space: `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
            accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_TOKEN}`,
            // host: 'preview.contentful.com'
        })
        return base_api_auth
    }

    return client()
}

export async function getLogo() {
    const imageClient = client()
    const getImage = async () => {
        try {
            const res = await imageClient.getEntries({
                content_type: 'logo'
            }).then((data) => {
                return data.items[0]?.fields
            })
            return res
        } catch (error) {
            console.log(error)
        }
    }

    const result = await getImage()
    return result
}

export async function getImage(): Promise<ImageResponse[] | []> {
    const imageClient = client()
    const getImage = async () => {
        try {
            const res = await imageClient.getEntries({
                content_type: 'image'
            }).then((data) => {
                const transfromedData = data as unknown as ContentfulImageResponse
                return transfromedData.items.map((entry) => {
                    return {
                        alt: entry.fields.alt,
                        src: entry.fields.image.fields.file.url,
                        caption: entry.fields.image.fields.description,
                        title: entry.fields.image.fields.title
                    }
                })
            })
            return res as ImageResponse[]
        } catch (error) {
            console.log(error)
        }
    }



    const result = await getImage()
    return result as ImageResponse[] | []
}

export async function getFooterLogo() {
    const footerLogoClient = client()
    const getFooterLogo = async () => {
        try {
            const res = await footerLogoClient.getEntries({
                content_type: 'footerLogo'
            }).then((data) => {
                return data.items[0]?.fields
            })
            return res
        } catch (error) {
            console.log(error)
        }
    }

    const footerLogo = await getFooterLogo()
    return footerLogo
}