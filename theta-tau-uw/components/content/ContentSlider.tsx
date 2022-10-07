import { HStack, Stack, Text, IconButton, Button } from "@chakra-ui/react";
import { useState } from "react";
import getBannerArticle from "../../lib/getBannerArticle";
import { BannerArticleData, ButtonData, ContentSliderResponse } from "../../lib/types";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

interface Props {
    data: ContentSliderResponse
}

export default function ContentSlider({ data }: Props) {
    const [index, setIndex] = useState<number>(0)
    const [carouselItems, setCarouselItems] = useState<BannerArticleData[] | null>()
    const [refresh, setRefresh] = useState(true)

    Promise.all(data.bannerItems.map(async (entry) => {
        const data = await getBannerArticle(entry.sys.id)
        return data
    })).then((res) => {
        if (res.length && refresh) {
            setRefresh(false)
            setCarouselItems(res)
        }
    })

    const next = () => {
        if (carouselItems) {
            if (index + 1 < carouselItems.length) {
                setIndex(index + 1)
            } else {
                setIndex(0)
            }
        }
    }

    const previous = () => {
        if (carouselItems) {
            if (index - 1 >= 0) {
                setIndex(index - 1)
            } else {
                setIndex(carouselItems.length - 1)
            }
        }
    }

    let imageUrl = ''
    let text = ''
    let title = ''
    let buttons: ButtonData[] = []
    if (carouselItems) {
        imageUrl = carouselItems[index].backgroundImage[index].src
        text = documentToHtmlString(carouselItems[index].description)
        title = carouselItems[index].title
        buttons = carouselItems[index].button
    }

    return (


        <HStack
            backgroundImage={
                `url(https://${imageUrl})`
            }
            backgroundSize='100%'
            backgroundRepeat='no-repeat'
            backgroundPosition='center'
            height='75vh'
        >
            <Stack padding='25px'>
                <IconButton
                    as={FaArrowAltCircleLeft}
                    aria-label={`go back to image ${index}`}
                    onClick={() => previous()}
                />
            </Stack>
            <HStack
                width='100%'
                height='100%'
                alignItems='center'
                justifyContent='center'
                color='#FFF'
            >
                <Stack
                    zIndex={100}
                    borderRadius='10px'
                    width='50%'
                    height='50%'
                    backdropFilter='auto'
                    backdropBlur='10px'
                    backdropBrightness='30%'
                    padding='20px'
                    justifyContent='space-around'
                >
                    <Stack>
                        <Text fontWeight={800} fontSize='40px'>{title}</Text>
                        <Text dangerouslySetInnerHTML={{ __html: text }} />
                    </Stack>
                    <HStack key={index} justifyContent='flex-end' width='100%'>
                        {buttons.map((entry, index) => {
                            return (
                                <Button
                                    key={index}
                                    onClick={() => {
                                        window.location.href = `${entry.link}`
                                    }}
                                    maxWidth='250px'
                                    backgroundColor='#8B0000'
                                >
                                    {entry.title}
                                </Button>

                            )
                        })}
                    </HStack>
                </Stack>
            </HStack>
            <Stack padding='25px'>
                <IconButton
                    as={FaArrowAltCircleRight}
                    aria-label={`go nexy to image ${index}`}
                    onClick={() => next()}
                />
            </Stack>
        </HStack>

    )
}