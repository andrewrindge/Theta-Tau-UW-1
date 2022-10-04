import { ImageData } from './types'
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
            const res = await imageClient
                .getEntries({ content_type: 'logo' })
                .then((data) => {
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

export async function getImage(): Promise<ImageData[] | []> {
    const imageClient = client()
    const getImage = async () => {
        try {
            const res = await imageClient
                .getEntries({ content_type: 'image' })
                .then((data) => {
                    return data.items.map((entry) => {
                        return {
                            fields: {
                                description: '',
                                file: {
                                    url: ''
                                },
                                title: ''
                            }
                        }
                    })
                })
            return res as ImageData[]
        } catch (error) {
            console.log(error)
        }
    }


    const result = await getImage()
    return result as ImageData[] | []
}