
    //! SectionHeading Component

// import { StrapiImage } from "../StrapiImage";
// import Link from "next/link";
// import ReactMarkdown from "react-markdown";

import type { CardGridProps } from "@/types";
import { Card } from "./Card";

export function CardGrid({
  cards,
}: Readonly<CardGridProps>) {
  return (
    <section >
     
      <div className="card-grid-container">
      {cards.map((card) => (
        <Card 
          key={card.id}
          id={card.id}
          heading={card.heading}
          text={card.text}
        />
      ))}
    </div>
    </section>
  );
}