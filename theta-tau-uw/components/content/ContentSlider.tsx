import { Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import getContentSlider from "../../lib/getContentSlider";
import { FinalContentSlider } from "../../lib/types";
import getNavItems from "../../lib/getNavItems";

export default function ContentSlider() {
    const res = getContentSlider('2Dqg7Ug8vRdmWR1IeJhTAu')
    console.log(res.then((res) => res))

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate excepturi aut quis animi similique omnis nesciunt assumenda sunt eaque? Harum.
            </Text>
        </Stack>
    )
}