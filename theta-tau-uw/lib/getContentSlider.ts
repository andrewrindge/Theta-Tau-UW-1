import axios from "axios"
import { CONTENTFUL_BASE_URI } from "./globals"
import getBannerArticle from "./getBannerArticle"
import { ContentSlider, BannerArticleData, FinalContentSlider } from "./types"
import { getImage } from "./client"

export default async function getContentSlider(url: string): Promise<any> {

    const rawData = (
        await axios.get(
            `${CONTENTFUL_BASE_URI}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/entries/${url}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_TOKEN}`
        ).then(res => res.data)
    )?.fields as ContentSlider

    let transformedData: Promise<BannerArticleData>[]
    let images = getImage()

    if (rawData) {
        transformedData = rawData.bannerItems.map((entry, index) => {
            let singleBannerArticle = getBannerArticle(entry.sys.id as string)
            return singleBannerArticle
        })

    } else {
        throw new Error('content slider data cannot be fetched')
    }

    let dataLength: number = 0
    transformedData.map(() => {
        dataLength++
    })

    const finalData = transformedData.map((entry) => {
        return {
            backgroundImage: images,
            data: {
                buttonData: entry.then(res => res.button),
                text: entry.then(res => res.richTextDescription),
                title: entry.then(res => res.title)
            },
            length: dataLength
        }
    }) as FinalContentSlider[]

    return finalData
}