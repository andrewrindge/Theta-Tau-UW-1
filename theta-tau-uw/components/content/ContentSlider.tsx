import { Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import getContentSlider from "../../lib/getContentSlider";
import { ButtonData, ContentSliderData } from "../../lib/types";

interface Props {
    data: ContentSliderData
}

export default function ContentSlider({ data }: Props) {
    const test = async () => {
        const data = await getContentSlider('2Dqg7Ug8vRdmWR1IeJhTAu')
        console.log(data)
    }
    test()
    const [counter, setCounter] = useState<number>(0)

    // const next = () => {
    //     if (counter + 1 < res.) setCounter(counter + 1)
    //     else setCounter(0)
    // }

    // const previous = () => {
    //     if (counter - 1 >= 0)
    // }

    return (
        <Stack>
            <Text>
                {data.articleLength !== 0 && (

                    data.articleLength
                )}
                {data.data.map((entry, index) => {
                    return (
                        <Stack key={index}>
                            <Text>

                            </Text>
                        </Stack>
                    )
                })}
            </Text>
        </Stack>
    )
}