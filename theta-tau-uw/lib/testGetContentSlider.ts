import axios from "axios"
import { CONTENTFUL_BASE_URI } from "./globals"
import getBannerArticle from "./getBannerArticle"
import { ContentSliderResponse, } from "./types"
import { getImage } from "./client"

export default async function getContentSlider(url: string): Promise<ContentSliderResponse> {

    const rawData = (
        await axios.get(
            `${CONTENTFUL_BASE_URI}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/entries/${url}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_TOKEN}`
        ).then(res => res.data)
    )?.fields as ContentSliderResponse

    return rawData as ContentSliderResponse
}