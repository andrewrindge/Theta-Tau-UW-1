import { FullWidthCarouselProps, Image } from "../types"
import { client } from "../useContentful/useContentful"

export function getRecruitmentPage() {
    const getFullWidthCarousel = async () => {
        try {
            const data = (await client.getEntries({
                content_type: 'fullWidthCarousel',
                include: 5,
                select: 'fields',
                'fields.slug': 'Recruitment Page Full Width Carousel'
            })).items[0].fields as {
                rushInformation: {
                    fields: {
                        title: string
                        description: string
                        image: Image
                    }
                }[]
            }

            return {
                fields: [...data.rushInformation.map((entry) => {
                    return {
                        title: entry.fields.title,
                        description: entry.fields.description,
                        image: {
                            src: 'https:' + entry.fields.image.fields.image.fields.file.url,
                            alt: entry.fields.image.fields.alt
                        }
                    }
                })
                ]
            } as FullWidthCarouselProps
        } catch (error) {
            throw new Error(`Failed to get full width carousel ${error}`)
        }
    }

    return { getFullWidthCarousel }
}