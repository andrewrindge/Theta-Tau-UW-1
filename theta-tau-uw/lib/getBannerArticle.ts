import axios from "axios"
import { CONTENTFUL_BASE_URI } from "./globals"

// export interface BannerItems {
//     backgroundImage:
// }

export default async function getBannerArticle(contentURL: string): Promise<any> {
    const rawData = (
        await axios.get(
            `${CONTENTFUL_BASE_URI}/space/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/entries/${contentURL}?auth_token=${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_TOKEN}`
        ).then(res => res.data)
    )?.fields as any



}