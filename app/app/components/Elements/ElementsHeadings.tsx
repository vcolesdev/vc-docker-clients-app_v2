"use client";

import React from "react";
import { elemStyles } from "./Elements";
import { Heading } from "../Heading/Heading";

function ElementsHeadings() {
  return (
    <>
      <section className={elemStyles.section} data-title="Heading Components">
        <header className={elemStyles.header}>
          <h2 className={elemStyles.heading}>Heading Component</h2>
          <p className={elemStyles.description}>Headings are used for titles and subtitles.</p>
        </header>
        <div className={elemStyles.content}>
          <Heading.h1>Clients App</Heading.h1>
          <Heading.h2>Clients App</Heading.h2>
          <Heading.h3>Clients App</Heading.h3>
          <Heading.h4>Clients App</Heading.h4>
          <Heading.h5>Clients App</Heading.h5>
        </div>
      </section>
    </>
  );
}

export { ElementsHeadings }