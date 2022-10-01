import * as contentful from 'contentful'

export default function Client() {
    contentful.createClient({
        space: `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_TOKEN}`,
        host: 'preview.contentful.com'
    })
}