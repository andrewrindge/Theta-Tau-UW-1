import axios from "axios";
import { CONTENTFUL_BASE_URI } from "./globals";
import { ButtonData, FinalButtonData } from "./types";

export default async function getButtonData(id: string): Promise<FinalButtonData> {
    const rawData = (
        await axios.get(
            `${CONTENTFUL_BASE_URI}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/entries/${id}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_TOKEN}`
        ).then(res => res.data)
    )?.fields as ButtonData

    const finalData = {
        text: rawData.text,
        link: rawData.link
    }
    return { data: finalData }
}