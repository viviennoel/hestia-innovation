export type BannerImageSize = "large" | "medium" | "small"

export type BannerImageProps = {
    size: BannerImageSize;
    background: string;
    children?: React.ReactNode;
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

export type CarouselProps = {
    source: string;
    alt: string;
    link: string;
    title: string;
    text: string;
}

export type BulletPointsProps = {
    img: string;
    title: string;
    text: string;
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

export type ButtonProps = {
    variation: 'clear' | 'dark',
    children?: React.ReactNode
}