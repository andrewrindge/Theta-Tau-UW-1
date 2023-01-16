import { Image, ImageOverlayTextBox } from '../types';
import { client } from '../useContentful/useContentful';

export function getAboutPage() {
    const getImageOverlayTextBox = async () => {
        try {
            const rawData = (await client.getEntries({
                content_type: 'imageOverlayTextBox',
                include: 5,
                select: 'fields',
                'fields.slug': 'About Page Image Overlay Text Box'
            })).items.pop() as {
                fields: {
                    text: string[],
                    image: Image
                }
            }
            const data = {
                text: rawData.fields.text,
                image: {
                    src: rawData.fields.image.fields.image.fields.file.url,
                    alt: rawData.fields.image.fields.alt
                }
            } as ImageOverlayTextBox
            return data
        } catch (error) {
            throw new Error(`Failed to fetch image overlay text box: ${error}`)
        }
    }
    return { getImageOverlayTextBox }
}