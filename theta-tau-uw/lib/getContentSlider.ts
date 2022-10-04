import axios from "axios"
import { CONTENTFUL_BASE_URI } from "./globals"
import getBannerArticle from "./getBannerArticle"
import { ContentSliderData, ContentSliderResponse, BannerArticleData } from "./types"
import { getImage } from "./client"

export default async function getContentSlider(url: string): Promise<ContentSliderData> {

    const rawData = (
        await axios.get(
            `${CONTENTFUL_BASE_URI}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/entries/${url}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_TOKEN}`
        ).then(res => res.data)
    )?.fields as ContentSliderResponse

    let bannerArticleData: BannerArticleData[] = []
    let images = await getImage()

    if (rawData) {
        rawData.bannerItems.map(async (entry) => {
            const singleBannerArticle = await getBannerArticle(entry.sys.id as string)
            bannerArticleData.push(singleBannerArticle)
        })
    } else {
        throw new Error(`content slider data cannot be fetched uwu`)
    }

    console.log(bannerArticleData)

    const fields = {
        data: bannerArticleData.map((entry, index) => {
            return {
                backgroundImage: images[index],
                buttonData: entry.button.map((entry) => { return { link: entry.link, text: entry.title } }),
                text: entry.richTextDescription,
                title: entry.title
            }
        }),
        articleLength: bannerArticleData.length
    }
    console.log(fields)
    return fields as ContentSliderData
}