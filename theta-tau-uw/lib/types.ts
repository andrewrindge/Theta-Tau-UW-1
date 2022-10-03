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

export interface FinalContentSlider {
    backgroundImage: Promise<[] | ImageData[]>
    data: {
        buttonData: Promise<Promise<ButtonData>[]>
        text: Promise<{
            content: {
                nodeType: NodeType;
                values: string;
            }[][];
            data: string | {} | null | undefined;
            nodeType: NodeType[];
            document: NodeType;
        }>
        title: Promise<string>
    }
    length: number
}

export interface BannerArticleData {
    button: Promise<ButtonData>[]
    richTextDescription: {
        content: {
            nodeType: NodeType
            values: string
        }[][]
        data: string | null | {} | undefined
        nodeType: NodeType[]
        document: NodeType
    }
    title: string
}

export interface ButtonData {
    text: string
    link: string
}

export interface FinalButtonData {
    data: {
        text: string
        link: string
    }
}

export interface BannerItems {
    backgroundImage: {
        sys: SysFields
    }
    button: {
        sys: SysFields
    }[]
    description: {
        content: {
            content: {
                nodeType: NodeType
                values: string
            }[]
            data: string | null | {} | undefined
            nodeType: NodeType
        }[]
        data: {
            nodeType: NodeType
        }
    }
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

export interface ContentSlider {
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