import { Image, ImageOverlayTextBox, LargeInformationBannerTestProps, StatsBarProps, WhereWeGoProps } from '../types';
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

    const getLargeInformationBanner = async () => {
        try {
            const rawData = (await client.getEntries({
                content_type: 'largeInformationBannerTest',
                include: 5,
                select: 'fields',
                'fields.slug': 'About Page Large Information Banner'
            })).items as {
                fields: {
                    description: string
                    title: string
                    image: Image
                    primaryColor: string
                    secondaryColor: string
                }
            }[]

            const data = rawData.map((entry, index) => {
                return {
                    title: entry.fields.title,
                    description: entry.fields.description,
                    image: {
                        src: 'https:' + entry.fields.image.fields.image.fields.file.url,
                        alt: entry.fields.image.fields.alt
                    },
                    reverse: index % 2 === 0 ? true : false,
                    primaryColor: entry.fields.primaryColor,
                    secondaryColor: entry.fields.secondaryColor
                }
            })
            return data as LargeInformationBannerTestProps[]
        } catch (error) {
            throw new Error(`Failed to get Large Information Banner: ${error}`)
        }

    }

    const getStatsBar = async () => {
        try {
            const rawData = (await client.getEntries({
                content_type: 'statsBar',
                include: 5,
                select: 'fields',
                'fields.slug': 'About Page Stats Bar'
            })).items[0] as {
                fields: {
                    stats: {
                        fields: {
                            number: number
                            description: string
                        }
                    }[]
                }
            }

            const data = {
                stats: rawData.fields.stats
            } as StatsBarProps

            return data

        } catch (error) {
            throw new Error(`Failed to fetch stats bar: ${error}`)
        }
    }

    const getWhereWeGo = async () => {
        try {
            const rawData = (await client.getEntries({
                content_type: 'whereWeGo',
                include: 8,
                select: 'fields',
                'fields.slug': 'About Page Where We Go'
            })).items[0] as {
                fields: {
                    company: {
                        fields: {
                            title: string
                            jobPosition: string[]
                            image: Image
                        }
                    }[]
                    title: string
                }
            }

            const data = {
                title: rawData.fields.title,
                companies: [
                    ...rawData.fields.company.map((entry) => {
                        return {
                            title: entry.fields.title,
                            jobPosition: [
                                ...entry.fields.jobPosition.map((entry) => {
                                    return entry
                                })
                            ],
                            image: {
                                alt: entry.fields.image.fields.alt,
                                src: 'https:' + entry.fields.image.fields.image.fields.file.url
                            }
                        }
                    })
                ]
            }
            return data as WhereWeGoProps
        } catch (error) {
            throw new Error(`Failed to fetch where we go: ${error}`)
        }
    }

    return { getImageOverlayTextBox, getLargeInformationBanner, getStatsBar, getWhereWeGo }
}