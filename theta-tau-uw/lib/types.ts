export interface Test {
    test: string
}

export interface NavItems {
    data: {
        items: {
            name: string[]
            link: string[]
        }
    }
}

export interface Test {
    data: {
        backgroundImage: ImageData | []
        fields: BannerArticleData[]
    }
}

export interface ContentSliderData {
    data: {
        backgroundImage: ImageData
        buttonData: {
            link: string
            text: string
        }[]
        text: {
            content: {
                nodeType: NodeType
                values: string
            }[][]
            data: string | {} | null | undefined
            nodeType: NodeType[]
            document: NodeType
        };
        title: string
    }[]
    articleLength: number
}

export interface BannerArticleData {
    button: ButtonData[]
    backgroundImage: ImageResponse[] | []
    richTextDescription: {
        content: {
            nodeType: NodeType
            values: string
        }[][]
        data: string | null | {} | undefined
        nodeType: NodeType[]
        document: NodeType
    }
    title: string,
    description: any
}

export interface ButtonData {
    title: string
    link: string
}

export interface BannerItems {
    backgroundImage: {
        sys: SysFields
    }
    button: {
        sys: SysFields
    }[]
    description: any
    title: string
}

interface SysFields {
    id: string
    linkType: string
    type: string
}

export enum NodeType {
    text,
    paragraph,
    document
}

export interface NavEntryResponse {
    name: string
    title: string[]
    url: []
}

export interface LogoProps {
    alt: string
    logo: {
        fields: {
            file: {
                url: string
            }
        }
    }
}

export interface FinalLogoProps {
    alt: string
    caption: string
    src: string
}


export interface FinalNavEntryItems {
    title: string
    url: string
}

export interface ContentSliderResponse {
    title: string
    bannerItems: {
        sys: {
            type: string
            linkType: string
            id: string
        }
    }[]
}

export interface ImageData {
    fields: {
        description: string
        file: {
            url: string
        }
        title: string
    }
}

export interface ContentfulImageResponse {
    items: {
        fields: {
            alt: string
            image: {
                fields: {
                    title: string
                    description: string
                    file: {
                        url: string
                    }
                }
            }
        }
    }[]
}

export interface ImageResponse {
    alt: string
    src: string
    caption: string
    title: string
}