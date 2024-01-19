"use client";

import * as React from "react";
import styles from "./Heading.module.scss";
import useHeading from "./useHeading";
import classnames from "classnames";

import "./heading.scss";

export enum EnumHeadingVariant {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
}

export enum EnumHeadingSize {
  h1 = EnumHeadingVariant.h1,
  h2 = EnumHeadingVariant.h2,
  h3 = EnumHeadingVariant.h3,
  h4 = EnumHeadingVariant.h4,
  h5 = EnumHeadingVariant.h5,
}

export type HeadingSize = keyof typeof EnumHeadingSize;
export type HeadingVariant = keyof typeof EnumHeadingVariant;

export interface HeadingProps {
  children: React.ReactNode | React.ReactNode[];
  htmlElement?: string | any;
  size?: HeadingSize | "h1" | "h2" | "h3" | "h4" | "h5";
  variant?: HeadingVariant;
}

const Heading = ({
  children,
  htmlElement,
  size,
  variant
} : HeadingProps) => {
  const { handleHeadingSize, handleHeadingVariants } = useHeading();

  const headingSizesCSS = handleHeadingSize(size);
  const headingVariantsCSS = handleHeadingVariants(variant);

  const headingClasses = classnames({
    [styles["ca-heading"]]: true,
    [headingSizesCSS]: !!size,
    [headingVariantsCSS]: !!variant,
  });

  let headingElement: any;

  const createHeadingElement = (htmlTag: string | any, classes: string | any) => {
    return React.createElement(htmlTag, {
      className: classes,
    }, children);
  }

  switch(variant) {
    case htmlElement:
      headingElement = createHeadingElement(htmlElement, headingClasses);
      break;
    case "h1":
      headingElement = createHeadingElement("h1", headingClasses);
      break;
    case "h2":
      headingElement = createHeadingElement("h2", headingClasses);
      break;
    case "h3":
      headingElement = createHeadingElement("h3", headingClasses);
      break;
    case "h4":
      headingElement = createHeadingElement("h4", headingClasses);
      break;
    case "h5":
      headingElement = createHeadingElement("h5", headingClasses);
      break;
    default:
      headingElement = createHeadingElement("h1", headingClasses);
  }

  return headingElement ? headingElement : <h1>Heading Component</h1>;
};

const h1 = (props) => {
  return (
    <Heading size="h1" variant="h1">{props.children}</Heading>
  );
}

const h2 = (props) => {
  return (
    <Heading size="h2" variant="h2">{props.children}</Heading>
  );
}

const h3 = (props) => {
  return (
    <Heading size="h3" variant="h3">{props.children}</Heading>
  );
}

const h4 = (props) => {
  return (
    <Heading size="h4" variant="h4">{props.children}</Heading>
  );
}

const h5 = (props) => {
  return (
    <Heading size="h5" variant="h5">{props.children}</Heading>
  );
}

Heading.h1 = h1;
Heading.h2 = h2;
Heading.h3 = h3;
Heading.h4 = h4;
Heading.h5 = h5;

export { Heading };