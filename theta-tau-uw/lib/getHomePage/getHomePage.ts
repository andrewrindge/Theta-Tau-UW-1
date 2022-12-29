import { ContentSliderProps, Image, Button } from '../types'
import { client } from '../useContentful/useContentful'

interface ContentSlider {
    bannerItems: {
        fields: {
            backgroundImage: Image
            title: string
            button: {
                fields: {
                    title: string
                    link: string
                }
            }[]
            // description: RichTextContent
            description: any
        }
    }[]
}

export function getHomePage() {
    const getContentSlider = async () => {
        try {
            const rawData = (
                await client.getEntries({
                    content_type: 'contentSlider',
                    select: 'fields',
                    include: 2,
                    "fields.slug": "Home Page Content Slider"
                })
            ).items.map(entry => entry.fields) as ContentSlider[]

            const data = rawData.map((entry) => {
                return entry.bannerItems.map((bannerItem) => {
                    return {
                        backgroundImage: {
                            alt: bannerItem.fields.backgroundImage.fields.alt,
                            image: "https:" + bannerItem.fields.backgroundImage.fields.image.fields.file.url
                        },
                        title: bannerItem.fields.title,
                        button: bannerItem.fields.button.map((button) => {
                            return {
                                title: button.fields.title,
                                link: button.fields.link
                            } as Button
                        }),
                        description: bannerItem.fields.description
                    }
                }) as ContentSliderProps[]
            })

            return data[0]
        } catch (error) {
            throw new Error(`Full screen banner failed to load: ${error}`)
        }
    }
    return { getContentSlider }
}