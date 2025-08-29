
    //! SectionHeading Component

// import { StrapiImage } from "../StrapiImage";
// import Link from "next/link";
// import ReactMarkdown from "react-markdown";

import type { SectionHeadingProps } from "@/types";

export function SectionHeading({
  subHeading,
  heading,
  anchorLink,
}: Readonly<SectionHeadingProps>) {
  return (
    <section >
     
      <div className='section-heading'>
        
        <h3 className={'head'}>
          {subHeading}
        </h3>
        <h1 className={'bigger'}>
            {heading}
        </h1>
        {/* maybe use the anchorLink later?? <a></a> */}
      </div>
    </section>
  );
}