
    //! Here are the Shared-Component Props

export interface LinkProps{
    id: number;
    label: string;
    href: string;
    isExternal: boolean;
    isButtonLink: boolean;
    type: string;
}


export interface ImageProps{
    id: number;
    documentId: string;
    url: string;
    alternativeText: string
}


export interface LogoLinkProps{
    id: number;
    label: string;
    href: string;
    isExternal: boolean;
    image: ImageProps;
}

export interface CardProps{
    id: number;
    heading: string;
    text: string;
}


export interface FaqProps{
    id: number;
    heading: string;
    text: string;
}

    //! Component Types

type ComponentType = 'blocks.hero'      | 'blocks.section-heading'    | 
                     'blocks.card-grid' | 'blocks.content-with-image' |
                     'blocks.markdown'  | 'blocks.person-card'        | 
                     'blocks.faqs'      | 'blocks.newsletter'         ;


    //! Base Component Interface

interface Base
< 
    T extends ComponentType,
    D extends object = Record<string, unknown>
> {
    id: number;
    __component?: T;
    documentId?: string;
    createdAt: string;
    updatedAt?: string;
    publishedAt?: string;
    data?: D;
}

    //! Block Components

export type  Block = HeroProps          | SectionHeadingProps   | 
                     CardGridProps      | ContentWithImageProps | 
                     MarkdownProps      | FaqsProps             | 
                     PersonCardProps    | NewsletterProps       ;


    //! Block Component Props below

export interface HeroProps extends Base<'blocks.hero'> {
    heading: string;
    text: string;
    links: [LinkProps, LinkProps];
    image: ImageProps ;
}


export interface SectionHeadingProps extends Base<'blocks.hero'> {
    subHeading: string;
    heading: string;
    anchorLink: string;
}


export interface CardGridProps extends Base<'blocks.card-grid'> {
    cards: [CardProps, CardProps];
}


export interface ContentWithImageProps extends Base<'blocks.card-grid'> {
    reversed: boolean;
    heading: string;
    content: string;
    link: LinkProps;
    image: ImageProps;
}


export interface MarkdownProps extends Base<'blocks.card-grid'> {
    content: string;
}


export interface PersonCardProps extends Base<'blocks.card-grid'> {
    text: string;
    personName: string;
    personJob: string;
    image: ImageProps;
}


export interface FaqsProps extends Base<'blocks.card-grid'> {
    faq: [FaqProps, FaqProps];
}


export interface NewsletterProps extends Base<'blocks.card-grid'> {
    heading: string;
    text: string;
    placeholder: string;
    label: string;
    formId: string;
}



