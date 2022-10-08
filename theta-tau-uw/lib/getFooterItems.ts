import { getFooterLogo } from "./client";
import { FinalLogoProps, LogoProps } from "./types";


interface FooterLogo {
    alt: string
    footerLogo: {
        fields: {
            file: {
                url: string
            }
        }
    }
}

export default async function getFooterItems() {

}

export async function getFooterImages(): Promise<any> {
    const hammer_and_tongs = await getFooterLogo() as FooterLogo

    const finalImageData = {
        alt: hammer_and_tongs.alt,
        src: `https:${hammer_and_tongs.footerLogo.fields.file.url}`
    } as FinalLogoProps

    return finalImageData
}