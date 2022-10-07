import axios from "axios"
import { CONTENTFUL_BASE_URI } from "./globals"
import { BannerItems, ButtonData, BannerArticleData } from "./types"
import getButtonData from "./getButtonData"
import { getImage } from "./client"

export default async function getBannerArticle(contentURL: string): Promise<BannerArticleData> {
    const rawData = (
        await axios.get(
            `${CONTENTFUL_BASE_URI}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/entries/${contentURL}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_TOKEN}`
        ).then(res => res.data)
    )?.fields as BannerItems

    let buttons: ButtonData[] = []

    if (rawData.button) {
        rawData.button.map(async (entry) => {
            const res = await getButtonData(entry.sys.id)
            buttons.push(res)
        })
    }

    const images = await getImage()

    const fields = {
        button: buttons,
        backgroundImage: images,
        title: rawData.title,
        description: rawData.description
    } as BannerArticleData

    return fields
}