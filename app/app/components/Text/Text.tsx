"use client";

import * as React from "react";
import styles from "./text.module.scss";
import useText from "./useText";
import classnames from "classnames";

import "./text.scss";

// Font sizes
export enum EnumTextVariant {
  footnote = "footnote",
  caption = "caption",
  small = "small",
  base = "base",
  big = "big",
  lead = "lead",
  subheading = "subheading",
  heading = "heading",
  title = "title",
  display = "display",
  jumbo = "jumbo",
}

export enum EnumTextSize {
  footnote = EnumTextVariant.footnote,
  caption = EnumTextVariant.caption,
  small = EnumTextVariant.small,
  base = EnumTextVariant.base,
  big = EnumTextVariant.big,
  lead = EnumTextVariant.lead,
  subheading = EnumTextVariant.subheading,
  heading = EnumTextVariant.heading,
  title = EnumTextVariant.title,
  display = EnumTextVariant.display,
  jumbo = EnumTextVariant.jumbo,
}

export type TextSize = keyof typeof EnumTextSize;
export type TextVariant = keyof typeof EnumTextVariant;

export interface TextProps {
  children: React.ReactNode | React.ReactNode[];
  htmlElement?: string | any;
  size?: TextSize | "footnote" | "caption" | "small" | "base" | "big" | "lead" | "subheading" | "heading" | "title" | "display" | "jumbo";
  variant?: TextVariant;
}

export const Text: React.FC<TextProps> = ({
  children,
  htmlElement,
  size,
  variant
} : TextProps) => {
  const { handleTextSize, handleTextVariants } = useText();

  const textSizesCSS = handleTextSize(size);
  const textVariantsCSS = handleTextVariants(variant);

  const textClasses = classnames({
    [styles["ca-text"]]: true,
    [textSizesCSS]: size ? true : false,
    [textVariantsCSS]: variant ? true : false,
  });

  let textElement;

  const createTextElement = (htmlTag: string | any, classes: string | any) => {
    return React.createElement(htmlTag, {
      className: classes,
      children: children
    });
  }

  switch (variant) {
    case htmlElement:
      textElement = createTextElement(htmlElement, textClasses);
      break;
    case "footnote":
      textElement = createTextElement("p", textClasses);
      break;
    case "caption":
      textElement = createTextElement("p", textClasses);
      break;
    case "small":
      textElement = createTextElement("small", textClasses);
      break;
    case "base":
      textElement = createTextElement("p", textClasses);
      break;
    case "big":
      textElement = createTextElement("p", textClasses);
      break;
    case "lead":
      textElement = createTextElement("p", textClasses);
      break;
    case "subheading":
      textElement = createTextElement("h4", textClasses);
      break;
    case "heading":
      textElement = createTextElement("h2", textClasses);
      break;
    case "title":
      textElement = createTextElement("h3", textClasses);
      break;
    case "display":
      textElement = createTextElement("p", textClasses);
      break;
    case "jumbo":
      textElement = createTextElement("p", textClasses);
      break;
    default:
      textElement = createTextElement("p", textClasses);
  } 

  return textElement ? textElement : (<p>Text Component</p>);
};