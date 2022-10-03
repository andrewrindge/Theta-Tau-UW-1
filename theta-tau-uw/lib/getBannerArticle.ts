import axios from "axios"
import { CONTENTFUL_BASE_URI } from "./globals"
import { BannerItems, ButtonData, BannerArticleData } from "./types"
import getButtonData from "./getButtonData"
import { NodeType } from './types'

export default async function getBannerArticle(contentURL: string): Promise<BannerArticleData> {
    const rawData = (
        await axios.get(
            `${CONTENTFUL_BASE_URI}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/entries/${contentURL}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_TOKEN}`
        ).then(res => res.data)
    )?.fields as BannerItems

    let buttons: Promise<ButtonData>[]

    if (rawData.button) {
        buttons = rawData.button.map(async (entry) => {
            const res = await getButtonData(entry.sys.id)
            return {
                text: res.text,
                link: res.link
            }
        })
    } else {
        buttons = []
    }

    buttons.map((entry) => {
        entry.then(res => {
            console.log(typeof res.link)
            console.log(typeof res.text)
        })
    })

    const finalData = {
        button: buttons, //get button link .ts
        richTextDescription: {
            content: rawData.description.content.map(entry => entry.content),
            data: rawData.description.content.map(entry => entry.data),
            nodeType: rawData.description.content.map(entry => entry.nodeType),
            document: rawData.description.data.nodeType
        },
        title: rawData.title
    } as BannerArticleData

    return finalData
}