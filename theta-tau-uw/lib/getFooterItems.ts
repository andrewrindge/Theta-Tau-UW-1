import { getFooterLogo } from "./client";
import { FinalLogoProps, LogoProps } from "./types";

export default async function getFooterItems() {

}

export async function getFooterImages(): Promise<any> {
    const hammer_and_tongs = await getFooterLogo() as LogoProps
    console.log(hammer_and_tongs)

    const finalImageData = {
        alt: hammer_and_tongs.alt,
        src: `'https://upload.wikimedia.org/wikipedia/en/d/d7/ThetaTau.png`
    } as FinalLogoProps

    return finalImageData
}