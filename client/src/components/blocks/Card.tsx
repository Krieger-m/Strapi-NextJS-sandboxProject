
    //! SectionHeading Component

// import { StrapiImage } from "../StrapiImage";
// import Link from "next/link";
// import ReactMarkdown from "react-markdown";

import type { CardProps } from "@/types";

export function Card({
  id,
  heading,
  text
}: Readonly<CardProps>) {
  return (
    <section >
     
      <div className={'card'}>
        
        <h2 className={'head'}>
          {heading}
        </h2>
        <p>
          {text}
        </p>
      </div>
    </section>
  );
}