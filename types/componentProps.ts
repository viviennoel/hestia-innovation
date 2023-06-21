export type BannerImageSize = "large" | "medium" | "small"

export type BannerImageProps = {
    size: BannerImageSize;
    background: string;
}

export type HighLightsProps = {
    content: HighlightsContent[]
}
type HighlightsContent = {
    source:string,
    title:string,
    text:string,
    link:string,
    delay:string
}

export type BannerTextImageProps = {
    imageSrc: string,
    title: string,
    body: string,
    link: string,
    linkPlaceholder: string,
    variation?: 'dark' | 'light',
    textSide?: 'left' | 'right'
}