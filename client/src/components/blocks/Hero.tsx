       
       //! Hero-component
    // here is my hero component that is going to be rendered on the landing-page
    
import Link from 'next/link';
import { StrapiImage } from '../StrapiImage';
import type { HeroProps } from '@/types';

import Image from "next/image";


export function HeroSection({
    heading,
    text,
    links,
    image,
}: Readonly<HeroProps>) {
    return (
        <section className='hero-section'>
            
            <div className='image-div'>
                <StrapiImage 
                    
                    src={image.url} 
                    alt={image.alternativeText}
                    width={480}
                    height={720}
                />
            </div>
            <div className='text-area'>
                <div>
                    <h1 className='head smaller'>{heading}</h1>
                    <p className='narrow'>{text}</p>
                
                        <Link href={links[0].href}>
                            <button className='primary-button'>
                                {links[0].label}
                            </button>
                        </Link>
                
                    
                        <Link href={links[1].href}>
                            <button className='secondary-button' >
                                {links[1].label}
                            </button>
                        </Link>
                </div>
                
            </div>
        </section>
    )
}
