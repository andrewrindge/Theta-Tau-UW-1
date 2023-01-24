import { client } from "../useContentful/useContentful"

export function getRecruitmentPage() {
    const getFullWidthCarousel = async () => {
        try {
            const data = (await client.getEntries({
                contenty_type: 'fullWidthCarousel',

            })).items

        } catch (error) {
            throw new Error(`Failed to get full width carousel ${error}`)
        }
    }
}