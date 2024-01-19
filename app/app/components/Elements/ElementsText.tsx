"use client";

import React from "react";
import { elemStyles } from "./Elements";
import { Text } from "../Text/Text";

const paraStyles = {
  styles: "mb-3 font-sans font-normal text-gray-700 leading-relaxed",
  p: "text-base",
  pSmall: "text-sm",
  pLarge: "text-lg",
}

const textStyles = {
  underline: "underline",
  italic: "italic",
  light: "font-light",
  medium: "font-medium",
  semiBold: "font-semibold",
  bold: "font-bold",
}

function ElementsText() {
  return (
    <>
      <section className={elemStyles.section} data-title="Paragraphs">
        <header className={elemStyles.header}>
          <h2 className={elemStyles.heading}>Paragraphs</h2>
          <p className={elemStyles.description}>Paragraphs are used for body copy.</p>
        </header>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Variants - Sizes</h3>
          <div className={elemStyles.content}>
            <p className={`${paraStyles.pSmall} ${paraStyles.styles}`}>This is a small paragraph.</p>
            <p className={`${paraStyles.p} ${paraStyles.styles}`}>This is a med paragraph.</p>
            <p className={`${paraStyles.pLarge} ${paraStyles.styles}`}>This is a large paragraph.</p>
          </div>
        </div>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Variants - Styles</h3>
          <p className={`${paraStyles.styles}`}>This is some <span className={textStyles.underline}>underlined</span> text.</p>
          <p className={`${paraStyles.styles}`}>This is some <span className={textStyles.italic}>italic</span> text.</p>
          <p className={`${paraStyles.styles}`}>This is some <span className={textStyles.light}>light</span> text.</p>
          <p className={`${paraStyles.styles}`}>This is some <span className={textStyles.medium}>medium</span> text.</p>
          <p className={`${paraStyles.styles}`}>This is some <span className={textStyles.semiBold}>semi-bold</span> text.</p>
          <p className={`${paraStyles.styles}`}>This is some <span className={textStyles.bold}>bold</span> text.</p>
        </div>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Variants - Long</h3>
          <p className={`${paraStyles.styles}`}>Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Egestas congue quisque egestas
            diam in. Dictum varius duis at consectetur lorem donec massa. Ornare quam viverra orci sagittis
            eu. Donec pretium vulputate sapien nec sagittis. Ultricies integer quis auctor elit sed vulputate
            mi sit. Ultricies mi quis hendrerit dolor. Diam quam nulla porttitor massa id. Pretium aenean
            pharetra magna ac placerat vestibulum lectus mauris ultrices. Duis tristique sollicitudin nibh
            sit amet commodo nulla facilisi. Cras pulvinar mattis nunc sed blandit. Congue eu consequat ac
            felis donec. Pretium lectus quam id leo in vitae turpis. Id nibh tortor id aliquet lectus. Etiam
            non quam lacus suspendisse faucibus interdum posuere. Eget aliquet nibh praesent tristique magna
            sit amet purus. Felis eget nunc lobortis mattis. Lectus proin nibh nisl condimentum id venenatis
            a. Eu nisl nunc mi ipsum faucibus vitae aliquet. Phasellus faucibus scelerisque eleifend donec
            pretium vulputate sapien.
          </p>
        </div>
      </section>
      <section className={elemStyles.section} data-title="Text Sizes">
        <header className={elemStyles.header}>
          <h2 className={elemStyles.heading}>Text Component</h2>
          <p className={elemStyles.description}>The Text component is used for body copy.</p>
        </header>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Text - Variants</h3>
          <div className={elemStyles.content}>
            <div className="mb-5">
              <Text size="footnote" variant="footnote">This is a footnote</Text>
            </div>
            <div className="mb-5">
              <Text size="caption" variant="caption">"The Yellow House" – by Arthur Wallet.</Text>
            </div>
            <div className="mb-5">
            <Text size="small" variant="small">Small text is meant to be de-emphasized.</Text>
            </div>
            <div className="mb-5">
              <Text size="base" variant="base">This is a normal paragraph.</Text>
            </div>
            <div className="mb-5">
              <Text size="big" variant="big">Large text is meant to emphasize a point.</Text>
            </div>
            <div className="mb-5">
              <Text size="lead" variant="lead">Lead paragraphs generally introduce the subject.</Text>
            </div>
            <div className="mb-5">
              <Text size="subheading" variant="subheading">ClientsApp Content Subheading</Text>
            </div>
            <div className="mb-5">
              <Text size="heading" variant="heading">ClientsApp Content Heading</Text>
            </div>
            <div className="mb-5">
              <Text size="title" variant="title">Title Content Heading</Text>
            </div>
            <div className="mb-5">
              <Text size="display" variant="display">Display Text</Text>
            </div>
            <div className="mb-5">
              <Text size="jumbo" variant="jumbo">Hello, World</Text>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export { ElementsText, textStyles, paraStyles }