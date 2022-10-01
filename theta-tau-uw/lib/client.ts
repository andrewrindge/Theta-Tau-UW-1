import * as contentful from 'contentful'

export default function client() {
    const client = () => {
        const base_api_auth = contentful.createClient({
            space: `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
            accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_TOKEN}`,
            host: 'preview.contentful.com'
        })
        return base_api_auth
    }

    return client
}