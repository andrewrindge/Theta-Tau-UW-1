import { ContentSliderProps, Image, Button, CardProps } from '../types'
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

interface LargeInformationBanner {
    fields: {
        button: {
            fields: {
                link: string
                title: string
            }
        }
        description: string
        title: string
        image: Image
    }
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

    const getLargeInformationBanner = async () => {
        try {
            const rawData = (await client.getEntries({
                content_type: 'largeInformationBannerTest',
                include: 5,
                select: 'fields',
                'fields.slug': 'Home Page Large Information Banner'
            })).items as LargeInformationBanner[]

            const data = rawData.map((entry) => {
                return {
                    title: entry.fields.title,
                    description: entry.fields.description,
                    button: {
                        title: entry.fields.button.fields.title,
                        link: entry.fields.button.fields.link
                    },
                    image: {
                        src: 'https:' + entry.fields.image.fields.image.fields.file.url,
                        alt: entry.fields.image.fields.alt
                    }
                }
            })

            return data[0]
        } catch (error) {
            throw new Error(`Failed to get Large Information Banner: ${error}`)
        }
    }

    const getSliderDeckCards = async () => {
        try {
            const rawData = (await client.getEntries({
                content_type: 'card',
                include: 5,
                select: 'fields',
                'fields.slug': 'Home Page Card'
            })).items as {
                fields: {
                    title: string
                    description: string
                    button: {
                        fields: {
                            title: string
                            link: string
                        }
                    }
                    image: {
                        fields: {
                            alt: string
                            image: {
                                fields: {
                                    file: {
                                        url: string
                                    }
                                }
                            }
                        }
                    }
                }
            }[]

            const data = rawData.map((entry) => {
                return {
                    title: entry.fields.title,
                    description: entry.fields.description,
                    button: {
                        title: entry.fields.button.fields.title,
                        link: entry.fields.button.fields.link
                    },
                    image: {
                        alt: entry.fields.image.fields.alt,
                        url: 'https:' + entry.fields.image.fields.image.fields.file.url
                    }
                }
            }) as CardProps[]

            return data
        } catch (error) {
            throw new Error(`Failed to get slider deck cards: ${error}`)
        }
    }
    return { getContentSlider, getLargeInformationBanner, getSliderDeckCards }
}